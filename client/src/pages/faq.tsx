import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FAQ from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle, Phone, Mail, HelpCircle, Search, Clock } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "Serviços Contábeis",
      icon: "📊",
      questions: [
        {
          question: "Quais documentos preciso fornecer para a escrituração contábil?",
          answer: "Você deve fornecer: notas fiscais de entrada e saída, comprovantes de pagamento, extratos bancários, contratos, folhas de pagamento e qualquer documento que comprove receitas, despesas ou movimentação patrimonial da empresa."
        },
        {
          question: "Com que frequência vocês elaboram os balancetes?",
          answer: "Elaboramos balancetes mensais que são entregues até o dia 10 do mês seguinte. Para clientes do plano avançado, também oferecemos relatórios quinzenais quando solicitado."
        },
        {
          question: "Vocês fazem a conciliação bancária?",
          answer: "Sim, a conciliação bancária é feita mensalmente em todos os nossos planos. Isso garante que todos os lançamentos contábeis estejam corretos e alinhados com a movimentação real das contas bancárias."
        }
      ]
    },
    {
      title: "Obrigações Fiscais",
      icon: "📋",
      questions: [
        {
          question: "Quais são os principais impostos que minha empresa deve pagar?",
          answer: "Os principais impostos em Angola incluem: IRT (Imposto sobre Rendimento do Trabalho), IVA (Imposto sobre Valor Acrescentado), IS (Imposto de Selo), IPU (Imposto Predial Urbano), II (Imposto Industrial) e IAC (Imposto sobre Aplicações de Capitais)."
        },
        {
          question: "Como funciona o cálculo do IVA?",
          answer: "O IVA é calculado sobre o valor das vendas de bens e serviços. A taxa geral é de 14%, mas existem taxas diferenciadas para alguns produtos e serviços. Empresas com faturamento anual superior a 50 milhões de kwanzas são obrigatoriamente sujeitas ao regime de IVA."
        },
        {
          question: "O que acontece se perder um prazo fiscal?",
          answer: "O atraso no cumprimento das obrigações fiscais resulta em multas que variam de 1% a 25% do valor devido, além de juros de mora. Por isso, sempre enviamos lembretes com antecedência para todos os nossos clientes."
        }
      ]
    },
    {
      title: "Recursos Humanos",
      icon: "👥",
      questions: [
        {
          question: "Vocês fazem toda a folha de pagamento?",
          answer: "Sim, processamos a folha de pagamento completa incluindo: cálculo de salários, horas extras, subsídios, descontos de INSS, IRT, e elaboramos os recibos de vencimento e mapas de pessoal."
        },
        {
          question: "Como funciona o cálculo das férias em Angola?",
          answer: "Em Angola, os trabalhadores têm direito a 22 dias úteis de férias por cada ano de trabalho. O subsídio de férias corresponde ao salário base mais 1/3, e deve ser pago antes do início do período de férias."
        },
        {
          question: "Vocês ajudam com admissões e demissões?",
          answer: "Sim, auxiliamos em todo o processo de admissão (contratos, registos na Segurança Social) e demissão (cálculos de compensações, documentação legal) de funcionários."
        }
      ]
    },
    {
      title: "Planos e Preços",
      icon: "💰",
      questions: [
        {
          question: "Qual a diferença entre os planos Básico, Médio e Avançado?",
          answer: "O Plano Básico inclui escrituração e declarações básicas. O Médio adiciona folha de pagamento e consultoria por telefone. O Avançado inclui todos os serviços, consultoria presencial, planejamento tributário e suporte prioritário."
        },
        {
          question: "Posso mudar de plano durante o contrato?",
          answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações entram em vigor no próximo ciclo de faturamento."
        },
        {
          question: "Existe desconto para contratos anuais?",
          answer: "Sim, oferecemos desconto de 10% para contratos anuais pagos à vista e 5% para contratos anuais com pagamento mensal."
        }
      ]
    },
    {
      title: "Suporte e Atendimento",
      icon: "🎧",
      questions: [
        {
          question: "Como posso entrar em contato com vocês?",
          answer: "Você pode entrar em contato através dos telefones +244 939 103 175 ou +244 932 036 524, pelos emails Jortikisanda@gmail.com ou Jsescritoriocontabilidade@gmail.com, ou pelo nosso formulário de contato no site."
        },
        {
          question: "Qual o horário de funcionamento?",
          answer: "Funcionamos de segunda a sexta-feira das 8h às 17h e aos sábados das 8h às 12h. Para emergências fiscais, temos plantão disponível para clientes do plano avançado."
        },
        {
          question: "Quanto tempo demora para resolver uma consulta?",
          answer: "Consultas simples são respondidas em até 24h. Questões mais complexas podem levar de 2 a 5 dias úteis. Clientes do plano avançado têm atendimento prioritário."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Ligue agora para esclarecimentos",
      action: "+244 939 103 175",
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Mensagem rápida e prática",
      action: "Enviar mensagem",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Para consultas detalhadas",
      action: "Jortikisanda@gmail.com",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-blue-900">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/90 via-blue-800/90 to-blue-900/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-white">Perguntas Frequentes</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Encontre respostas para as principais dúvidas sobre nossos serviços contábeis e fiscais
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Pesquisar pergunta..."
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-primary border border-white/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* Detailed FAQ by Categories */}
        <section className="py-20 bg-gradient-to-br from-primary/80 via-blue-800/80 to-blue-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Perguntas por Categoria
              </h2>
              <p className="text-xl text-muted-foreground">
                Navegue pelas categorias para encontrar respostas específicas
              </p>
            </div>

            {filteredCategories.length > 0 ? (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="rounded-xl shadow-lg p-8 border border-border bg-[#fafafa]">
                    <div className="flex items-center mb-8">
                      <h3 className="text-2xl font-bold text-[#153a98]">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-l-4 border-primary pl-6">
                          <h4 className="text-lg font-semibold mb-3 flex items-start text-[#143a97]">
                            <HelpCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            {faq.question}
                          </h4>
                          <p className="leading-relaxed text-[#10378c]">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              searchTerm && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Nenhuma pergunta encontrada
                  </h3>
                  <p className="text-muted-foreground">
                    Não encontramos perguntas relacionadas ao termo "{searchTerm}". 
                    Tente usar palavras-chave diferentes ou entre em contato conosco.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20 bg-gradient-to-br from-primary via-blue-800 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Não Encontrou sua Resposta?
              </h2>
              <p className="text-xl text-white/90">
                Entre em contato conosco através dos canais abaixo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-border bg-[#fafafa]">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#dbeafe]">
                    <method.icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1d40ad]">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-medium text-[#2563eb]">{method.action}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contato">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-700 text-white px-12 py-4 text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Formulário de Contato Completo
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