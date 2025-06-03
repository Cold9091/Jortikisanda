import { Check, Star, Crown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Plans() {
  const plans = [
    {
      id: "basico",
      name: "Plano Básico",
      icon: Shield,
      iconColor: "text-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      services: [
        "Contabilidade",
        "Obrigações Fiscais",
        "Recursos Humanos",
        "Suporte On-line",
        "Software de Facturação Gratuito"
      ],
      featured: false
    },
    {
      id: "medio",
      name: "Plano Médio",
      icon: Star,
      iconColor: "text-gold",
      bgGradient: "from-yellow-50 to-gold/20",
      borderColor: "border-gold/30",
      buttonColor: "bg-gold hover:bg-yellow-400",
      services: [
        "Contabilidade",
        "Obrigações Fiscais", 
        "Recursos Humanos",
        "Gestão Financeira",
        "Suporte On-line",
        "Software de Facturação Gratuito"
      ],
      featured: true
    },
    {
      id: "avancado",
      name: "Plano Avançado",
      icon: Crown,
      iconColor: "text-primary",
      bgGradient: "from-primary/10 to-blue-100",
      borderColor: "border-primary/30",
      buttonColor: "bg-primary hover:bg-blue-700",
      services: [
        "Contabilidade",
        "Obrigações Fiscais",
        "Recursos Humanos", 
        "Gestão Financeira",
        "Suporte On-line",
        "Reuniões Mensais para Análise da Empresa",
        "Atendimento Personalizado",
        "Planejamento Tributário",
        "Software de Contabilidade Completo"
      ],
      featured: false
    }
  ];

  const handleContactForPlan = (planName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o ${planName} da JortikiSanda. Podem me dar mais informações?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/244939103175?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section id="planos" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-gold/5 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Crown className="mr-2" size={16} />
            Nossos Planos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
            Escolha o Plano Ideal
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções contábeis completas adaptadas às necessidades da sua empresa, desde startups até grandes corporações.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl p-8 border-2 ${plan.borderColor} hover-lift animate-scale-in ${
                plan.featured ? 'ring-4 ring-gold/20 transform scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-primary px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <plan.icon className={plan.iconColor} size={32} />
                </div>
                <h3 className="text-2xl font-bold font-montserrat text-primary mb-2">
                  {plan.name}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {plan.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start">
                    <Check className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleContactForPlan(plan.name)}
                className={`w-full ${plan.buttonColor} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Solicitar Informações
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold font-montserrat mb-4">
            Não Encontrou o Plano Ideal?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Criamos soluções personalizadas para atender às necessidades específicas da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+244932036524'}
              className="text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#dc6014'}}
            >
              Falar com Consultor
            </Button>
            <Button
              onClick={() => handleContactForPlan("solução personalizada")}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              WhatsApp Direto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}