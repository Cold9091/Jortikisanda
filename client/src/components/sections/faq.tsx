import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, Clock, FileText } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quais serviços de contabilidade vocês oferecem?",
      answer: "Oferecemos uma gama completa de serviços contábeis incluindo escrituração contábil, demonstrações financeiras, balanços, controlo patrimonial, declarações fiscais, folhas de pagamento e consultoria fiscal especializada para empresas de todos os portes."
    },
    {
      question: "Como funciona o processo de auditoria financeira?",
      answer: "Nosso processo de auditoria segue as normas internacionais e nacionais. Começamos com o planeamento da auditoria, seguido pela avaliação do controlo interno, testes substantivos, e finalizamos com a emissão do relatório de auditoria com recomendações específicas."
    },
    {
      question: "Quanto tempo demora para abrir uma empresa em Angola?",
      answer: "O processo completo de abertura e legalização de empresa normalmente demora entre 15 a 30 dias úteis, dependendo do tipo de empresa e da complexidade dos procedimentos. Acompanhamos todo o processo desde o registo comercial até à obtenção das licenças necessárias."
    },
    {
      question: "Vocês prestam serviços de gestão de recursos humanos?",
      answer: "Sim, oferecemos serviços completos de RH incluindo processamento de folhas de pagamento, gestão de admissões e demissões, cálculo de benefícios sociais, elaboração de contratos de trabalho e cumprimento das obrigações com a Segurança Social."
    },
    {
      question: "Como são elaborados os estudos de viabilidade económica?",
      answer: "Nossos estudos de viabilidade incluem análise de mercado, projeções financeiras detalhadas, análise de risco, avaliação de retorno de investimento e recomendações estratégicas. Utilizamos metodologias reconhecidas internacionalmente adaptadas ao mercado angolano."
    },
    {
      question: "Que tipos de formação profissional disponibilizam?",
      answer: "Oferecemos formações em contabilidade empresarial, fiscalidade angolana, uso de software contábil, preparação para certificações profissionais e workshops sobre mudanças na legislação. As formações podem ser presenciais ou online."
    },
    {
      question: "Como garantem a confidencialidade dos dados dos clientes?",
      answer: "Mantemos rigorosos protocolos de segurança incluindo sistemas encriptados, acesso restrito por níveis de autorização, backup seguros e cumprimento total da legislação de proteção de dados. Todos os colaboradores assinam acordos de confidencialidade."
    },
    {
      question: "Qual é o prazo para entrega das declarações fiscais?",
      answer: "Respeitamos todos os prazos fiscais estabelecidos pela AGT. Normalmente entregamos as declarações com 15 dias de antecedência dos prazos legais, permitindo tempo para revisões e correções se necessário."
    },
    {
      question: "Vocês atendem empresas de que setores?",
      answer: "Atendemos empresas de todos os setores da economia angolana, incluindo construção civil, comércio, serviços, indústria, petróleo e gás, mineração, agricultura, tecnologia, saúde e educação. Temos expertise especializada para cada setor."
    },
    {
      question: "Como funciona o acompanhamento contábil mensal?",
      answer: "O acompanhamento mensal inclui análise dos movimentos contábeis, conciliações bancárias, cálculo de impostos, relatórios gerenciais personalizados e reuniões de acompanhamento. Fornecemos dashboards online para consulta em tempo real."
    }
  ];

  const processSteps = [
    {
      icon: FileText,
      title: "Consulta Inicial",
      description: "Avaliamos suas necessidades e definimos o escopo dos serviços",
      time: "1-2 dias"
    },
    {
      icon: CheckCircle,
      title: "Proposta Detalhada",
      description: "Apresentamos proposta personalizada com cronograma e valores",
      time: "2-3 dias"
    },
    {
      icon: Clock,
      title: "Implementação",
      description: "Iniciamos os serviços conforme cronograma acordado",
      time: "Conforme escopo"
    },
    {
      icon: HelpCircle,
      title: "Acompanhamento",
      description: "Monitoramento contínuo e relatórios periódicos",
      time: "Ongoing"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full filter blur-3xl" style={{background: 'radial-gradient(circle, rgba(220, 96, 20, 0.1) 0%, transparent 100%)'}}></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full font-medium mb-6 text-[#ffffff] bg-[#1428dc]" style={{backgroundColor: '#dc6014', opacity: 0.1}}>
            <HelpCircle className="mr-2" size={16} />
            Perguntas Frequentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Respostas às perguntas mais comuns sobre nossos serviços de contabilidade e consultoria empresarial.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.05}s`}}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between rounded-2xl transition-colors duration-300"
                  style={{'&:hover': {backgroundColor: '#dc6014', opacity: 0.05}}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(220, 96, 20, 0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="flex-shrink-0" style={{color: '#dc6014'}} size={24} />
                  ) : (
                    <ChevronDown className="flex-shrink-0" style={{color: '#dc6014'}} size={24} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process Steps Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold font-montserrat text-primary mb-6 text-center">
                Como Trabalhamos
              </h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-gradient-to-br from-primary/10 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 transition-colors text-[#002e66]">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full text-[#002e66]" style={{backgroundColor: 'rgba(220, 96, 20, 0.1)'}}>
                        {step.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white text-center">
              <HelpCircle className="mx-auto mb-4" style={{color: '#dc6014'}} size={48} />
              <h3 className="text-xl font-bold font-montserrat mb-4">
                Não Encontrou sua Resposta?
              </h3>
              <p className="text-blue-100 mb-6">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("contacto");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 text-white"
                style={{backgroundColor: '#dc6014'}}
              >
                Fale Conosco
              </button>
            </div>

            {/* Business Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-6 text-center">
                Horário de Atendimento
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Segunda - Sexta</span>
                  <span className="font-semibold text-primary">8h00 - 17h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-semibold text-primary">8h00 - 12h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Domingo</span>
                  <span className="text-gray-500">Fechado</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 text-center">
                  Atendimento de emergência disponível 24h para clientes premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}