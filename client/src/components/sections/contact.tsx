import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { ContactFormData } from "@/lib/types";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pela sua mensagem! Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Sou ${formData.name}.
    
Email: ${formData.email}
${formData.phone ? `Telefone: ${formData.phone}` : ''}
${formData.service ? `Serviço de interesse: ${formData.service}` : ''}

Mensagem: ${formData.message}`;
    
    // Enviar via WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/244939103175?text=${encodedMessage}`,
      "_blank"
    );
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Sua mensagem será enviada via WhatsApp.",
    });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/244939103175?text=Olá! Gostaria de saber mais sobre os serviços da JortikiSanda.",
      "_blank"
    );
  };

  const handleEmail = () => {
    window.location.href = "mailto:Jortikisanda@gmail.com";
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Phone className="mr-2" size={16} />
            Fale Conosco
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 section-divider pt-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar sua empresa a crescer e alcançar novos patamares de sucesso. Entre em contato conosco!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card 
            className="border-0 shadow-2xl animate-scale-in"
            style={{
              background: 'linear-gradient(to bottom right, hsl(213, 100%, 20%), hsl(217, 91%, 33%), hsl(220, 91%, 27%))'
            }}
          >
            <CardContent className="p-6 sm:p-8 md:p-10">
              <h3 className="text-3xl font-semibold font-montserrat text-white mb-8">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+244 xxx xxx xxx"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-white mb-2">
                    Serviço de Interesse
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="text-gray-900 placeholder:text-gray-500 bg-white">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contabilidade">Contabilidade</SelectItem>
                      <SelectItem value="auditoria">Auditoria Financeira</SelectItem>
                      <SelectItem value="rh">Gestão de RH</SelectItem>
                      <SelectItem value="fiscalidade">Fiscalidade Empresarial</SelectItem>
                      <SelectItem value="viabilidade">Estudos de Viabilidade</SelectItem>
                      <SelectItem value="formacao">Formação Profissional</SelectItem>
                      <SelectItem value="abertura">Abertura de Empresa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Descreva como podemos ajudar..."
                    required
                    className="bg-white text-gray-900"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#dc6014] text-white hover:bg-[#dc6014]/80 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Card className="glass-effect border-0 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-semibold font-montserrat text-primary mb-8">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1" style={{color: '#dc6014'}}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Endereço</h4>
                      <p className="text-gray-600">
                      Imgobotas, Largo Atletico dos Coqueiros<br />
                        Luanda, Angola
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1" style={{color: '#dc6014'}}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Telefones</h4>
                      <p className="text-gray-600">
                        +244 939 103 175<br />
                        +244 932 036 524
                        +244 222 721 415
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1" style={{color: '#dc6014'}}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-gray-600">
                        Jortikisanda@gmail.com<br />
                        Jsescritoriocontabilidade@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1" style={{color: '#dc6014'}}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Horário de Funcionamento</h4>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h00 - 17h00<br />
                        Sábado: 8h00 - 12h00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-effect border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                  Contato Rápido
                </h3>
                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 text-white hover:bg-green-600 justify-start py-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="mr-3" size={20} />
                    Conversar no WhatsApp
                  </Button>
                  <Button
                    onClick={handleEmail}
                    className="w-full bg-primary text-white hover:bg-blue-800 justify-start py-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="mr-3" size={20} />
                    Enviar Email
                  </Button>
                  <Button
                    onClick={() => {
                      const element = document.getElementById("contato");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-gold text-primary hover:bg-yellow-400 justify-start py-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="mr-3" size={20} />
                    Agendar Reunião
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="glass-effect border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                  Localização
                </h3>
                <div className="h-96 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=-8.812885890108406,13.226698730243749&hl=pt&z=16&amp;output=embed"
                    width="100%"
                    height="100%"
                    style={{ border:0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
