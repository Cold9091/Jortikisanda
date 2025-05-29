import { Award, Shield, CheckCircle, Star, FileText, Users, Globe, TrendingUp } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      icon: FileText,
      title: "Certificação ISO 9001:2015",
      description: "Sistema de Gestão da Qualidade certificado internacionalmente",
      issuer: "Bureau Veritas",
      year: "2022",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Award,
      title: "Licença OCC",
      description: "Ordem dos Contabilistas Certificados de Angola",
      issuer: "OCC Angola",
      year: "2008",
      color: "from-gold/20 to-yellow-200",
      iconColor: "text-gold"
    },
    {
      icon: Shield,
      title: "Auditores Registados",
      description: "Registo oficial na Comissão do Mercado de Capitais",
      issuer: "CMC Angola",
      year: "2010",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Star,
      title: "Certificação IFAC",
      description: "International Federation of Accountants",
      issuer: "IFAC",
      year: "2018",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "Prémio Excelência Empresarial",
      description: "Reconhecimento pela qualidade dos serviços prestados",
      year: "2023"
    },
    {
      icon: Users,
      title: "Melhor Escritório de Contabilidade",
      description: "Categoria PME - Angola Business Awards",
      year: "2022"
    },
    {
      icon: Globe,
      title: "Parceiro ACCA",
      description: "Association of Chartered Certified Accountants",
      year: "2020"
    },
    {
      icon: CheckCircle,
      title: "Zero Infrações Fiscais",
      description: "Historial impecável com as autoridades fiscais",
      year: "Desde 2008"
    }
  ];

  const partnerships = [
    { name: "KPMG Angola", type: "Parceria Estratégica", description: "Colaboração em projetos de grande escala" },
    { name: "BNA", type: "Instituição Financeira", description: "Reporting e compliance bancário" },
    { name: "Universidade Católica", type: "Educação", description: "Formação e desenvolvimento profissional" },
    { name: "AICEP", type: "Investimento", description: "Apoio a investidores estrangeiros" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <FileText className="mr-2" size={16} />
            Certificações e Reconhecimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 section-divider pt-6">
            Excelência Reconhecida
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Nossas certificações e reconhecimentos demonstram nosso compromisso com a qualidade e excelência profissional.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="group hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="glass-effect rounded-3xl p-8 text-center h-full">
                <div className={`bg-gradient-to-br ${cert.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={cert.iconColor} size={32} />
                </div>
                <h3 className="text-xl font-semibold font-montserrat mb-4 group-hover:text-gold transition-colors">
                  {cert.title}
                </h3>
                <p className="text-blue-100 mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>
                <div className="text-gold font-semibold text-sm">
                  {cert.issuer} • {cert.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-montserrat text-center mb-12">
            Reconhecimentos e Prémios
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-xl mr-4 flex-shrink-0">
                    <achievement.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-blue-100 text-sm mb-2 leading-relaxed">{achievement.description}</p>
                    <span className="text-gold text-xs font-medium">{achievement.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-montserrat text-center mb-12">
            Parcerias Estratégicas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold">{partner.name}</h4>
                  <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                    {partner.type}
                  </span>
                </div>
                <p className="text-blue-100 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="text-center">
          <div className="glass-effect rounded-3xl p-12">
            <h3 className="text-3xl font-bold font-montserrat mb-8">
              Compromisso com a Qualidade
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-400" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Conformidade Total</h4>
                <p className="text-blue-100 text-sm">
                  100% das nossas práticas seguem as normas nacionais e internacionais
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-400" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Segurança Garantida</h4>
                <p className="text-blue-100 text-sm">
                  Protocolos rigorosos de segurança e confidencialidade de dados
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="text-gold" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Excelência Contínua</h4>
                <p className="text-blue-100 text-sm">
                  Melhoria contínua dos processos e actualização constante da equipa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}