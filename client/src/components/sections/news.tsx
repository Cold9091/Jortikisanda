import { Calendar, User, ArrowRight, Newspaper, TrendingUp, FileText, Globe } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Novas Regulamentações Fiscais para 2024",
      excerpt: "O Governo angolano aprovou novas medidas fiscais que entram em vigor no próximo trimestre. Saiba como estas mudanças podem afetar a sua empresa.",
      date: "15 de Janeiro, 2024",
      author: "Equipa Fiscal JortikiSanda",
      category: "Fiscalidade",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 2,
      title: "Digitalização dos Processos Contábeis",
      excerpt: "Como a transformação digital está revolucionando a contabilidade em Angola. Descubra as principais tendências e tecnologias emergentes.",
      date: "10 de Janeiro, 2024",
      author: "João Silva, Director Técnico",
      category: "Tecnologia",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 3,
      title: "Guia Completo: Abertura de Empresa em Angola",
      excerpt: "Tudo o que precisa saber sobre os procedimentos legais para constituir uma empresa em Angola. Um guia prático e atualizado.",
      date: "5 de Janeiro, 2024",
      author: "Maria Fernandes, Consultora Legal",
      category: "Legislação",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    }
  ];

  const categories = [
    { name: "Fiscalidade", count: 12, icon: FileText, color: "text-primary" },
    { name: "Legislação", count: 8, icon: Globe, color: "text-primary" },
    { name: "Tecnologia", count: 6, icon: TrendingUp, color: "text-primary" },
    { name: "Mercado", count: 10, icon: Newspaper, color: "text-primary" }
  ];

  return (
    <section id="noticias" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-gold/5 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Newspaper className="mr-2" size={16} />
            Notícias e Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-6 section-divider pt-6">
            Fique Informado
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Mantenha-se atualizado com as últimas novidades do setor contábil e fiscal em Angola.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 hover-lift animate-scale-in">
              <div className="relative">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="mr-2" size={16} />
                  {newsItems[0].date}
                  <span className="mx-2">•</span>
                  <User className="mr-2" size={16} />
                  {newsItems[0].author}
                  <span className="mx-2">•</span>
                  {newsItems[0].readTime} de leitura
                </div>
                <h3 className="text-2xl font-bold font-montserrat text-primary mb-4 hover:text-gold transition-colors">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {newsItems[0].excerpt}
                </p>
                <button className="inline-flex items-center text-primary hover:text-gold font-semibold transition-colors">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>

            {/* Other Articles */}
            <div className="grid md:grid-cols-2 gap-8">
              {newsItems.slice(1).map((item, index) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="mr-2" size={14} />
                      {item.date}
                    </div>
                    <h4 className="text-lg font-semibold font-montserrat text-primary mb-3 hover:text-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <button className="inline-flex items-center text-primary hover:text-gold font-medium text-sm transition-colors">
                      Ler Mais
                      <ArrowRight className="ml-2" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-6">
                Categorias
              </h3>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-lg mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                        <category.icon className={`${category.color} group-hover:text-white`} size={16} />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-white transition-colors">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 text-white animate-fade-in">
              <h3 className="text-xl font-bold font-montserrat mb-4">
                Newsletter JortikiSanda
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Receba as últimas atualizações fiscais e contábeis diretamente no seu email.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="w-full bg-gold text-primary px-4 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors">
                  Subscrever
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-6">
                Links Úteis
              </h3>
              <div className="space-y-3">
                {[
                  "Calendário Fiscal 2024",
                  "Formulários AGT",
                  "Legislação Atualizada",
                  "Consulta CNE",
                  "Portal do Contribuinte"
                ].map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-primary transition-colors py-2 border-b border-gray-100 last:border-0">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}