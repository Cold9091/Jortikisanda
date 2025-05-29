import { Target, Eye, Heart, Star, Users, Award } from "lucide-react";

export default function About() {
  return (
    <section id="quem-somos" className="py-24 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-gold/10 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Equipe profissional de contabilidade"
                className="rounded-3xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating achievement cards */}
            <div className="absolute -top-6 -right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg mr-3">
                  <Award className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Certificados</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">ISO 9001:2015</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-3">
                  <Star className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Excelência</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">15+ anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              <Users className="mr-2" size={16} />
              Sobre a JortikiSanda
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary section-divider pt-6">
              Quem Somos
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A JortikiSanda é uma empresa angolana especializada em serviços contábeis, auditoria e consultoria financeira, comprometida em oferecer soluções de excelência para empresas de todos os portes.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Com mais de 15 anos de experiência no mercado angolano, nossa equipe de profissionais qualificados oferece serviços personalizados que atendem às necessidades específicas de cada cliente, sempre em conformidade com a legislação nacional e as melhores práticas internacionais.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-lift">
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
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-lift">
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
            
            <div className="bg-gradient-to-r from-primary/5 to-gold/5 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-red-100 to-pink-100 p-3 rounded-xl mr-4">
                  <Heart className="text-red-500" size={24} />
                </div>
                <h3 className="text-2xl font-semibold font-montserrat text-primary">
                  Nossos Valores
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  "Integridade",
                  "Transparência", 
                  "Qualidade",
                  "Compromisso",
                  "Responsabilidade"
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="text-sm font-medium text-primary">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Stats */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-montserrat text-primary mb-4">
              Nossa Trajetória de Sucesso
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Anos de dedicação e expertise resultaram em uma trajetória sólida de crescimento e reconhecimento no mercado angolano.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Profissionais Certificados</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-green-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Empresas Atendidas</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold/20 to-yellow-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="text-gold" size={32} />
              </div>
              <div className="text-3xl font-bold text-gold mb-2">99%</div>
              <div className="text-gray-600 font-medium">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
