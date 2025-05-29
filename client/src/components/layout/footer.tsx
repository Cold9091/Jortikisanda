import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-montserrat mb-4">JortikiSanda</h3>
            <p className="text-gray-300 mb-4">
              Organizamos sua contabilidade, impulsionamos seu crescimento.
            </p>
            <p className="text-gray-300 mb-4">
              Especialistas em contabilidade, auditoria e consultoria financeira para empresas angolanas que buscam excelência.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gold hover:text-yellow-400 text-xl transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gold hover:text-yellow-400 text-xl transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gold hover:text-yellow-400 text-xl transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Contabilidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Auditoria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Gestão de RH
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Fiscalidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Formação
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +244 xxx xxx xxx
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                info@jortikisanda.ao
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Luanda, Angola
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 JortikiSanda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
