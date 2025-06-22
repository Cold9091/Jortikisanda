import { Star, Users } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Jorge Abreu",
      position: "Comercial",
      company: "",
      rating: 5,
      content: "A JortikiSanda transformou nossa gestão contábil. Profissionalismo e eficiência excepcionais.",
      initials: "MJ"
    },
    {
      id: 2,
      name: "Frederico",
      position: "Diretor",
      company: "",
      rating: 5,
      content: "Excelente atendimento e soluções personalizadas. Recomendo a todos os empresários.",
      initials: "AC"
    },
    {
      id: 3,
      name: "Augusto Sandango",
      position: "CEO",
      company: "Construção Sandango",
      rating: 5,
      content: "Profissionais competentes e sempre disponíveis. Nossa empresa cresceu com segurança jurídica.",
      initials: "AF"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-br from-primary via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-gold/20 to-transparent rounded-full filter blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-6">
            <Users className="mr-2" size={16} />
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6 section-divider pt-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
            Mais de 500 empresas confiam na JortikiSanda para suas necessidades contábeis e fiscais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover-lift animate-fade-in border border-white/20" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold font-montserrat mb-4">
              Faça Parte dos Nossos Clientes Satisfeitos
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que escolheram a excelência em serviços contábeis.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#dc6014'}}
            >
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}