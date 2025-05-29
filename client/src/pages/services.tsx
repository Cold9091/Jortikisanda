import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Services from "@/components/sections/services";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const detailedServices = [
    {
      icon: Calculator,
      title: "Contabilidade Completa",
      description: "Gestão contábil completa para sua empresa",
      details: [
        "Escrituração contábil mensal",
        "Balancetes e balanços",
        "Demonstrações financeiras",
        "Controle patrimonial",
        "Análise de custos",
        "Relatórios gerenciais"
      ],
      color: "primary"
    },
    {
      icon: FileText,
      title: "Assessoria Fiscal",
      description: "Mantenha sua empresa em conformidade fiscal",
      details: [
        "Cálculo de impostos (IRT, IVA, IS)",
        "Declarações fiscais",
        "Planejamento tributário",
        "Acompanhamento de obrigações",
        "Recursos e defesas",
        "Consultoria fiscal especializada"
      ],
      color: "gold"
    },
    {
      icon: TrendingUp,
      title: "Gestão Empresarial",
      description: "Otimize a gestão do seu negócio",
      details: [
        "Análise de performance",
        "Indicadores de gestão",
        "Controle de fluxo de caixa",
        "Orçamentos e projeções",
        "Análise de viabilidade",
        "Consultoria estratégica"
      ],
      color: "green"
    },
    {
      icon: Users,
      title: "Gestão de Recursos Humanos",
      description: "Administração completa de pessoal",
      details: [
        "Folha de pagamento",
        "Cálculos trabalhistas",
        "INSS e seguros",
        "Admissões e demissões",
        "Controle de férias",
        "Relatórios de RH"
      ],
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Consultoria Jurídica",
      description: "Apoio jurídico especializado",
      details: [
        "Constituição de empresas",
        "Alterações contratuais",
        "Licenças e alvarás",
        "Contratos comerciais",
        "Regularização empresarial",
        "Assessoria jurídica geral"
      ],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Auditoria e Compliance",
      description: "Garanta a conformidade e transparência",
      details: [
        "Auditoria interna",
        "Compliance fiscal",
        "Controles internos",
        "Avaliação de riscos",
        "Relatórios de auditoria",
        "Implementação de controles"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary/10 text-primary",
      gold: "bg-gold/10 text-gold",
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-foreground">
              <h1 className="text-5xl font-bold mb-6 text-foreground">Nossos Serviços</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
                Soluções completas em contabilidade, fiscal e gestão empresarial para o seu negócio
              </p>
            </div>
          </div>
        </section>

        <Services />

        {/* Detailed Services */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Serviços Detalhados
              </h2>
              <p className="text-xl text-muted-foreground">
                Conheça em detalhes cada um dos nossos serviços especializados
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {detailedServices.map((service, index) => (
                <div key={index} className="bg-background rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 ${getColorClasses(service.color)}`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Como Trabalhamos
              </h2>
              <p className="text-xl text-muted-foreground">
                Nosso processo simplificado para atender sua empresa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Análise Inicial</h3>
                <p className="text-muted-foreground">Avaliamos suas necessidades e situação atual</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Proposta Personalizada</h3>
                <p className="text-muted-foreground">Elaboramos uma solução sob medida para você</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Implementação</h3>
                <p className="text-muted-foreground">Colocamos os serviços em funcionamento</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-500">4</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Acompanhamento</h3>
                <p className="text-muted-foreground">Monitoramos e otimizamos continuamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Transformar sua Empresa?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/planos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300">
                  Ver Nossos Planos
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