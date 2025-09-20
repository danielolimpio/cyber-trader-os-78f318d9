import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, ExternalLink, Shield, AlertTriangle } from "lucide-react";

const ChaveAPIokx = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Configurar Chave API da OKX
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Siga este guia passo a passo para configurar sua chave API da OKX na Vespers Bot de forma segura e eficiente.
              </p>
            </div>
          </div>
        </section>

        {/* IP Notice Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Alert className="max-w-4xl mx-auto border-destructive bg-destructive/10">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <div>
                  <strong>🚨 Nota Importante de Ligação da API:</strong><br />
                  Ao gerar sua chave API, ligue imediatamente este IP: <strong>43.132.215.8</strong>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("43.132.215.8")}
                  className="ml-4"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar IP
                </Button>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Passo a Passo para Configuração</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">1</Badge>
                      Acessar o Dashboard da Vespers Bot
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Abra o Site da Vespers Bot e faça login com suas credenciais de usuário.
                    </p>
                    <Button variant="neural" asChild>
                      <a 
                        href="https://www.vespers.bot/app/sign/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar Dashboard
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Step 2 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">2</Badge>
                      Iniciar a Ligação da API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      No menu principal, localize e clique em "API Binding".
                      Selecione "OKX" como a plataforma de destino.
                    </p>
                  </CardContent>
                </Card>

                {/* Step 3 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">3</Badge>
                      Copiar o Endereço IP
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Na tela de configuração da API, você verá um campo para copiar o endereço IP.
                      Clique no botão "Copy IP" para copiar o endereço IP necessário.
                    </p>
                    <div className="flex items-center space-x-2">
                      <code className="bg-muted px-3 py-2 rounded font-mono">43.132.215.8</code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard("43.132.215.8")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 4 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">4</Badge>
                      Abrir a Conta da OKX
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Acesse sua conta na OKX através do navegador ou aplicativo oficial.
                      Faça login com suas credenciais de usuário.
                    </p>
                  </CardContent>
                </Card>

                {/* Step 5 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">5</Badge>
                      Navegar até as Configurações da API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      No menu superior, vá para a seção "Profile and Settings".
                      Role para baixo e selecione "API".
                    </p>
                  </CardContent>
                </Card>

                {/* Step 6 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">6</Badge>
                      Criar uma Nova Chave API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Na página de gerenciamento de API, clique em "Create API Key".
                      Insira um rótulo para a chave (por exemplo, "Vespers").
                      Siga as instruções de segurança e complete os requisitos de verificação, como autenticação via aplicativo Google Authenticator.
                    </p>
                  </CardContent>
                </Card>

                {/* Step 7 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">7</Badge>
                      Configurar Restrições de Acesso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Após criar a chave API, configure as restrições de acesso:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Ative as opções necessárias, como "Trade" (Negociação) e outras funcionalidades que deseja usar.</li>
                      <li>Recomenda-se ativar "Restrict access to trusted IPs only" (Restringir acesso apenas a IPs confiáveis) para aumentar a segurança.</li>
                      <li><strong>Utilize esse IP: 43.132.215.8</strong></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Step 8 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">8</Badge>
                      Copiar as Chaves API e Secret Key
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Copie a "API Key" e a "Secret Key" geradas.
                      Certifique-se de anotar ou salvar essas chaves em um local seguro, pois elas são cruciais para a integração.
                    </p>
                  </CardContent>
                </Card>

                {/* Step 9 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">9</Badge>
                      Colar as Chaves na Vespers Bot
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Volte ao aplicativo ou site da Vespers Bot.
                      Cole a "API Key", "Secret Key" e a "Passphrase" nos campos correspondentes na tela de configuração da API.
                      Certifique-se de colar corretamente para evitar erros.
                    </p>
                  </CardContent>
                </Card>

                {/* Step 10 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">10</Badge>
                      Salvar as Configurações
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Após colar as chaves, clique em "Save" (Salvar) para confirmar as configurações.
                      Verifique se todas as informações foram inseridas corretamente antes de finalizar.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Security Recommendations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-3 text-primary" />
                Recomendações de Segurança e Estabilidade
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Ligação do Endereço IP</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Ao criar uma nova chave API na plataforma OKX ou Binance, é essencial vincular o endereço IP fornecido (43.132.215.8) para garantir que a comunicação entre a Vespers Bot e a exchange seja segura e estável.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Prevenção de Conflitos</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Se você estiver executando estratégias simultaneamente em ambas as plataformas (Binance e OKX), especialmente utilizando o Quantum AI, não é possível usar as mesmas credenciais de API em mais de uma configuração OKX.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Garantia de Estabilidade</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Evite sobreposições de configurações entre as exchanges para manter o controle total sobre suas operações. A separação das contas e a restrição de acesso por IP ajudam a garantir que suas estratégias sejam executadas de forma consistente.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Resumo Final</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-3 mt-1">✓</Badge>
                      Sempre use o IP 43.132.215.8 ao criar chaves API.
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-3 mt-1">✓</Badge>
                      Se for usar Quantum AI ou estratégias simultâneas, crie uma segunda conta na OKX para evitar conflitos.
                    </li>
                    <li className="flex items-start">
                      <Badge variant="outline" className="mr-3 mt-1">✓</Badge>
                      Mantenha suas chaves API e senhas secretas protegidas e nunca compartilhe com terceiros.
                    </li>
                  </ul>
                  
                  <div className="text-center mt-8">
                    <Button variant="hologram" size="lg" asChild>
                      <a 
                        href="https://www.vespers.bot/app/sign/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Começar Configuração
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
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

export default ChaveAPIokx;