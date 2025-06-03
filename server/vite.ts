import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: ['localhost', '.vercel.app'] as string[],
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Na Vercel, os ficheiros estáticos estarão na pasta dist
  const distPath = process.env.NODE_ENV === 'production'
    ? path.resolve(import.meta.dirname, "..", "dist", "client")
    : path.resolve(import.meta.dirname, "public");

  // Verificar se o diretório existe
  try {
    if (!fs.existsSync(distPath)) {
      log(`Build directory not found at ${distPath}. Trying alternative paths...`);
      
      // Tentar caminhos alternativos
      const altPaths = [
        path.resolve(import.meta.dirname, "..", "dist"),
        path.resolve(import.meta.dirname, "..", "client"),
        path.resolve(import.meta.dirname, "public")
      ];
      
      for (const altPath of altPaths) {
        if (fs.existsSync(altPath)) {
          log(`Found alternative build directory at ${altPath}`);
          app.use(express.static(altPath));
          
          // fall through to index.html if the file doesn't exist
          app.use("*", (_req, res) => {
            if (fs.existsSync(path.resolve(altPath, "index.html"))) {
              res.sendFile(path.resolve(altPath, "index.html"));
            } else {
              res.status(404).send("Build files not found");
            }
          });
          
          return;
        }
      }
      
      log("No build directory found in any location");
    } else {
      log(`Using build directory at ${distPath}`);
      app.use(express.static(distPath));
      
      // fall through to index.html if the file doesn't exist
      app.use("*", (_req, res) => {
        if (fs.existsSync(path.resolve(distPath, "index.html"))) {
          res.sendFile(path.resolve(distPath, "index.html"));
        } else {
          res.status(404).send("index.html not found");
        }
      });
    }
  } catch (error) {
    log(`Error in serveStatic: ${error}`);
    // Não lançar erro, apenas registar e continuar
    app.use("*", (_req, res) => {
      res.status(500).send("Server configuration error");
    });
  }
}
