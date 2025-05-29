import { Building, Users, TrendingUp, Globe } from "lucide-react";

export default function Clients() {
  const clientLogos = [
    { name: "Empresa Alpha", sector: "Tecnologia" },
    { name: "Beta Construções", sector: "Construção" },
    { name: "Gamma Trading", sector: "Comércio" },
    { name: "Delta Services", sector: "Serviços" },
    { name: "Epsilon Bank", sector: "Financeiro" },
    { name: "Zeta Industries", sector: "Industrial" },
    { name: "Eta Logistics", sector: "Logística" },
    { name: "Theta Healthcare", sector: "Saúde" },
    { name: "Iota Energy", sector: "Energia" },
    { name: "Kappa Mining", sector: "Mineração" },
    { name: "Lambda Foods", sector: "Alimentação" },
    { name: "Mu Retail", sector: "Retalho" }
  ];

  const sectors = [
    { 
      icon: Building, 
      name: "Construção Civil", 
      companies: 85,
      description: "Construtoras e empreiteiros"
    },
    { 
      icon: Globe, 
      name: "Comércio Internacional", 
      companies: 120,
      description: "Importação e exportação"
    },
    { 
      icon: TrendingUp, 
      name: "Serviços Financeiros", 
      companies: 65,
      description: "Bancos e seguradoras"
    },
    { 
      icon: Users, 
      name: "Serviços Gerais", 
      companies: 230,
      description: "Consultoria e tecnologia"
    }
  ];

  return (
    <section id="clientes" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-gold/5 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Building className="mr-2" size={16} />
            Nossos Clientes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
            Empresas que Confiam em Nós
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Trabalhamos com empresas de diversos setores, desde startups inovadoras até grandes corporações estabelecidas no mercado angolano.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sectors.map((sector, index) => (
            <div key={index} className="text-center group hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-white shadow-lg rounded-3xl p-8 border-0">
                <div className="bg-gradient-to-br from-primary/10 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <sector.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-2 group-hover:text-gold transition-colors">
                  {sector.name}
                </h3>
                <p className="text-3xl font-bold text-gold mb-2">{sector.companies}+</p>
                <p className="text-gray-600 text-sm">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-montserrat text-primary mb-4">
              Algumas das Empresas que Atendemos
            </h3>
            <p className="text-gray-600 text-lg">
              Representando diversos setores da economia angolana
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="group hover-lift animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 group-hover:border-gold/30 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Building className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold text-primary text-sm mb-1 group-hover:text-gold transition-colors">
                      {client.name}
                    </h4>
                    <p className="text-xs text-gray-500">{client.sector}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">Empresas Ativas</div>
            <div className="text-sm text-gray-600">Em todo território nacional</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-gold/10 to-yellow-50 rounded-3xl p-8">
            <div className="text-4xl font-bold text-gold mb-2">25+</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">Setores Atendidos</div>
            <div className="text-sm text-gray-600">Diversificação completa</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">Taxa de Retenção</div>
            <div className="text-sm text-gray-600">Clientes fiéis à marca</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold font-montserrat mb-4">
              Junte-se às Empresas de Sucesso
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Faça parte do grupo seleto de empresas que escolheram a excelência em serviços contábeis.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gold text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Iniciar Parceria
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}