import { Button } from "@/components/ui/button";
import { File, MessageCircle, CalendarCheck } from "lucide-react";

export default function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/244xxxxxxxxx?text=Olá! Gostaria de saber mais sobre os serviços da JortikiSanda.", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@jortikisanda.ao?subject=Solicitação de Orçamento";
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-r from-primary to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight">
              Organizamos sua contabilidade,{" "}
              <span className="text-gold">impulsionamos seu crescimento.</span>
            </h1>
            <p className="text-xl text-gray-200 font-light">
              Especialistas em contabilidade, auditoria fiscal e análise financeira para empresas angolanas que buscam excelência e crescimento sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleEmail}
                className="bg-gold text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                <File className="mr-2" size={20} />
                Solicitar Orçamento
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2" size={20} />
                Falar via WhatsApp
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-primary transition-colors"
              >
                <CalendarCheck className="mr-2" size={20} />
                Marcar Reunião
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Escritório profissional moderno"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
