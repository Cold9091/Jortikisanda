# JortikiSanda - Website Institucional

Website institucional da JortikiSanda, empresa angolana especializada em contabilidade, auditoria e consultoria financeira.

## 🚀 Deploy no Vercel

### Pré-requisitos
- Conta no GitHub
- Conta no Vercel
- Node.js 18+ instalado

### Passos para Deploy

1. **Push para GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/jortikisanda-website.git
   git push -u origin main
   ```

2. **Deploy no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o repositório
   - Configure as seguintes variáveis de ambiente (se necessário):
     - `NODE_ENV=production`
   - Clique em "Deploy"

### Configuração Automática
O projeto já está configurado com:
- ✅ `vercel.json` para configuração de rotas
- ✅ `.gitignore` para arquivos a serem ignorados
- ✅ Scripts de build otimizados

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Componentes**: Radix UI, Lucide React
- **Build**: Vite, ESBuild
- **Deploy**: Vercel

## 📁 Estrutura do Projeto

```
├── client/          # Frontend React
├── server/          # Backend Express
├── shared/          # Schemas compartilhados
├── vercel.json      # Configuração do Vercel
└── package.json     # Dependências
```

## 🌐 Funcionalidades

- Site responsivo e moderno
- Seção "Sobre Nós" com carrossel de imagens
- Formulário de contato funcional
- Links para redes sociais
- Design otimizado para dispositivos móveis

## 📞 Contato

- **Email**: Jortikisanda@gmail.com
- **Telefone**: +244 939 103 175 & +244 932 036 524
- **Localização**: Luanda, Coqueiros, Angola

---

© 2025 JortikiSanda. Todos os direitos reservados.