import { Button } from "@/components/ui/button";
import { File, MessageCircle, CalendarCheck, ChevronDown, TrendingUp, Users, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Componente de contador animado
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold mb-2">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/244939103175?text=Olá! Gostaria de saber mais sobre os serviços da JortikiSanda.", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:Jortikisanda@gmail.com?subject=Solicitação de Orçamento";
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById("stats");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <Shield className="mr-2" size={16} />
                Empresa líder em contabilidade em Angola
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight">
                Organizamos sua{" "}
                <span className="gradient-text">
                  contabilidade
                </span>
                , impulsionamos seu{" "}
                <span className="gradient-text">
                  crescimento
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed">
                Especialistas em contabilidade, auditoria fiscal e análise financeira para empresas angolanas que buscam excelência e crescimento sustentável.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button
                  onClick={handleEmail}
                  className="group bg-orange-accent text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <File className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                  Solicitar Orçamento
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="group bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <MessageCircle className="mr-3 group-hover:bounce transition-transform" size={20} />
                  Falar via WhatsApp
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <CalendarCheck className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Marcar Reunião
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <div className="text-2xl font-bold text-orange-accent">500+</div>
                  <div className="text-sm text-blue-200">Clientes Ativos</div>
                </div>
                <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
                  <div className="text-2xl font-bold text-orange-accent">15+</div>
                  <div className="text-sm text-blue-200">Anos de Experiência</div>
                </div>
                <div className="text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-2xl font-bold text-orange-accent">99%</div>
                  <div className="text-sm text-blue-200">Satisfação</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Escritório profissional moderno"
                  className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Cards - Now positioned above the image */}
                <div className="absolute -top-6 -left-6 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <TrendingUp className="text-green-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Crescimento</div>
                      <div className="text-xs text-gray-600">+45% este ano</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Users className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Equipe Expert</div>
                      <div className="text-xs text-gray-600">50+ profissionais</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
            <ChevronDown className="text-white/70 hover:text-white transition-colors" size={32} />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-br from-primary via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <div className="text-primary">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Empresas Atendidas</div>
                <div className="text-sm text-gray-500 mt-1">Em todo território nacional</div>
              </div>
            </div>
            <div className="text-center hover-lift">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <div className="text-gold">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Anos de Experiência</div>
                <div className="text-sm text-gray-500 mt-1">No mercado angolano</div>
              </div>
            </div>
            <div className="text-center hover-lift">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <div className="text-green-600">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-600 font-medium">Satisfação dos Clientes</div>
                <div className="text-sm text-gray-500 mt-1">Avaliação média</div>
              </div>
            </div>
            <div className="text-center hover-lift">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <div className="text-purple-600">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-600 font-medium">Profissionais</div>
                <div className="text-sm text-gray-500 mt-1">Certificados e experientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
