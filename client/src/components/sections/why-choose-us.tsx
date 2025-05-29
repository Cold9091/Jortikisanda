import { Award, Shield, Clock, Handshake } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-4">
            Porquê Escolher a JortikiSanda?
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-gold mb-4 flex justify-center">
              <Award size={48} />
            </div>
            <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
              Experiência
            </h3>
            <p className="text-gray-600">
              Anos de experiência no mercado angolano
            </p>
          </div>
          <div className="text-center">
            <div className="text-gold mb-4 flex justify-center">
              <Shield size={48} />
            </div>
            <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
              Confiança
            </h3>
            <p className="text-gray-600">
              Transparência e ética em todos os serviços
            </p>
          </div>
          <div className="text-center">
            <div className="text-gold mb-4 flex justify-center">
              <Clock size={48} />
            </div>
            <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
              Agilidade
            </h3>
            <p className="text-gray-600">
              Soluções rápidas e eficientes
            </p>
          </div>
          <div className="text-center">
            <div className="text-gold mb-4 flex justify-center">
              <Handshake size={48} />
            </div>
            <h3 className="text-xl font-semibold font-montserrat text-primary mb-2">
              Parceria
            </h3>
            <p className="text-gray-600">
              Relacionamento duradouro com nossos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
