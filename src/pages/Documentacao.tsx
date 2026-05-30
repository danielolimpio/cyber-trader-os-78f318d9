import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Globe } from "lucide-react";
import binanceLogo from "@/assets/binance-logo.png";
import okxLogo from "@/assets/okx-logo.png";
import huobiLogo from "@/assets/huobi-logo.png";

const Documentacao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const exchanges = [
    {
      name: "Binance",
      logo: binanceLogo,
      description: "A Binance é uma das maiores exchanges de criptomoedas do mundo, oferecendo uma API robusta e bem documentada para trading automatizado. Sua documentação inclui endpoints para trading spot, futures, opções e muito mais.",
      features: [
        "Trading Spot e Futures",
        "WebSocket Streams em tempo real",
        "Gerenciamento de conta e portfólio",
        "Dados históricos de mercado",
        "Sistema de autenticação seguro"
      ],
      docUrl: "https://docs.binance.us/#authentication",
      buttonText: "Acessar Documentação Binance"
    },
    {
      name: "Huobi (HTX)",
      logo: huobiLogo,
      description: "A Huobi (agora HTX) é uma exchange global líder que oferece APIs avançadas para trading profissional. Sua documentação técnica é abrangente e suporta múltiplas funcionalidades de trading.",
      features: [
        "Trading de Spot e Derivativos",
        "APIs REST e WebSocket",
        "Análise de mercado em tempo real",
        "Gestão de ordens avançada",
        "Suporte a múltiplas moedas"
      ],
      docUrl: "https://www.htx.com/en-in/opend/newApiPages/",
      buttonText: "Acessar Documentação Huobi"
    },
    {
      name: "OKX",
      logo: okxLogo,
      description: "A OKX é uma exchange inovadora que oferece APIs de alta performance para trading institucional e individual. Sua documentação é detalhada e inclui exemplos práticos para implementação.",
      features: [
        "Trading Unificado (Unified Trading)",
        "APIs de alta frequência",
        "Dados de mercado em tempo real",
        "Trading de produtos estruturados",
        "Sistema de risco avançado"
      ],
      docUrl: "https://www.okx.com/docs-v5/en/#overview",
      buttonText: "Acessar Documentação OKX"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Documentação de APIs | Vespers Bot</title>
        <meta name="description" content="Acesse a documentação das APIs Binance, OKX e Huobi. Recursos técnicos para integração com a Vespers Bot." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/documentacao" />
        <meta property="og:title" content="Documentação de APIs | Vespers Bot" />
        <meta property="og:description" content="Acesse a documentação das APIs Binance, OKX e Huobi. Recursos técnicos para integração com a Vespers Bot." />
        <meta property="og:url" content="https://cyber-trader-os.lovable.app/documentacao" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Documentação das APIs
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Acesse a documentação oficial das principais exchanges suportadas pela Vespers Bot. 
                Recursos técnicos completos para desenvolvedores e usuários avançados.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-primary" />
                    Sobre as Documentações das APIs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    As documentações oficiais das exchanges são recursos essenciais para entender como as APIs funcionam, 
                    quais endpoints estão disponíveis, como implementar autenticação segura e como utilizar os recursos 
                    avançados de trading. Cada exchange possui suas próprias especificações e funcionalidades únicas que 
                    podem ser exploradas através de suas documentações oficiais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Exchange Documentation Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Documentações Disponíveis</h2>
              
              <div className="space-y-8">
                {exchanges.map((exchange, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row items-start gap-8">
                        {/* Logo and Basic Info */}
                        <div className="flex-shrink-0 text-center lg:text-left">
                          <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 flex items-center justify-center bg-background rounded-lg border">
                            <img 
                              src={exchange.logo} 
                              alt={`${exchange.name} Logo`} 
                              className="max-w-full max-h-full object-contain p-2"
                            />
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{exchange.name}</h3>
                          <Button variant="hologram" className="w-full lg:w-auto" asChild>
                            <a 
                              href={exchange.docUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              {exchange.buttonText}
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        </div>

                        {/* Description and Features */}
                        <div className="flex-1">
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {exchange.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold mb-3 text-primary">Principais Recursos da API:</h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {exchange.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Precisa de Ajuda com as APIs?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipe pode ajudá-lo a configurar e integrar as APIs das exchanges com a Vespers Bot. 
                Oferecemos suporte técnico especializado para garantir que sua configuração seja feita corretamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="neural" size="lg" asChild>
                  <a
                    href="https://wa.me/5512982519116?text=Olá, preciso de ajuda com a configuração das APIs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Suporte Técnico
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/central-ajuda" className="flex items-center">
                    Central de Ajuda
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Guias de Configuração</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-center">Configurar API Binance</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Guia passo a passo para configurar sua chave API da Binance na Vespers Bot.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/vinculacao-api">Ver Guia Binance</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-center">Configurar API OKX</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Instruções detalhadas para configurar sua chave API da OKX de forma segura.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/chave-api-okx">Ver Guia OKX</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentacao;