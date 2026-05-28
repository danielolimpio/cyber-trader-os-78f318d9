import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, ExternalLink, BookOpen } from "lucide-react";

const CentralAjuda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Como criar uma conta na Vespers Bot?",
      answer: "Para criar uma conta, clique no botão 'Abrir Conta' e siga o passo a passo detalhado em nossa página de registro. Você precisará de um e-mail válido e do código de convite: mqOHBV"
    },
    {
      question: "Como configurar a API da Binance?",
      answer: "Acesse nossa página de 'Vinculação da API' onde você encontrará um guia completo passo a passo para configurar sua chave API da Binance de forma segura."
    },
    {
      question: "Como configurar a API da OKX?",
      answer: "Temos um guia específico para configuração da API da OKX. Acesse a página 'Chave API OKX' para instruções detalhadas, incluindo configurações de segurança e IP."
    },
    {
      question: "Qual é o valor mínimo para depositar?",
      answer: "O valor mínimo recomendado é de 150 USDT: 100 USDT para ativar o bot e 50 USDT para cobrir as taxas de gás (gas fees)."
    },
    {
      question: "Como comprar gás (VESPERS) na plataforma?",
      answer: "Acesse nossa página 'Comprar Gás' onde explicamos como converter USDT para VESPERS através dos pacotes disponíveis: Micro Vault (10 USDT), Starter Vault (50 USDT), Growth Catalyst (100 USDT), Yield Engine (250 USDT) e Alpha Elite (1000 USDT)."
    },
    {
      question: "Qual estratégia de trading é recomendada para iniciantes?",
      answer: "A estratégia 'Fusion Matrix' é altamente recomendada para iniciantes devido à sua simplicidade e eficácia. Ela combina sistemas de Fibonacci, Martingale e Grid para estabilidade e arbitragem otimizada."
    },
    {
      question: "É seguro conectar minha exchange à Vespers Bot?",
      answer: "Sim, é seguro. Recomendamos sempre restringir o acesso por IP (usar o IP: 43.132.215.8) e nunca ativar permissões de saque nas configurações da API para máxima segurança."
    },
    {
      question: "Posso usar a mesma API em múltiplas plataformas?",
      answer: "Para OKX, não é recomendado usar as mesmas credenciais em múltiplas configurações, especialmente com Quantum AI. Recomendamos criar contas separadas para evitar conflitos."
    },
    {
      question: "Como monitorar meus trades?",
      answer: "Você pode monitorar seus trades diretamente no dashboard da Vespers Bot na seção correspondente à exchange escolhida. O sistema executará trades conforme suas configurações."
    },
    {
      question: "O que fazer se o código de verificação não chegar?",
      answer: "Se o código de verificação não aparecer em seu e-mail principal, verifique a pasta de Spam. Se ainda assim não receber, tente solicitar um novo código."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Central de Ajuda | Vespers Bot</title>
        <meta name="description" content="Central de ajuda da Vespers Bot. Encontre respostas para dúvidas frequentes sobre conta, depósito, API e estratégias." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/central-ajuda" />
      </Helmet>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Central de Ajuda
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Encontre respostas para as perguntas mais frequentes sobre a Vespers Bot. 
                Se não encontrar o que procura, nossa equipe está pronta para ajudar.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">Guias Completos</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Acesse nossos guias passo a passo
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/abrir-conta">Criar Conta</a>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/vinculacao-api">API Binance</a>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/chave-api-okx">API OKX</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <HelpCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">Tutoriais</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Aprenda a usar todas as funcionalidades
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/depositar">Como Depositar</a>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/comprar-gas">Comprar Gás</a>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/executar-passo">Executar Bot</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <MessageSquare className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">Suporte Direto</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Fale com nossa equipe especializada
                    </p>
                    <div className="space-y-2">
                      <Button variant="neural" size="sm" className="w-full" asChild>
                        <a
                          href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/contato">Outros Contatos</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Ainda precisa de ajuda?</h2>
              <p className="text-muted-foreground mb-8">
                Nossa equipe de suporte está sempre disponível para ajudá-lo com qualquer dúvida específica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="neural" size="lg" asChild>
                  <a
                    href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contato" className="flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Todos os Contatos
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CentralAjuda;