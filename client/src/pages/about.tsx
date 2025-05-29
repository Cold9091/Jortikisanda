import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import About from "@/components/sections/about";
import WhyChooseUs from "@/components/sections/why-choose-us";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Award, Users, TrendingUp, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">Sobre a JortikiSanda</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Mais de uma década de experiência em contabilidade e assessoria empresarial em Angola
              </p>
            </div>
          </div>
        </section>

        <About />
        
        {/* Extended Company Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nossa História
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  A JortikiSanda nasceu da necessidade de oferecer serviços contábeis de excelência 
                  para empresas angolanas. Fundada com o objetivo de simplificar a gestão empresarial 
                  e garantir conformidade fiscal, crescemos para nos tornar uma referência no setor.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa equipe altamente qualificada possui profundo conhecimento da legislação 
                  angolana e experiência prática em diversos setores da economia nacional.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-gray-600">Clientes Atendidos</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Excelência</h3>
                  <p className="text-sm text-gray-600">Compromisso com a qualidade em todos os serviços</p>
                </div>
                <div className="bg-gold/10 rounded-xl p-6 text-center">
                  <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Equipe Especializada</h3>
                  <p className="text-sm text-gray-600">Profissionais certificados e experientes</p>
                </div>
                <div className="bg-green-100 rounded-xl p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Crescimento</h3>
                  <p className="text-sm text-gray-600">Impulsionamos o sucesso dos nossos clientes</p>
                </div>
                <div className="bg-blue-100 rounded-xl p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Confiança</h3>
                  <p className="text-sm text-gray-600">Transparência e ética em todas as relações</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* Contact Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-600">
                Estamos prontos para atender sua empresa
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefones</h3>
                <p className="text-gray-600">+244 939 103 175</p>
                <p className="text-gray-600">+244 932 036 524</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-mails</h3>
                <p className="text-gray-600">Jortikisanda@gmail.com</p>
                <p className="text-gray-600">Jsescritoriocontabilidade@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Localização</h3>
                <p className="text-gray-600">Luanda, Angola</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/contato">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-700 text-white px-12 py-4 text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Solicitar Orçamento
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