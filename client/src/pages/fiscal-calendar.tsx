import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FiscalCalendar from "@/components/sections/fiscal-calendar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Download, Bell, AlertTriangle } from "lucide-react";

export default function FiscalCalendarPage() {
  const importantDates = [
    {
      month: "Janeiro",
      obligations: [
        { name: "IRT - Retenção na Fonte", date: "20/01", priority: "high" },
        { name: "IVA - Declaração Mensal", date: "25/01", priority: "high" },
        { name: "INSS - Contribuições", date: "10/01", priority: "medium" }
      ]
    },
    {
      month: "Fevereiro", 
      obligations: [
        { name: "IS - Imposto de Selo", date: "15/02", priority: "medium" },
        { name: "Mapa de Pessoal", date: "28/02", priority: "high" },
        { name: "Relatório Único", date: "28/02", priority: "high" }
      ]
    },
    {
      month: "Março",
      obligations: [
        { name: "IRT - Declaração Anual", date: "31/03", priority: "high" },
        { name: "IPU - Imposto Predial", date: "31/03", priority: "medium" },
        { name: "II - Imposto Industrial", date: "31/03", priority: "medium" }
      ]
    }
  ];

  const tips = [
    {
      title: "Organize sua Documentação",
      description: "Mantenha todos os documentos fiscais organizados por mês para facilitar o cumprimento das obrigações.",
      icon: "📋"
    },
    {
      title: "Defina Lembretes",
      description: "Configure alertas com antecedência para não perder prazos importantes.",
      icon: "⏰"
    },
    {
      title: "Acompanhe Mudanças na Lei",
      description: "A legislação fiscal pode mudar. Mantenha-se atualizado sobre novas regulamentações.",
      icon: "📚"
    },
    {
      title: "Tenha um Especialista",
      description: "Conte com uma empresa especializada para garantir total conformidade fiscal.",
      icon: "👨‍💼"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      case "low":
        return "Baixa";
      default:
        return "Normal";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">Calendário Fiscal Angola</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Mantenha-se sempre em dia com todas as obrigações fiscais angolanas. 
                Nunca mais perca um prazo importante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Calendário PDF
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                  <Bell className="w-5 h-5 mr-2" />
                  Configurar Alertas
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FiscalCalendar />

        {/* Important Dates Summary */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Próximas Obrigações Importantes
              </h2>
              <p className="text-xl text-gray-600">
                Fique atento aos próximos prazos fiscais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {importantDates.map((month, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{month.month}</h3>
                  </div>
                  <div className="space-y-3">
                    {month.obligations.map((obligation, obIndex) => (
                      <div key={obIndex} className="border-l-4 border-primary pl-4">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900 text-sm">{obligation.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(obligation.priority)}`}>
                            {getPriorityLabel(obligation.priority)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">Prazo: {obligation.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dicas para Gestão Fiscal
              </h2>
              <p className="text-xl text-gray-600">
                Melhores práticas para manter sua empresa sempre em conformidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-primary/5 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{tip.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-20 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-4 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-red-900 mb-4">
                    Importante: Multas e Penalidades
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Atraso no cumprimento de obrigações fiscais pode resultar em:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Multas que variam de 1% a 25% do valor do imposto devido</li>
                      <li>Juros de mora calculados diariamente</li>
                      <li>Possível inclusão em listas de devedores</li>
                      <li>Restrições para participação em concursos públicos</li>
                      <li>Dificuldades para obtenção de certidões negativas</li>
                    </ul>
                    <p className="mt-4 font-medium">
                      <strong>Nossa equipe pode ajudar você a evitar esses problemas!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Não Perca Mais Nenhum Prazo!
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Deixe nossa equipe especializada cuidar de todas as suas obrigações fiscais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300">
                  Quero Ajuda Profissional
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