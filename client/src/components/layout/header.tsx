import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-xl py-2' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 animate-fade-in">
              <h1 className="text-2xl font-bold font-montserrat gradient-text">
                JortikiSanda
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="relative text-primary hover:text-gold px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("quem-somos")}
                className="relative text-gray-700 hover:text-gold px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="relative text-gray-700 hover:text-gold px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("clientes")}
                className="relative text-gray-700 hover:text-gold px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection("noticias")}
                className="relative text-gray-700 hover:text-gold px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10"
              >
                Notícias
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="relative text-gray-700 hover:text-gold px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-to-r from-primary to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
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
              onClick={() => scrollToSection("clientes")}
              className="text-gray-700 hover:text-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection("noticias")}
              className="text-gray-700 hover:text-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Notícias
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-gold block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              FAQ
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
