export default function About() {
  return (
    <section id="quem-somos" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Equipe profissional de contabilidade"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary">
              Quem Somos
            </h2>
            <p className="text-gray-600 text-lg">
              A JortikiSanda é uma empresa angolana especializada em serviços contábeis, auditoria e consultoria financeira, comprometida em oferecer soluções de excelência para empresas de todos os portes.
            </p>
            <p className="text-gray-600">
              Com anos de experiência no mercado angolano, nossa equipe de profissionais qualificados oferece serviços personalizados que atendem às necessidades específicas de cada cliente, sempre em conformidade com a legislação nacional.
            </p>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
                  Nossa Missão
                </h3>
                <p className="text-gray-600">
                  Fornecer serviços contábeis e de auditoria de alta qualidade, contribuindo para o crescimento sustentável dos nossos clientes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
                  Nossa Visão
                </h3>
                <p className="text-gray-600">
                  Ser a empresa de referência em serviços contábeis em Angola, reconhecida pela excelência e inovação.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
                  Nossos Valores
                </h3>
                <p className="text-gray-600">
                  Integridade, transparência, qualidade, compromisso e responsabilidade social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
