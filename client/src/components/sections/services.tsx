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
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Oferecemos soluções completas para todas as necessidades contábeis e fiscais da sua empresa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-gold mb-4">
                  <Calculator size={32} />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-3">
                  Contabilidade
                </h3>
                <p className="text-gray-600">
                  Gestão completa da contabilidade empresarial com precisão e conformidade fiscal.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-gold mb-4">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-3">
                  Auditoria Financeira
                </h3>
                <p className="text-gray-600">
                  Auditorias rigorosas para garantir transparência e conformidade contábil.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-gold mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-3">
                  Análise Financeira
                </h3>
                <p className="text-gray-600">
                  Estudos detalhados para impulsionar o crescimento e rentabilidade do seu negócio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-4">
              Serviços Detalhados
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços especializados para atender todas as necessidades da sua empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-gold mb-4">
                    <IconComponent iconName={service.icon} />
                  </div>
                  <h3 className="text-xl font-semibold font-montserrat text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-gray-600 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
