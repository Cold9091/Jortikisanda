import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Users, FileText, Search, TrendingUp, GraduationCap, Building } from "lucide-react";
import { ServiceItem } from "@/lib/types";

const services: ServiceItem[] = [
  {
    icon: "Calculator",
    title: "Contabilidade",
    description: "Gestão completa da contabilidade empresarial com precisão e conformidade fiscal.",
    features: [
      "Escrituração contábil",
      "Demonstrações financeiras",
      "Balanços e balancetes",
      "Controle patrimonial"
    ]
  },
  {
    icon: "Users",
    title: "Gestão de Recursos Humanos",
    description: "Soluções completas para gestão de pessoal e folha de pagamento.",
    features: [
      "Folha de pagamento",
      "Admissões e demissões",
      "Segurança social",
      "Gestão de benefícios"
    ]
  },
  {
    icon: "FileText",
    title: "Fiscalidade Empresarial",
    description: "Consultoria fiscal especializada e planejamento tributário estratégico.",
    features: [
      "Declarações fiscais",
      "Planejamento tributário",
      "Consultoria fiscal",
      "IVA e impostos"
    ]
  },
  {
    icon: "Search",
    title: "Auditoria Financeira",
    description: "Auditorias rigorosas para garantir transparência e conformidade contábil.",
    features: [
      "Auditoria externa",
      "Auditoria interna",
      "Due diligence",
      "Revisão de contas"
    ]
  },
  {
    icon: "TrendingUp",
    title: "Estudos de Viabilidade",
    description: "Análises detalhadas para impulsionar o crescimento e rentabilidade.",
    features: [
      "Análise de investimentos",
      "Projeções financeiras",
      "Estudos de mercado",
      "Análise de risco"
    ]
  },
  {
    icon: "GraduationCap",
    title: "Formação Profissional",
    description: "Capacitação e treinamento especializado para sua equipe.",
    features: [
      "Capacitação contábil",
      "Workshops fiscais",
      "Treinamento em software",
      "Seminários especializados"
    ]
  },
  {
    icon: "Building",
    title: "Abertura e Legalização",
    description: "Apoio completo na constituição e legalização de empresas.",
    features: [
      "Constituição de empresas",
      "Registo comercial",
      "Licenças e alvarás",
      "Alterações societárias"
    ]
  }
];

const IconComponent = ({ iconName }: { iconName: string }) => {
  const iconMap = {
    Calculator,
    Users,
    FileText,
    Search,
    TrendingUp,
    GraduationCap,
    Building
  };
  
  const Icon = iconMap[iconName as keyof typeof iconMap] || Calculator;
  return <Icon size={32} />;
};

export default function Services() {
  return (
    <>
      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full filter blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full text-gold font-medium mb-6">
              <Calculator className="mr-2" size={16} />
              Soluções Especializadas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas e inovadoras para todas as necessidades contábeis e fiscais da sua empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-gold/20 to-yellow-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calculator className="text-gold" size={32} />
                </div>
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4">
                  Contabilidade
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gestão completa da contabilidade empresarial com precisão e conformidade fiscal total.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4">
                  Auditoria Financeira
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Auditorias rigorosas para garantir transparência e conformidade contábil absoluta.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4">
                  Análise Financeira
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Estudos detalhados para impulsionar o crescimento e rentabilidade sustentável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="servicos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <Building className="mr-2" size={16} />
              Expertise Completa
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
              Serviços Especializados
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços especializados para atender todas as necessidades da sua empresa com excelência e inovação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift bg-white border-0 shadow-lg hover:shadow-2xl animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-gold/20 to-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent iconName={service.icon} />
                    </div>
                    <h3 className="text-2xl font-semibold font-montserrat text-primary mb-4 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="text-gray-600 space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center group-hover:text-gray-700 transition-colors">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold font-montserrat mb-4">
                Pronto para Transformar sua Empresa?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares de sucesso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.getElementById("contato");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gold text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
                >
                  Solicitar Consulta Gratuita
                </button>
                <button 
                  onClick={() => window.open("https://wa.me/244939103175?text=Olá! Gostaria de saber mais sobre os serviços da JortikiSanda.", "_blank")}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
