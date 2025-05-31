import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Clock,
  BookOpen
} from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Contabilidade",
    "Fiscal",
    "Gestão Empresarial",
    "Legislação",
    "Dicas Práticas"
  ];

  const blogPosts = [
    {
      slug: "mudancas-legislacao-fiscal-angola-2024",
      title: "Principais Mudanças na Legislação Fiscal de Angola em 2024",
      excerpt: "Conheça as principais alterações na legislação fiscal angolana que entraram em vigor este ano e como elas impactam sua empresa.",
      category: "Legislação",
      author: "Equipe JortikiSanda",
      date: "15 de Janeiro, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: true
    },
    {
      slug: "gestao-financeira-pequenas-empresas",
      title: "Gestão Financeira para Pequenas Empresas: Guia Completo",
      excerpt: "Um guia prático sobre como organizar as finanças de sua pequena empresa e manter a saúde financeira do negócio.",
      category: "Gestão Empresarial",
      author: "Equipe JortikiSanda",
      date: "22 de Janeiro, 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: false
    },
    {
      slug: "iva-angola-guia-completo",
      title: "IVA em Angola: Guia Completo para Empresários",
      excerpt: "Tudo que você precisa saber sobre o Imposto sobre Valor Acrescentado em Angola, desde o cálculo até a declaração.",
      category: "Fiscal",
      author: "Equipe JortikiSanda",
      date: "29 de Janeiro, 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: false
    },
    {
      slug: "contabilidade-digital-transformacao",
      title: "A Transformação Digital na Contabilidade Angolana",
      excerpt: "Como a tecnologia está revolucionando os serviços contábeis em Angola e os benefícios para as empresas.",
      category: "Contabilidade",
      author: "Equipe JortikiSanda",
      date: "5 de Fevereiro, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: false
    },
    {
      slug: "constituicao-empresa-angola-passo-passo",
      title: "Como Constituir uma Empresa em Angola: Passo a Passo",
      excerpt: "Guia detalhado sobre todos os procedimentos necessários para abrir uma empresa em Angola de forma legal e eficiente.",
      category: "Dicas Práticas",
      author: "Equipe JortikiSanda",
      date: "12 de Fevereiro, 2024",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: false
    },
    {
      slug: "indicadores-financeiros-essenciais",
      title: "5 Indicadores Financeiros Essenciais para Sua Empresa",
      excerpt: "Descubra quais são os principais indicadores que todo empresário deve acompanhar para garantir o sucesso do negócio.",
      category: "Gestão Empresarial",
      author: "Equipe JortikiSanda",
      date: "19 de Fevereiro, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-blue-900">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/90 via-blue-800/90 to-blue-900/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">Blog JortikiSanda</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Insights, dicas e atualizações sobre contabilidade, gestão empresarial e legislação em Angola
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-primary border border-white/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gradient-to-br from-primary/70 via-blue-800/70 to-blue-900/70 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white/95 backdrop-blur-sm text-gray-700 hover:bg-primary/20 border border-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20 bg-gradient-to-br from-primary/60 via-blue-800/60 to-blue-900/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Artigo em Destaque</h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 text-sm">{featuredPost.readTime} de leitura</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-600 text-sm">{featuredPost.author}</span>
                        <Calendar className="w-4 h-4 text-gray-400 ml-4 mr-2" />
                        <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="bg-primary hover:bg-primary/90">
                          Ler Artigo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-br from-primary via-blue-800 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Últimos Artigos
              </h2>
              <p className="text-xl text-blue-100">
                Mantenha-se atualizado com as últimas novidades
              </p>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post, index) => (
                  <article key={index} className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="h-48 overflow-hidden rounded-t-xl">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-500 text-xs flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Ler Mais
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-blue-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhum artigo encontrado
                </h3>
                <p className="text-blue-100">
                  Não encontramos artigos com os critérios selecionados. Tente ajustar sua pesquisa.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Receba Nossas Atualizações
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba os melhores conteúdos sobre contabilidade e gestão empresarial
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3">
                Inscrever
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}