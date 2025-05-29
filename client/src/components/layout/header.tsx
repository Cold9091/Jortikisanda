import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold font-montserrat text-primary">
                JortikiSanda
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-primary hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("quem-somos")}
                className="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-700 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("quem-somos")}
              className="text-gray-700 hover:text-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
