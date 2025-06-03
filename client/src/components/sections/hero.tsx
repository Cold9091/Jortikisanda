import { Button } from "@/components/ui/button";
import { File, MessageCircle, CalendarCheck, ChevronDown, TrendingUp, Users, Shield, Calculator, FileText, PiggyBank, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
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
    <div ref={counterRef} className="text-4xl font-bold mb-2 text-[#002e66]">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      company: "JORTIKISANDA ANGOLA",
      title: "Pensar Global, Agir Local",
      description: "Ser referência na prestação de serviços contabilísticos, buscando o desenvolvimento social e económico justo das entidades e de seus colaboradores, sempre com responsabilidade e confiança dentro dos princípios éticos e profissionais.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      icon: Calculator,
      link: "#servicos"
    },
    {
      id: 2,
      company: "JORTIKISANDA ANGOLA",
      title: "Serviços Especializados",
      description: "Oferecemos uma gama completa de serviços contabilísticos, auditoria, consultoria fiscal e análise financeira para empresas que buscam excelência e crescimento sustentável no mercado angolano.",
      image: "https://www.contabilizario.com.br/wp-content/uploads/2024/06/A-importancia-da-contabilidade-para-a-saude-financeira-das-empresas-1-scaled.jpg",
      icon: FileText,
      link: "#servicos"
    },
    {
      id: 3,
      company: "JORTIKISANDA ANGOLA",
      title: "Planos Personalizados",
      description: "Desenvolvemos soluções sob medida para cada tipo de empresa, desde startups até grandes corporações, com planos flexíveis que se adaptam às suas necessidades específicas de crescimento.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      icon: PiggyBank,
      link: "#planos"
    },
    {
      id: 4,
      company: "JORTIKISANDA ANGOLA",
      title: "Resultados Comprovados",
      description: "Com mais de 15 anos de experiência, já ajudamos mais de 500 empresas a otimizar sua gestão contábil e fiscal, alcançando 99% de satisfação dos nossos clientes em todo território nacional.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      icon: BarChart3,
      link: "#sobre"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/244939103175?text=Olá! Gostaria de saber mais sobre os serviços da JortikiSanda.", "_blank");
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <>
      <section id="inicio" className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={currentSlideData.image}
            alt={currentSlideData.title}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            {/* Company Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <IconComponent className="mr-2" size={16} />
              {currentSlideData.company}
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
              "{currentSlideData.title}"
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-xl">
              {currentSlideData.description}
            </p>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Button
                onClick={handleWhatsApp}
                className="bg-[#dc6014] hover:bg-[#dc6014]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Saiba mais
              </Button>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-full transition-all duration-300 group"
            >
              <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-full transition-all duration-300 group"
            >
              <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={20} />
            </button>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#dc6014] scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce cursor-pointer" onClick={scrollToNext}>
          <ChevronDown className="text-white/70 hover:text-white transition-colors" size={32} />
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
