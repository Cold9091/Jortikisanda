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
    contactMutation.mutate(formData);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/244xxxxxxxxx?text=Olá! Gostaria de saber mais sobre os serviços da JortikiSanda.",
      "_blank"
    );
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@jortikisanda.ao";
  };

  return (
    <section id="contato" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer. Entre em contato conosco!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
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
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Descreva como podemos ajudar..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold text-primary hover:bg-yellow-400"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-montserrat text-primary mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-gold mr-4 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Endereço</h4>
                      <p className="text-gray-600">
                        Rua Principal, Bairro Comercial<br />
                        Luanda, Angola
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-gold mr-4 mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Telefones</h4>
                      <p className="text-gray-600">
                        +244 xxx xxx xxx<br />
                        +244 yyy yyy yyy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-gold mr-4 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-gray-600">
                        info@jortikisanda.ao<br />
                        contato@jortikisanda.ao
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-gold mr-4 mt-1">
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
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-4">
                  Contato Rápido
                </h3>
                <div className="space-y-3">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 text-white hover:bg-green-600 justify-start"
                  >
                    <MessageCircle className="mr-3" size={20} />
                    Conversar no WhatsApp
                  </Button>
                  <Button
                    onClick={handleEmail}
                    className="w-full bg-primary text-white hover:bg-blue-800 justify-start"
                  >
                    <Mail className="mr-3" size={20} />
                    Enviar Email
                  </Button>
                  <Button
                    onClick={() => {
                      const element = document.getElementById("contato");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-gold text-primary hover:bg-yellow-400 justify-start"
                  >
                    <Calendar className="mr-3" size={20} />
                    Agendar Reunião
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-montserrat text-primary mb-4">
                  Localização
                </h3>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Mapa de Localização</p>
                    <p className="text-sm">Integração com Google Maps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
