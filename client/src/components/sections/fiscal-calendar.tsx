import { Calendar, Clock, AlertTriangle, FileText } from "lucide-react";

export default function FiscalCalendar() {
  const fiscalObligations = [
    {
      imposto: "IRT - Imposto sobre o Rendimento do Trabalho",
      frequencia: "Mensal",
      prazo: "Até dia 30 de cada mês",
      observacoes: "Declaração Mensal Modelo 2 + pagamento",
      urgencia: "media"
    },
    {
      imposto: "IRT - Declaração Anual",
      frequencia: "Anual",
      prazo: "Até 31 de março",
      observacoes: "Modelo 1 do IRT",
      urgencia: "alta"
    },
    {
      imposto: "IVA - Imposto sobre o Valor Acrescentado",
      frequencia: "Mensal",
      prazo: "Até dia 20 do mês seguinte",
      observacoes: "Declaração e pagamento mensal",
      urgencia: "alta"
    },
    {
      imposto: "IS - Imposto de Selo",
      frequencia: "Conforme a operação",
      prazo: "No momento da operação",
      observacoes: "Aplicável a contratos, garantias, etc.",
      urgencia: "baixa"
    },
    {
      imposto: "IPU - Imposto Predial Urbano",
      frequencia: "Anual",
      prazo: "Até 31 de março (arrendados) / 30 de abril (não arrendados)",
      observacoes: "Sobre imóveis urbanos",
      urgencia: "media"
    },
    {
      imposto: "II - Imposto Industrial",
      frequencia: "Anual",
      prazo: "Declaração até 30 de maio / Pagamento até 30 de junho",
      observacoes: "Inclui pagamento por conta (30 de agosto)",
      urgencia: "alta"
    },
    {
      imposto: "IAC - Imposto sobre Aplicações de Capitais",
      frequencia: "Mensal",
      prazo: "Até fim do mês seguinte ao recebimento",
      observacoes: "Juros, dividendos, etc.",
      urgencia: "media"
    },
    {
      imposto: "Segurança Social (INSS)",
      frequencia: "Mensal",
      prazo: "Até dia 10 de cada mês",
      observacoes: "Entrega da folha e pagamento de contribuições",
      urgencia: "alta"
    },
    {
      imposto: "Mapa de Pessoal",
      frequencia: "Anual",
      prazo: "Até 31 de janeiro",
      observacoes: "Relação dos trabalhadores do ano anterior",
      urgencia: "alta"
    },
    {
      imposto: "Relatório Único",
      frequencia: "Anual",
      prazo: "Até 30 de abril",
      observacoes: "Empresas com volume de negócios superior a 50 milhões Kz",
      urgencia: "alta"
    }
  ];

  const getUrgencyColor = (urgencia: string) => {
    switch (urgencia) {
      case "alta":
        return "bg-red-50 text-red-700 border-red-200";
      case "media":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "baixa":
        return "bg-green-50 text-green-700 border-green-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getUrgencyIcon = (urgencia: string) => {
    switch (urgencia) {
      case "alta":
        return <AlertTriangle size={16} className="text-red-600" />;
      case "media":
        return <Clock size={16} className="text-yellow-600" />;
      case "baixa":
        return <FileText size={16} className="text-green-600" />;
      default:
        return <FileText size={16} className="text-gray-600" />;
    }
  };

  return (
    <section id="calendario-fiscal" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-gold/5 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Calendar className="mr-2" size={16} />
            Calendário Fiscal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
            Calendário Fiscal Angolano 2024
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Mantenha-se em dia com todas as obrigações fiscais em Angola. 
            Consulte os prazos e frequências dos principais impostos e contribuições.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center bg-red-50 px-4 py-2 rounded-full border border-red-200">
            <AlertTriangle size={16} className="text-red-600 mr-2" />
            <span className="text-red-700 font-medium">Prioridade Alta</span>
          </div>
          <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
            <Clock size={16} className="text-yellow-600 mr-2" />
            <span className="text-yellow-700 font-medium">Prioridade Média</span>
          </div>
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
            <FileText size={16} className="text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Prioridade Baixa</span>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary to-blue-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Imposto/Contribuição
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Frequência
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Prazo
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Observações
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                    Prioridade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fiscalObligations.map((obligation, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-primary text-sm">
                        {obligation.imposto}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700 text-sm">
                        {obligation.frequencia}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700 text-sm font-medium">
                        {obligation.prazo}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600 text-sm">
                        {obligation.observacoes}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${getUrgencyColor(obligation.urgencia)}`}>
                        {getUrgencyIcon(obligation.urgencia)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {fiscalObligations.map((obligation, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-primary text-lg leading-tight">
                  {obligation.imposto}
                </h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${getUrgencyColor(obligation.urgencia)}`}>
                  {getUrgencyIcon(obligation.urgencia)}
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-gray-500 text-sm font-medium">Frequência:</span>
                  <span className="text-gray-700 text-sm ml-2">{obligation.frequencia}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm font-medium">Prazo:</span>
                  <span className="text-gray-700 text-sm font-medium ml-2">{obligation.prazo}</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm font-medium">Observações:</span>
                  <p className="text-gray-600 text-sm mt-1">{obligation.observacoes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold font-montserrat mb-4">
            Precisa de Ajuda com as Obrigações Fiscais?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada garante que sua empresa esteja sempre em conformidade com todas as obrigações fiscais angolanas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gold text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </button>
            <button 
              onClick={() => {
                const message = "Olá! Gostaria de saber mais sobre como a JortikiSanda pode ajudar minha empresa a estar em dia com as obrigações fiscais em Angola.";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/244939103175?text=${encodedMessage}`, "_blank");
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              WhatsApp Direto
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Aviso Importante</h4>
              <p className="text-yellow-700 text-sm leading-relaxed">
                As informações apresentadas neste calendário fiscal são baseadas na legislação angolana vigente e servem como referência geral. 
                Os prazos e obrigações podem variar conforme alterações na legislação ou situações específicas de cada empresa. 
                Recomendamos sempre consultar um profissional qualificado para orientações personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}