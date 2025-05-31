import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Testimonials from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Quote, Users, TrendingUp, ArrowRight } from "lucide-react";

export default function TestimonialsPage() {
  const stats = [
    {
      icon: Users,
      number: "200+",
      label: "Clientes Satisfeitos",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Taxa de Satisfação",
      color: "text-primary"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Avaliação Média",
      color: "text-gold"
    }
  ];

  const detailedTestimonials = [
    {
      name: "Maria Santos",
      company: "Santos & Associados Lda",
      sector: "Consultoria Jurídica",
      image: "MS",
      rating: 5,
      testimonial: "A JortikiSanda transformou completamente nossa gestão contábil. Antes tínhamos dificuldades com prazos fiscais e agora tudo funciona perfeitamente. A equipe é muito profissional e sempre disponível para esclarecer dúvidas.",
      results: "Redução de 80% em multas fiscais"
    },
    {
      name: "João Pereira",
      company: "Construções Pereira",
      sector: "Construção Civil",
      image: "JP",
      rating: 5,
      testimonial: "Trabalho com a JortikiSanda há 3 anos e posso dizer que foi a melhor decisão que tomei. Eles cuidam de toda parte fiscal e contábil, deixando-me livre para focar no crescimento da empresa.",
      results: "Crescimento de 150% no faturamento"
    },
    {
      name: "Ana Ferreira",
      company: "Ferreira Importações",
      sector: "Comércio",
      image: "AF",
      rating: 5,
      testimonial: "O que mais me impressiona é a proatividade da equipe. Eles antecipam problemas e sempre têm soluções. O atendimento é excepcional e os relatórios são muito detalhados.",
      results: "100% de conformidade fiscal"
    },
    {
      name: "Carlos Mendes",
      company: "TechSolutions Angola",
      sector: "Tecnologia",
      image: "CM",
      rating: 5,
      testimonial: "Como empresa de tecnologia, precisávamos de um parceiro que entendesse nossas necessidades específicas. A JortikiSanda superou nossas expectativas em todos os aspectos.",
      results: "Otimização de 30% nos custos fiscais"
    },
    {
      name: "Luisa Costa",
      company: "Costa Restaurantes",
      sector: "Alimentação",
      image: "LC",
      rating: 5,
      testimonial: "Gerencio uma rede de restaurantes e a complexidade fiscal era um pesadelo. Com a JortikiSanda, tudo ficou organizado e simples. Recomendo sem hesitação.",
      results: "Gestão integrada de 5 estabelecimentos"
    },
    {
      name: "Roberto Silva",
      company: "Silva Transportes",
      sector: "Logística",
      image: "RS",
      rating: 5,
      testimonial: "A expertise da equipe em legislação angolana é impressionante. Eles resolveram questões complexas que tínhamos há anos. Agora nossa empresa opera com total tranquilidade.",
      results: "Regularização completa em 60 dias"
    }
  ];

  const benefits = [
    {
      title: "Paz de Espírito",
      description: "Durma tranquilo sabendo que sua empresa está em total conformidade fiscal"
    },
    {
      title: "Foco no Negócio",
      description: "Concentre-se no que faz de melhor enquanto cuidamos da parte contábil"
    },
    {
      title: "Economia de Tempo",
      description: "Elimine horas de trabalho burocrático e invista no crescimento"
    },
    {
      title: "Redução de Custos",
      description: "Evite multas, juros e optimize sua carga tributária"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-blue-900">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/90 via-blue-800/90 to-blue-900/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">O Que Nossos Clientes Dizem</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Veja por que centenas de empresas angolanas confiam na JortikiSanda para 
                suas necessidades contábeis e fiscais
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-primary/80 via-blue-800/80 to-blue-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white/95 backdrop-blur-sm rounded-xl border border-white/20 min-h-[200px] flex flex-col justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-[#002e66]">{stat.number}</div>
                  <div className="text-gray-700 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Detailed Testimonials */}
        <section className="py-20 bg-gradient-to-br from-primary/70 via-blue-800/70 to-blue-900/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#ffffff]">
                Histórias de Sucesso Detalhadas
              </h2>
              <p className="text-xl text-[#fafcff]">
                Conheça como transformamos a gestão de empresas em diversos setores
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {detailedTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-primary font-medium">{testimonial.company}</p>
                      <p className="text-gray-600 text-sm">{testimonial.sector}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">"{testimonial.testimonial}"</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-1">Resultado Alcançado:</h4>
                    <p className="text-green-700">{testimonial.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#1c3faa]">
                Por Que Nossos Clientes Nos Escolhem
              </h2>
              <p className="text-xl text-gray-600">
                Os benefícios que você terá ao trabalhar conosco
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-blue-50 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-[#1c3fab]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Junte-se aos Nossos Clientes Satisfeitos
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Transforme a gestão da sua empresa como centenas de outros empresários já fizeram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300">
                  Começar Agora
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