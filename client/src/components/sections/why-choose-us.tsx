import { Award, Shield, Clock, Handshake, CheckCircle, Star } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-gold/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full font-medium mb-6 text-primary">
            <Star className="mr-2" size={16} />
            Nossos Diferenciais
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
            Porquê Escolher a JortikiSanda?
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Somos mais que um escritório de contabilidade. Somos seus parceiros estratégicos para o sucesso empresarial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group hover-lift animate-scale-in">
            <div className="bg-gradient-to-br from-primary/20 to-blue-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-primary" size={48} />
            </div>
            <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4 group-hover:text-gold transition-colors">
              Experiência
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mais de 15 anos de experiência sólida no mercado angolano, acompanhando o crescimento de centenas de empresas.
            </p>
          </div>
          
          <div className="text-center group hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="text-primary" size={48} />
            </div>
            <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4 group-hover:text-gold transition-colors">
              Confiança
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transparência total e ética profissional em todos os nossos serviços, garantindo sua total segurança.
            </p>
          </div>
          
          <div className="text-center group hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-primary/20 to-blue-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-primary" size={48} />
            </div>
            <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4 group-hover:text-gold transition-colors">
              Agilidade
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Soluções rápidas e eficientes, utilizando tecnologia de ponta para otimizar seus processos contábeis.
            </p>
          </div>
          
          <div className="text-center group hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-gradient-to-br from-primary/20 to-blue-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Handshake className="text-primary" size={48} />
            </div>
            <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4 group-hover:text-gold transition-colors">
              Parceria
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Relacionamento duradouro e personalizado, entendendo as necessidades específicas do seu negócio.
            </p>
          </div>
        </div>
        
        {/* Testimonials section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-montserrat text-primary mb-4">
              O que Nossos Clientes Dizem
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mais de 500 empresas confiam na JortikiSanda para suas necessidades contábeis e fiscais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover-lift animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "A JortikiSanda transformou nossa gestão contábil. Profissionalismo e eficiência excepcionais."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-primary">Maria João Silva</div>
                  <div className="text-sm text-gray-500">CEO, TechAngola Lda</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover-lift animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Excelente atendimento e soluções personalizadas. Recomendo a todos os empresários."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">AC</span>
                </div>
                <div>
                  <div className="font-semibold text-primary">António Carlos</div>
                  <div className="text-sm text-gray-500">Diretor, ComercialPlus</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover-lift animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Parceiros de confiança há mais de 5 anos. Sempre prontos a ajudar e orientar."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">LF</span>
                </div>
                <div>
                  <div className="font-semibold text-primary">Luísa Fernandes</div>
                  <div className="text-sm text-gray-500">Sócia, Consultoria LF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 p-8 bg-white/60 backdrop-blur-sm rounded-3xl">
            <div className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <span className="text-primary font-semibold">Certificação ISO 9001</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <span className="text-primary font-semibold">Licenciados OCC</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <span className="text-primary font-semibold">Auditores Certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
