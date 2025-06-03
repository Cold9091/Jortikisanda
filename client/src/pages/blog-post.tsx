import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { 
  Calendar,
  User,
  ArrowLeft,
  Clock,
  Share2,
  BookOpen,
  Tag,
  ArrowRight
} from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();

  // Dados dos posts (em uma aplicação real, isso viria de uma API)
  const blogPosts = {
    "mudancas-legislacao-fiscal-angola-2024": {
      title: "Principais Mudanças na Legislação Fiscal de Angola em 2024",
      category: "Legislação",
      author: "Equipe JortikiSanda",
      date: "15 de Janeiro, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      content: `
        <p>A legislação fiscal angolana passou por importantes atualizações em 2024, trazendo mudanças significativas que impactam diretamente as empresas de todos os portes. Neste artigo, vamos detalhar as principais alterações e como elas afetam o seu negócio.</p>

        <h2>1. Alterações no Imposto sobre Rendimento do Trabalho (IRT)</h2>
        <p>Uma das principais mudanças refere-se aos escalões de tributação do IRT. Os novos valores entraram em vigor a partir de janeiro de 2024 e representam um ajuste importante para adequar a tributação à realidade econômica atual.</p>

        <h3>Novos Escalões de Tributação:</h3>
        <ul>
          <li>Até 70.000 Kz: Isento</li>
          <li>De 70.001 a 150.000 Kz: 13%</li>
          <li>De 150.001 a 250.000 Kz: 16%</li>
          <li>Acima de 250.000 Kz: 17%</li>
        </ul>

        <h2>2. Mudanças no IVA (Imposto sobre Valor Acrescentado)</h2>
        <p>O regime de IVA também sofreu alterações importantes, especialmente no que se refere às isenções e ao limite de enquadramento obrigatório.</p>

        <p>O limite para enquadramento obrigatório no regime de IVA foi ajustado para 50 milhões de kwanzas anuais, representando um aumento em relação ao valor anterior.</p>

        <h2>3. Simplificação de Procedimentos</h2>
        <p>Uma das mudanças mais positivas foi a implementação de procedimentos digitais para várias obrigações fiscais, tornando mais eficiente o cumprimento das responsabilidades tributárias.</p>

        <h3>Principais benefícios:</h3>
        <ul>
          <li>Redução do tempo de processamento</li>
          <li>Menor necessidade de deslocações físicas</li>
          <li>Maior transparência nos processos</li>
          <li>Diminuição de custos operacionais</li>
        </ul>

        <h2>4. Impacto nas Empresas</h2>
        <p>Estas mudanças trazem tanto oportunidades quanto desafios para as empresas angolanas. É fundamental que os empresários se adaptem rapidamente às novas regras para evitar penalizações e aproveitar os benefícios oferecidos.</p>

        <h2>Como a JortikiSanda Pode Ajudar</h2>
        <p>Nossa equipe de especialistas está totalmente atualizada com todas as mudanças na legislação fiscal. Oferecemos consultoria especializada para garantir que sua empresa esteja em total conformidade com as novas regras.</p>

        <p>Entre em contato conosco para uma avaliação gratuita e descubra como podemos ajudar sua empresa a navegar pelas mudanças na legislação fiscal de 2024.</p>
      `,
      tags: ["Legislação", "IRT", "IVA", "Fiscal", "Angola"]
    },
    "gestao-financeira-pequenas-empresas": {
      title: "Gestão Financeira para Pequenas Empresas: Guia Completo",
      category: "Gestão Empresarial",
      author: "Equipe JortikiSanda",
      date: "22 de Janeiro, 2024",
      readTime: "12 min",
      image: "https://welcometoangola.co.ao/wp-content/uploads/2021/01/vista-marginal-luanda.jpg",
      content: `
        <p>A gestão financeira é um dos pilares fundamentais para o sucesso de qualquer empresa, especialmente para pequenos negócios que precisam otimizar cada recurso disponível. Neste guia completo, vamos abordar as melhores práticas para manter a saúde financeira da sua empresa.</p>

        <h2>1. Controle de Fluxo de Caixa</h2>
        <p>O fluxo de caixa é a base de toda gestão financeira eficiente. Permite prever entradas e saídas de recursos, facilitando o planejamento e a tomada de decisões.</p>

        <h3>Como implementar:</h3>
        <ul>
          <li>Registre todas as entradas e saídas diariamente</li>
          <li>Categorize as despesas por tipo</li>
          <li>Faça projeções semanais e mensais</li>
          <li>Monitore constantemente as variações</li>
        </ul>

        <h2>2. Separação de Contas Pessoais e Empresariais</h2>
        <p>Um erro comum em pequenas empresas é a mistura entre finanças pessoais e empresariais. Esta prática pode gerar diversos problemas fiscais e contábeis.</p>

        <h2>3. Planejamento Orçamentário</h2>
        <p>Ter um orçamento bem estruturado é essencial para o crescimento sustentável da empresa.</p>

        <h2>4. Indicadores Financeiros Essenciais</h2>
        <p>Acompanhe regularmente os principais indicadores que mostram a saúde financeira do seu negócio.</p>

        <h2>Conclusão</h2>
        <p>Uma gestão financeira eficiente é fundamental para o sucesso de qualquer pequena empresa. Com as práticas corretas e o acompanhamento adequado, é possível manter a saúde financeira e promover o crescimento sustentável do negócio.</p>
      `,
      tags: ["Gestão", "Pequenas Empresas", "Fluxo de Caixa", "Planejamento"]
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
            <p className="text-xl text-gray-600 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = [
    {
      slug: "iva-angola-guia-completo",
      title: "IVA em Angola: Guia Completo para Empresários",
      category: "Fiscal"
    },
    {
      slug: "constituicao-empresa-angola-passo-passo",
      title: "Como Constituir uma Empresa em Angola: Passo a Passo",
      category: "Dicas Práticas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-blue-900">
      <Header />
      <main className="pt-20">
        {/* Article Header */}
        <section className="py-12 bg-gradient-to-br from-primary via-blue-800 to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 text-white hover:text-gold hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Button>
            </Link>
            
            <div className="flex items-center mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentPost.category}
              </span>
              <span className="mx-2 text-blue-200">•</span>
              <span className="text-blue-100 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {currentPost.readTime} de leitura
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-6">{currentPost.title}</h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 text-blue-200 mr-2" />
                <span className="text-blue-100">{currentPost.author}</span>
                <Calendar className="w-5 h-5 text-blue-200 ml-6 mr-2" />
                <span className="text-blue-100">{currentPost.date}</span>
              </div>
              <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="prose prose-lg max-w-none">
                <div className="h-64 overflow-hidden rounded-xl mb-8">
                  <img 
                    src={currentPost.image} 
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {currentPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Artigos Relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-4">{post.title}</h3>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Ler Artigo
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Precisa de Ajuda Especializada?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar sua empresa com soluções contábeis e fiscais personalizadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300">
                  Entre em Contato
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300">
                  Nossos Serviços
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