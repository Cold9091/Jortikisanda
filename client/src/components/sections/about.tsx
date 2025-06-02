import { Target, Eye, Heart, Star, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import officeIllustration from "@assets/Imagem WhatsApp 2025-06-02 às 14.27.43_db70ac7a.jpg";
import officeSpace1 from "@assets/Imagem WhatsApp 2025-06-02 às 14.27.44_4c40f8e8.jpg";
import officeSpace2 from "@assets/Imagem WhatsApp 2025-06-02 às 14.27.43_8dfce741.jpg";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teamImages = [
    {
      src: "/assets/team1.webp",
      alt: "Equipe da JortikiSanda - Profissionais experientes",
      title: "Nossa Equipe Principal"
    },
    {
      src: officeIllustration,
      alt: "Profissionais da JortikiSanda trabalhando no escritório",
      title: "Nosso Ambiente de Trabalho"
    },
    {
      src: officeSpace1,
      alt: "Escritório organizado com documentos fiscais",
      title: "Organização e Eficiência"
    },
    {
      src: officeSpace2,
      alt: "Espaço de trabalho moderno e profissional",
      title: "Tecnologia e Modernidade"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="quem-somos" className="py-24 bg-gradient-to-br from-primary via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-gold/20 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in">
            {/* Team Carousel */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative">
                <img
                  src={teamImages[currentSlide].src}
                  alt={teamImages[currentSlide].alt}
                  className="w-full h-auto transition-all duration-1000 ease-in-out object-cover aspect-[4/3]"
                />
                
                {/* Carousel Navigation */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                  <button
                    onClick={prevSlide}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 p-2 rounded-full transition-all duration-300 group pointer-events-auto"
                  >
                    <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 p-2 rounded-full transition-all duration-300 group pointer-events-auto"
                  >
                    <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={16} />
                  </button>
                </div>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {teamImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Image Title Overlay */}
                <div className="absolute bottom-8 left-4 right-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="text-white font-medium text-sm">{teamImages[currentSlide].title}</h4>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating achievement cards */}
            <div className="absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <Award className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Certificados</div>
                  <div className="text-xs text-gray-600">ISO 9001:2015</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Star className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Excelência</div>
                  <div className="text-xs text-gray-600">15+ anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-4">
              <Users className="mr-2" size={16} />
              Sobre a JortikiSanda
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white section-divider pt-6">
              Quem Somos
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              A JortikiSanda é uma empresa angolana especializada em serviços contábeis, auditoria e consultoria financeira, comprometida em oferecer soluções de excelência para empresas de todos os portes.
            </p>
            
            <p className="text-blue-100 leading-relaxed">
              Com mais de 15 anos de experiência no mercado angolano, nossa equipe de profissionais qualificados oferece serviços personalizados que atendem às necessidades específicas de cada cliente, sempre em conformidade com a legislação nacional e as melhores práticas internacionais.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-lift border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-primary/20 to-blue-100 p-3 rounded-xl mr-4">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-primary">
                    Nossa Missão
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Fornecer serviços contábeis e de auditoria de alta qualidade, contribuindo para o crescimento sustentável e sucesso dos nossos clientes.
                </p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-lift border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-gold/20 to-yellow-100 p-3 rounded-xl mr-4">
                    <Eye className="text-gold" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-primary">
                    Nossa Visão
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ser a empresa de referência em serviços contábeis em Angola, reconhecida pela excelência, inovação e compromisso com o desenvolvimento empresarial.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-red-100 to-pink-100 p-3 rounded-xl mr-4">
                  <Heart className="text-red-500" size={24} />
                </div>
                <h3 className="text-2xl font-semibold font-montserrat text-white">
                  Nossos Valores
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  "Integridade",
                  "Transparência", 
                  "Qualidade",
                  "Compromisso",
                  "Responsabilidade"
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/30 min-h-[70px] flex items-center justify-center w-full">
                      <div className="text-xs md:text-sm font-medium text-primary text-center leading-tight px-1 word-break: break-word">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Stats */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-montserrat text-white mb-4">
              Nossa Trajetória de Sucesso
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Anos de dedicação e expertise resultaram em uma trajetória sólida de crescimento e reconhecimento no mercado angolano.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100 font-medium">Profissionais Certificados</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-green-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100 font-medium">Anos de Experiência</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100 font-medium">Empresas Atendidas</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold/20 to-yellow-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="text-gold" size={32} />
              </div>
              <div className="text-3xl font-bold text-gold mb-2">99%</div>
              <div className="text-blue-100 font-medium">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
