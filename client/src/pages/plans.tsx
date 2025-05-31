import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Plans from "@/components/sections/plans";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Star, ArrowRight, Phone } from "lucide-react";

export default function PlansPage() {
  const planComparison = [
    {
      feature: "Escrituração Contábil",
      basic: true,
      medium: true,
      advanced: true
    },
    {
      feature: "Balancetes Mensais",
      basic: true,
      medium: true,
      advanced: true
    },
    {
      feature: "Declarações Fiscais",
      basic: "Básicas",
      medium: true,
      advanced: true
    },
    {
      feature: "Folha de Pagamento",
      basic: false,
      medium: "Até 10 funcionários",
      advanced: "Ilimitada"
    },
    {
      feature: "Consultoria Fiscal",
      basic: "Email",
      medium: "Email + Telefone",
      advanced: "Presencial + Remota"
    },
    {
      feature: "Relatórios Gerenciais",
      basic: false,
      medium: "Básicos",
      advanced: "Completos"
    },
    {
      feature: "Planejamento Tributário",
      basic: false,
      medium: false,
      advanced: true
    },
    {
      feature: "Auditoria Interna",
      basic: false,
      medium: false,
      advanced: true
    },
    {
      feature: "Suporte Prioritário",
      basic: false,
      medium: false,
      advanced: true
    },
    {
      feature: "Consultoria Estratégica",
      basic: false,
      medium: false,
      advanced: true
    }
  ];

  const additionalServices = [
    {
      title: "Constituição de Empresas",
      description: "Abertura completa de empresas com toda documentação",
      price: "Sob consulta"
    },
    {
      title: "Regularização Empresarial",
      description: "Regularização de pendências fiscais e documentais",
      price: "Sob consulta"
    },
    {
      title: "Auditoria Externa",
      description: "Auditoria independente para fins específicos",
      price: "Sob consulta"
    },
    {
      title: "Due Diligence",
      description: "Análise detalhada para fusões e aquisições",
      price: "Sob consulta"
    },
    {
      title: "Consultoria Especial",
      description: "Projetos específicos e consultoria pontual",
      price: "Por hora"
    },
    {
      title: "Treinamentos",
      description: "Capacitação em gestão financeira e fiscal",
      price: "Sob consulta"
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    }
    if (value === false) {
      return <span className="text-gray-400 text-center">-</span>;
    }
    return <span className="text-gray-700 text-center text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-blue-900">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/90 via-blue-800/90 to-blue-900/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-white">Nossos Planos</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Escolha o plano ideal para sua empresa e tenha acesso aos melhores serviços contábeis de Angola
              </p>
            </div>
          </div>
        </section>

        <Plans />

        {/* Detailed Comparison */}
        <section className="py-20 bg-gradient-to-br from-primary/80 via-blue-800/80 to-blue-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comparação Detalhada dos Planos
              </h2>
              <p className="text-xl text-blue-100">
                Veja em detalhes o que cada plano oferece
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Funcionalidades
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Plano Básico
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Plano Médio
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Plano Avançado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {planComparison.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.feature}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                          {renderFeatureValue(item.basic)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                          {renderFeatureValue(item.medium)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                          {renderFeatureValue(item.advanced)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-br from-primary/70 via-blue-800/70 to-blue-900/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Serviços Adicionais
              </h2>
              <p className="text-xl text-blue-100">
                Serviços especializados disponíveis para complementar seu plano
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Consultar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-blue-800 to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Perguntas Frequentes sobre Planos
              </h2>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl p-6 shadow-sm border border-border bg-[#ffffff]">
                <h3 className="text-lg font-semibold mb-3 text-[#1d40ad]">
                  Posso mudar de plano a qualquer momento?
                </h3>
                <p className="text-muted-foreground">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                  As mudanças são aplicadas no próximo ciclo de faturamento.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-3 text-[#1d40ad]">
                  Os preços incluem impostos?
                </h3>
                <p className="text-muted-foreground">
                  Os preços apresentados não incluem IVA, que será aplicado conforme a legislação vigente.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Há período de fidelidade?
                </h3>
                <p className="text-muted-foreground">
                  Recomendamos contratos anuais para melhor continuidade dos serviços, mas oferecemos 
                  flexibilidade conforme a necessidade do cliente.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Como funciona o suporte?
                </h3>
                <p className="text-muted-foreground">
                  Oferecemos suporte via email, telefone e presencial conforme o plano contratado. 
                  O Plano Avançado inclui suporte prioritário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para Escolher seu Plano?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma consultoria gratuita e escolha o plano ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Consultor
                </Button>
              </Link>
              <Link href="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300">
                  Ver Todos os Serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
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