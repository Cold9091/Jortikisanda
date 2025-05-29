import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Contact from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Calendar
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      items: ["+244 939 103 175", "+244 932 036 524"],
      description: "Atendimento de Segunda a Sexta das 8h às 17h"
    },
    {
      icon: Mail,
      title: "E-mails",
      items: ["Jortikisanda@gmail.com", "Jsescritoriocontabilidade@gmail.com"],
      description: "Resposta garantida em até 24h"
    },
    {
      icon: MapPin,
      title: "Localização",
      items: ["Luanda, Angola"],
      description: "Atendimento presencial mediante agendamento"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      items: ["Segunda a Sexta: 8h - 17h", "Sábado: 8h - 12h"],
      description: "Plantão de emergência para clientes premium"
    }
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: "Resposta Rápida",
      description: "Respondemos todas as consultas em até 24 horas"
    },
    {
      icon: CheckCircle,
      title: "Consultoria Gratuita",
      description: "Primeira consulta sem compromisso"
    },
    {
      icon: CheckCircle,
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para sua empresa"
    },
    {
      icon: CheckCircle,
      title: "Experiência Comprovada",
      description: "Mais de 10 anos no mercado angolano"
    }
  ];

  const services = [
    "Constituição de Empresas",
    "Contabilidade Completa",
    "Assessoria Fiscal",
    "Folha de Pagamento",
    "Planejamento Tributário",
    "Auditoria",
    "Consultoria Jurídica",
    "Regularização Empresarial"
  ];

  const faqs = [
    {
      question: "Quanto tempo demora para obter uma resposta?",
      answer: "Respondemos todas as consultas em até 24 horas úteis."
    },
    {
      question: "A primeira consulta é paga?",
      answer: "Não, oferecemos uma consulta inicial gratuita para avaliar suas necessidades."
    },
    {
      question: "Vocês atendem empresas de todos os tamanhos?",
      answer: "Sim, atendemos desde microempresas até grandes corporações."
    },
    {
      question: "É possível agendar uma visita presencial?",
      answer: "Sim, agendamos reuniões presenciais conforme disponibilidade."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Estamos prontos para ajudar sua empresa a crescer. Entre em contato conosco 
                e descubra como podemos transformar sua gestão contábil e fiscal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Reunião
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-700 font-medium">{item}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />

        {/* Why Contact Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Por Que Entrar em Contato Conosco?
              </h2>
              <p className="text-xl text-gray-600">
                Veja os benefícios de trabalhar com a JortikiSanda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <reason.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nossos Serviços Principais
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Oferecemos uma gama completa de serviços contábeis, fiscais e de 
                  gestão empresarial para atender todas as necessidades da sua empresa.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/servicos">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                      Ver Todos os Serviços
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/faq">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Ver Todas as FAQ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nossa Localização
              </h2>
              <p className="text-xl text-gray-600">
                Estamos localizados em Luanda para melhor atender nossos clientes
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">JortikiSanda</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-3" />
                      <span className="text-gray-700">Luanda, Angola</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-3" />
                      <span className="text-gray-700">+244 939 103 175</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <span className="text-gray-700">Jortikisanda@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-3" />
                      <span className="text-gray-700">Segunda a Sexta: 8h - 17h</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Visita
                    </Button>
                  </div>
                </div>
                
                <div className="h-64 bg-gradient-to-r from-primary/20 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <p>Mapa da localização</p>
                    <p className="text-sm">Luanda, Angola</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}