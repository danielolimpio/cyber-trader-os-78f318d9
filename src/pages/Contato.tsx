import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Clock, ExternalLink } from "lucide-react";

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contato e Suporte | Vespers Bot</title>
        <meta name="description" content="Entre em contato com a equipe Vespers Bot. Suporte via WhatsApp e email para dúvidas sobre trading automatizado." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/contato" />
      </Helmet>
      <Header />
      <FloatingWhatsApp />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estamos aqui para ajudá-lo com qualquer dúvida sobre a Vespers Bot. 
                Nossa equipe de suporte está pronta para oferecer a melhor assistência.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* WhatsApp Contact */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Suporte via WhatsApp</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="mb-6 text-muted-foreground">
                      Fale diretamente com nossa equipe de suporte através do WhatsApp. 
                      Resposta rápida e atendimento personalizado.
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="font-semibold">📱 (12) 98251-9116</p>
                      <p className="text-sm text-muted-foreground">
                        Horário de atendimento: Segunda a Sexta, 9h às 18h
                      </p>
                    </div>
                    <Button variant="neural" size="lg" className="w-full" asChild>
                      <a
                        href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Email Contact */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Suporte via E-mail</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="mb-6 text-muted-foreground">
                      Envie sua dúvida por e-mail e nossa equipe responderá 
                      em até 24 horas úteis.
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="font-semibold">✉️ contato@vespersbot.com</p>
                      <p className="text-sm text-muted-foreground">
                        Resposta em até 24 horas úteis
                      </p>
                    </div>
                    <Button variant="hologram" size="lg" className="w-full" asChild>
                      <a
                        href="mailto:contato@vespersbot.com?subject=Dúvida sobre Vespers Bot"
                        className="flex items-center justify-center"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Enviar E-mail
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Access */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Precisa de Ajuda Imediata?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Antes de entrar em contato, confira nossa Central de Ajuda com as perguntas mais frequentes.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="/central-ajuda" className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Acessar Central de Ajuda
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <CardTitle>Horários de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Segunda a Sexta-feira</span>
                      <span className="text-muted-foreground">9h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sábado</span>
                      <span className="text-muted-foreground">9h às 14h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Domingo</span>
                      <span className="text-muted-foreground">Fechado</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-center">
                      <strong>Nota:</strong> Fora do horário de atendimento, suas mensagens serão respondidas no próximo dia útil.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;