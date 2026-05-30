import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, ExternalLink, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const APIBinding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vinculação API Binance | Vespers Bot</title>
        <meta name="description" content="Guia passo a passo para vincular sua API da Binance à Vespers Bot. Configure com segurança e comece a operar." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/vinculacao-api" />
        <meta property="og:title" content="Vinculação API Binance | Vespers Bot" />
        <meta property="og:description" content="Guia passo a passo para vincular sua API da Binance à Vespers Bot. Configure com segurança e comece a operar." />
        <meta property="og:url" content="https://cyber-trader-os.lovable.app/vinculacao-api" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Configuração de API</Badge>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-glow mb-6">
              Vinculação da API
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Configure sua chave API da Binance com segurança máxima e comece a operar automaticamente no mercado de futuros de criptomoedas.
            </p>
          </div>

          {/* Critical IP Notice */}
          <Alert className="mb-12 border-warning bg-warning/10">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-lg">
              <strong>🚨 Nota Importante:</strong> Ao gerar sua chave API, vincule imediatamente este IP: 
              <code className="mx-2 px-2 py-1 bg-background rounded font-mono text-primary">43.132.215.8</code>
              <Button
                variant="outline"
                size="sm"
                className="ml-2"
                onClick={() => copyToClipboard("43.132.215.8")}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copiar IP
              </Button>
            </AlertDescription>
          </Alert>

          {/* Main Steps */}
          <div className="grid gap-8 mb-16">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-orbitron">
                  <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                  Passo a Passo para Configurar a Chave API da Binance
                </CardTitle>
                <CardDescription>
                  Siga estas etapas cuidadosamente para uma integração segura e eficaz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Step 1 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">1. Acessar o Dashboard da Vespers Bot</h3>
                  <p className="text-muted-foreground mb-4">
                    Faça login no dashboard da Vespers Bot para iniciar a configuração da API.
                  </p>
                  <Button variant="hologram" asChild>
                    <a 
                      href="https://www.vespers.bot/app/sign/login/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Acessar Dashboard Vespers Bot
                    </a>
                  </Button>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">2. Iniciar a Ligação da API</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• No menu principal, localize e clique em "API Binding"</li>
                    <li>• Selecione "Binance" como a plataforma de destino</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">3. Copiar o Endereço IP</h3>
                  <p className="text-muted-foreground mb-4">
                    Na tela de configuração da API, você verá um campo para copiar o endereço IP. 
                    Clique no botão "Copy IP" para copiar o endereço IP necessário.
                  </p>
                  <div className="bg-card border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">IP para configuração:</p>
                    <div className="flex items-center gap-3">
                      <code className="px-3 py-2 bg-background rounded font-mono text-primary text-lg">
                        43.132.215.8
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard("43.132.215.8")}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Steps 4-10 */}
                <div className="space-y-6">
                  {[
                    {
                      step: 4,
                      title: "Abrir a Conta da Binance",
                      content: "Acesse sua conta na Binance através do navegador ou aplicativo oficial e faça login com suas credenciais."
                    },
                    {
                      step: 5,
                      title: "Navegar até as Configurações da API",
                      content: "No menu superior, vá para a seção 'More' (Mais). Role para baixo e selecione 'API Management' (Gerenciamento de API)."
                    },
                    {
                      step: 6,
                      title: "Criar uma Nova Chave API",
                      content: "Na página de gerenciamento de API, clique em 'Create API' (Criar API). Insira um rótulo para a chave (por exemplo, 'Vespers') e complete os requisitos de verificação."
                    },
                    {
                      step: 7,
                      title: "Configurar Restrições de Acesso",
                      content: "Ative as opções necessárias, como 'Enable Futures' (Ativar Futuros). Recomenda-se ativar 'Restrict access to trusted IPs only' e inserir o IP: 43.132.215.8"
                    },
                    {
                      step: 8,
                      title: "Copiar as Chaves API e Secret Key",
                      content: "Copie a 'API Key' e a 'Secret Key' geradas. Certifique-se de salvar essas chaves em um local seguro."
                    },
                    {
                      step: 9,
                      title: "Colar as Chaves na Vespers Bot",
                      content: "Volte ao aplicativo da Vespers Bot e cole a 'API Key' e a 'Secret Key' nos campos correspondentes na tela de configuração."
                    },
                    {
                      step: 10,
                      title: "Salvar as Configurações",
                      content: "Após colar as chaves, clique em 'Save' (Salvar) para confirmar as configurações e verificar se todas as informações foram inseridas corretamente."
                    }
                  ].map((item) => (
                    <div key={item.step} className="border-l-4 border-muted pl-6">
                      <h3 className="text-xl font-semibold mb-3">{item.step}. {item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Security Section */}
            <Card className="card-hover border-warning">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-orbitron text-warning">
                  <Shield className="w-6 h-6 mr-3" />
                  Garantia de Segurança e Estabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-card/50 rounded-lg">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">Segurança</h4>
                    <p className="text-sm text-muted-foreground">
                      Restringir o acesso por IP diminui o risco de ataques cibernéticos e uso indevido das chaves API.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-card/50 rounded-lg">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">Estabilidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Evitar conflitos entre APIs garante que suas estratégias sejam executadas sem falhas.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-card/50 rounded-lg">
                    <ExternalLink className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">Controle Total</h4>
                    <p className="text-sm text-muted-foreground">
                      Operar com contas separadas permite maior controle sobre suas operações em diferentes plataformas.
                    </p>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Para operações simultâneas:</strong> Se você planeja usar estratégias simultâneas em Binance e OKX, 
                    é obrigatório criar uma segunda conta na OKX para evitar conflitos de API e garantir a integridade das transações.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="card-hover bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron">Resumo dos Passos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Acesse o dashboard da Vespers Bot e inicie a ligação da API</li>
                    <li>2. Copie o endereço IP fornecido: <code className="text-primary">43.132.215.8</code></li>
                    <li>3. Acesse sua conta na Binance e navegue até o gerenciamento de API</li>
                    <li>4. Crie uma nova chave API e configure as restrições de acesso</li>
                  </ol>
                  <ol className="space-y-2 text-muted-foreground" start={5}>
                    <li>5. Copie a "API Key" e a "Secret Key" da Binance</li>
                    <li>6. Volte à Vespers Bot e cole as chaves nas respectivas caixas</li>
                    <li>7. Salve as configurações para concluir a integração</li>
                  </ol>
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="hologram" size="lg" asChild>
                    <a 
                      href="https://www.vespers.bot/app/sign/login/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Começar Configuração
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default APIBinding;