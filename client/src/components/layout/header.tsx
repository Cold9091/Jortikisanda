import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-xl py-2' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 animate-fade-in">
              <h1 className="text-2xl font-bold font-montserrat gradient-text">
                JortikiSanda
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isActive("/") ? "text-primary" : "text-gray-700 hover:text-gold"
                }`}
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isActive("/sobre") ? "text-primary" : "text-gray-700 hover:text-gold"
                }`}
              >
                Sobre Nós
              </Link>
              <Link
                href="/servicos"
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isActive("/servicos") ? "text-primary" : "text-gray-700 hover:text-gold"
                }`}
              >
                Serviços
              </Link>
              <Link
                href="/planos"
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isActive("/planos") ? "text-primary" : "text-gray-700 hover:text-gold"
                }`}
              >
                Planos
              </Link>
              <Link
                href="/blog"
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isActive("/blog") ? "text-primary" : "text-gray-700 hover:text-gold"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/depoimentos"
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isActive("/depoimentos") ? "text-primary" : "text-gray-700 hover:text-gold"
                }`}
              >
                Depoimentos
              </Link>
              <Link
                href="/faq"
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isActive("/faq") ? "text-primary" : "text-gray-700 hover:text-gold"
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/contato"
                className="bg-gradient-to-r from-primary to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Contato
              </Link>
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
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/sobre") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              Sobre Nós
            </Link>
            <Link
              href="/servicos"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/servicos") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/planos"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/planos") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              Planos
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/blog") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/depoimentos"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/depoimentos") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              Depoimentos
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/faq") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/contato"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive("/contato") ? "text-primary" : "text-gray-700 hover:text-gold"
              }`}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
