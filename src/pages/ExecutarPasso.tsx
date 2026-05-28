import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Play, ExternalLink, Target, TrendingUp, Shield, Info } from "lucide-react";

const ExecutarPasso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Executar Vespers Bot | Guia</title>
        <meta name="description" content="Guia para executar a Vespers Bot em modo semiautomático. Configure estratégias e inicie operações de trading." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/executar-passo" />
      </Helmet>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Executar Vespers Bot
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guia completo para executar o Vespers Bot em modo semiautomático e maximizar seus resultados no trading de criptomoedas.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Alert className="border-primary bg-primary/10">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Introdução:</strong> O Vespers Bot é uma ferramenta automatizada projetada para facilitar o trading de criptomoedas. Este guia detalha como configurar e executar o bot em modo semiautomático, seguindo as instruções fornecidas no vídeo.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Passo a Passo para Execução</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">1</Badge>
                      Acessar o Vespers Bot
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Abra o Site do Vespers Bot e faça login na sua conta, se necessário.
                      Certifique-se de que você tenha concluído com sucesso o processo de vinculação da API (API Binding) para as exchanges OKEx, Huobi e Binance.
                    </p>
                    <Button variant="neural" asChild>
                      <a 
                        href="https://www.vespers.bot/app/sign/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar Vespers Bot
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Step 2 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">2</Badge>
                      Navegar até a Seção de Futuros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Na tela principal, localize e selecione a opção "Futures".
                      Isso permitirá acessar os mercados futuros disponíveis para trading.
                    </p>
                  </CardContent>
                </Card>

                {/* Step 3 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">3</Badge>
                      Escolher o Modo de Trading
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Após selecionar "Futures", você verá várias estratégias de trading disponíveis:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold">Quantum AI</h4>
                      </div>
                      <div className="p-4 border rounded-lg bg-primary/10">
                        <h4 className="font-semibold text-primary">Fusion Matrix ⭐</h4>
                        <p className="text-sm text-muted-foreground">Recomendado</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold">Echo Rebound</h4>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold">Gridlock X</h4>
                      </div>
                    </div>
                    <Alert>
                      <Target className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Escolha a estratégia "Fusion Matrix":</strong> A Fusion Matrix é recomendada para iniciantes devido à sua simplicidade e eficácia. Ela combina sistemas de Fibonacci, Martingale e Grid para estabilidade, flexibilidade e arbitragem otimizada.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                {/* Step 4 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">4</Badge>
                      Configurar o Bot
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Definir o Montante de Trading:</h4>
                        <p>Insira o valor que deseja investir no mercado futuro.</p>
                        <p className="text-sm text-muted-foreground">Por exemplo, insira <code className="bg-muted px-2 py-1 rounded">6.9000</code> como montante inicial.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Selecionar a Exchange:</h4>
                        <p>Escolha a exchange onde deseja realizar o trade (OKEx, Huobi ou Binance).</p>
                        <p className="text-sm text-muted-foreground">Para este exemplo, selecione <strong>OKEx</strong>.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Selecionar a Moeda:</h4>
                        <p>Digite ou escolha a moeda desejada para o trade.</p>
                        <p className="text-sm text-muted-foreground">No exemplo, foi selecionado <strong>XRP/USDT</strong>.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Configurar Parâmetros Avançados (opcional):</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li><strong>Take-Profit (%):</strong> Define o ponto de lucro.</li>
                          <li><strong>Position:</strong> Escolha entre "Long" (compra) ou "Short" (venda).</li>
                          <li><strong>Mode:</strong> Mantenha como "Loop" para execução contínua.</li>
                          <li><strong>Max Cycles:</strong> Defina o número máximo de ciclos de trading.</li>
                          <li><strong>Reinvest Qty:</strong> Quantidade a reinvestir após cada ciclo.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 5 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">5</Badge>
                      Iniciar o Trade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>Após configurar todos os parâmetros, siga estas etapas:</p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Clique em <strong>"Submit"</strong> para enviar as configurações.</li>
                        <li>O sistema exibirá um resumo das configurações. Verifique se tudo está correto antes de prosseguir.</li>
                        <li>Role para baixo na tela e localize o botão <strong>"Open Immediate"</strong>.</li>
                        <li>Clique em <strong>"Open Immediate"</strong> para abrir a posição imediatamente.</li>
                        <li>Confirme a operação clicando em <strong>"Sure"</strong> quando solicitado.</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 6 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="default" className="mr-3">6</Badge>
                      Monitorar o Trade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Após confirmar, o trade será aberto automaticamente na plataforma OKEx.
                      Você pode monitorar o status do trade na seção correspondente do aplicativo.
                      O sistema continuará a executar os trades de acordo com as configurações definidas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-3 text-primary" />
                Dicas Importantes
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 mr-2" />
                      Monitoramento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      É sempre recomendável manter um olho nas flutuações do mercado e ajustar as configurações do bot conforme necessário.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex items-center justify-center">
                      <Shield className="w-6 h-6 mr-2" />
                      Risco
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Lembre-se de que o trading envolve riscos. Certifique-se de investir apenas o que pode perder.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center flex items-center justify-center">
                      <Play className="w-6 h-6 mr-2" />
                      Atualizações
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>
                      Fique atento às atualizações e sinais fornecidos pelo Vespers Bot para tomar decisões informadas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Conclusão</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">
                    Com esses passos, você conseguiu configurar e executar o Vespers Bot em modo semiautomático. 
                    O bot agora estará operando conforme as configurações definidas, gerenciando seus trades de forma eficiente.
                  </p>
                  <p className="mb-8 text-lg font-semibold text-primary">
                    Agora que você sabe como usar o Vespers Bot em modo semiautomático, 
                    aproveite ao máximo suas funcionalidades para maximizar seus resultados no mercado de criptomoedas!
                  </p>
                  
                  <Button variant="hologram" size="lg" asChild>
                    <a 
                      href="https://www.vespers.bot/app/sign/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Começar Agora
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
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

export default ExecutarPasso;