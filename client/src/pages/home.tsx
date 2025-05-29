import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Calculator, 
  FileText, 
  Users, 
  BookOpen,
  MessageCircle,
  HelpCircle,
  ArrowRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Navigation Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Explore Nossos Serviços
              </h2>
              <p className="text-xl text-gray-600">
                Navegue pelas nossas páginas especializadas para conhecer melhor nossos serviços
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/servicos">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer hover:scale-105">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossos Serviços</h3>
                  <p className="text-gray-600 mb-4">
                    Contabilidade, assessoria fiscal, gestão empresarial e muito mais
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Ver serviços <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/planos">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer hover:scale-105">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossos Planos</h3>
                  <p className="text-gray-600 mb-4">
                    Básico, Médio e Avançado - encontre o plano ideal para sua empresa
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Ver planos <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/blog">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer hover:scale-105">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog</h3>
                  <p className="text-gray-600 mb-4">
                    Artigos e insights sobre contabilidade e gestão empresarial em Angola
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Ver artigos <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/sobre">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer hover:scale-105">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sobre Nós</h3>
                  <p className="text-gray-600 mb-4">
                    Conheça nossa história, valores e por que somos a melhor escolha
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Sobre nós <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/depoimentos">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer hover:scale-105">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Depoimentos</h3>
                  <p className="text-gray-600 mb-4">
                    Veja o que nossos clientes falam sobre nossos serviços
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Ver depoimentos <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>

              <Link href="/faq">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer hover:scale-105">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <HelpCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Perguntas Frequentes</h3>
                  <p className="text-gray-600 mb-4">
                    Tire suas dúvidas sobre nossos serviços e processos
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Ver FAQ <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-16">
              <Link href="/contato">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-700 text-white px-12 py-4 text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Entre em Contato Conosco
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
