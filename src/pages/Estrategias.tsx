import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  TrendingUp, 
  Brain, 
  Grid3X3, 
  Target, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  BarChart3
} from "lucide-react";

const Estrategias = () => {
  const strategies = [
    {
      id: "fusion-matrix",
      name: "Fusion Matrix",
      icon: Grid3X3,
      color: "primary",
      subtitle: "Mercado Futuro",
      description: "Estratégia híbrida que combina Fibonacci, Martingale e Grid Trading para estabilidade e arbitragem otimizada.",
      benefits: ["Estabilidade em mercados voláteis", "Flexibilidade de configuração", "Lucros frequentes", "Automatização completa"],
      risks: ["Drawdown prolongado", "Overtrading", "Necessita monitoramento"],
    },
    {
      id: "echo-rebound",
      name: "Echo Rebound", 
      icon: TrendingUp,
      color: "primary",
      subtitle: "Mercado Futuro",
      description: "Estratégia de recuperação que utiliza aumento controlado do risco para obter lucros em movimentos de reversão.",
      benefits: ["Adaptação rápida", "Recuperação eficiente", "Funciona em volatilidade", "Semi-autônoma"],
      risks: ["Mercado direcional", "Falsas reversões", "Exige controle de risco"],
    },
    {
      id: "quantum-ai",
      name: "Quantum AI",
      icon: Brain,
      color: "primary",
      subtitle: "Mercado Futuro", 
      description: "Inteligência artificial avançada com modelos preditivos para análise e execução automática baseada em machine learning.",
      benefits: ["Autonomia total", "Reações rápidas", "Adaptação contínua", "Opera 24/7"],
      risks: ["Alto risco com alavancagem", "Dependência tecnológica", "Eventos imprevisíveis"],
    },
    {
      id: "gridlock-x",
      name: "Gridlock X",
      icon: BarChart3,
      color: "primary",
      subtitle: "Mercado Futuro",
      description: "Evolução do Grid Trading com espaçamento otimizado para operações de alta frequência em mercados laterais.",
      benefits: ["Lucros constantes", "Uso eficiente do capital", "Operação contínua", "Ideal para passivos"],
      risks: ["Mercados direcionais", "Falta de liquidez", "Concentração de risco"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative neural-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Estratégias Automatizadas
              </Badge>
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                Estratégias de{" "}
                <span className="text-glow">Trading</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Conheça as estratégias avançadas da Vespers Bot, desenvolvidas para maximizar seus lucros 
                no mercado futuro de criptomoedas com tecnologia de ponta.
              </p>
            </div>
          </div>
        </section>

        {/* Strategies Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {strategies.map((strategy) => {
                const Icon = strategy.icon;
                return (
                  <Card key={strategy.id} className="cyber-card group cursor-pointer">
                    <div className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-${strategy.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-orbitron font-bold text-lg mb-2">{strategy.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{strategy.subtitle}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {strategy.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Strategies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="fusion-matrix" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
                {strategies.map((strategy) => (
                  <TabsTrigger key={strategy.id} value={strategy.id} className="text-xs lg:text-sm">
                    {strategy.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Fusion Matrix */}
              <TabsContent value="fusion-matrix">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                      Fusion Matrix – <span className="text-glow">Mercado Futuro</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                      Uma estratégia inteligente que combina os sistemas Fibonacci, Martingale e Grid Trading, 
                      projetada para oferecer estabilidade, flexibilidade e arbitragem otimizada.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="cyber-card">
                      <div className="p-8">
                        <h3 className="text-2xl font-orbitron font-bold mb-6 flex items-center">
                          <Target className="w-6 h-6 mr-3 text-primary" />
                          Como Funciona
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold mb-2 text-primary">1. Níveis com Fibonacci</h4>
                            <p className="text-muted-foreground text-sm">
                              Define níveis-chave baseados em padrões naturais do mercado (23.6%, 38.2%, 50%, 61.8%, 78.6%) 
                              para identificar pontos estratégicos de entrada.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">2. Sistema Martingale</h4>
                            <p className="text-muted-foreground text-sm">
                              Aumenta progressivamente o volume após perdas (1x, 1.5x, 2x) para recuperar capital 
                              rapidamente quando o mercado reverter.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">3. Grid Trading</h4>
                            <p className="text-muted-foreground text-sm">
                              Cria múltiplas ordens de compra e venda com take profit fixo (3-5%) em cada nível, 
                              capturando lucros mesmo com pequenas altas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="space-y-6">
                      <Card className="cyber-card">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-green-400">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Benefícios
                          </h4>
                          <ul className="space-y-2">
                            {strategies[0].benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card border-orange-500/20">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-orange-400">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Riscos e Cuidados
                          </h4>
                          <ul className="space-y-2">
                            {strategies[0].risks.map((risk, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card border-blue-500/20">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-blue-400">
                            <Shield className="w-5 h-5 mr-2" />
                            Dicas de Segurança
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Diversifique entre vários pares (BTC, ETH, LTC)</li>
                            <li>• Use alavancagem moderada (5x-10x)</li>
                            <li>• Configure stop loss entre -2% e -3%</li>
                            <li>• Mantenha capital de reserva</li>
                          </ul>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Echo Rebound */}
              <TabsContent value="echo-rebound">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                      Echo Rebound – <span className="text-glow">Mercado Futuro</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                      Estratégia de recuperação inteligente que utiliza aumento controlado do risco para obter lucros 
                      aproveitando movimentos de rejeição ou rebote no preço.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="cyber-card">
                      <div className="p-8">
                        <h3 className="text-2xl font-orbitron font-bold mb-6 flex items-center">
                          <TrendingUp className="w-6 h-6 mr-3 text-primary" />
                          Funcionamento
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold mb-2 text-primary">1. Princípio de Reversão</h4>
                            <p className="text-muted-foreground text-sm">
                              Baseia-se no conceito de reversão à média - quando o preço forma picos extremos, 
                              tende a voltar para níveis mais equilibrados.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">2. Aumento de Risco Controlado</h4>
                            <p className="text-muted-foreground text-sm">
                              Se o primeiro trade falhar, aumenta ligeiramente o tamanho da próxima posição (1.5x) 
                              mantendo controle sobre o risco total.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">3. Detecção de Rebotes</h4>
                            <p className="text-muted-foreground text-sm">
                              Identifica automaticamente picos de alta/baixa extremos para entrada em posições 
                              contrárias com alto potencial de reversão.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="space-y-6">
                      <Card className="cyber-card">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-green-400">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Vantagens
                          </h4>
                          <ul className="space-y-2">
                            {strategies[1].benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card border-orange-500/20">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-orange-400">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Limitações
                          </h4>
                          <ul className="space-y-2">
                            {strategies[1].risks.map((risk, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 text-primary">Configuração Recomendada</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Capital por trade:</span>
                              <span className="font-medium">Até 1% do saldo</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Alavancagem:</span>
                              <span className="font-medium">5x - 10x</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Stop Loss:</span>
                              <span className="font-medium">-2%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Take Profit:</span>
                              <span className="font-medium">+3%</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Quantum AI */}
              <TabsContent value="quantum-ai">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                      Quantum AI – <span className="text-glow">Mercado Futuro</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                      Inteligência artificial avançada e totalmente autônoma que analiza e realiza negociações 
                      com base em modelos preditivos e condições reais do mercado.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="cyber-card">
                      <div className="p-8">
                        <h3 className="text-2xl font-orbitron font-bold mb-6 flex items-center">
                          <Brain className="w-6 h-6 mr-3 text-primary" />
                          Tecnologia IA
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold mb-2 text-primary">Machine Learning</h4>
                            <p className="text-muted-foreground text-sm">
                              Algoritmos que aprendem continuamente com dados históricos e padrões de mercado 
                              para otimizar as decisões de trading.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">Deep Learning</h4>
                            <p className="text-muted-foreground text-sm">
                              Redes neurais complexas que reconhecem padrões visuais e comportamentais nos gráficos, 
                              identificando oportunidades invisíveis ao olho humano.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">Análise em Tempo Real</h4>
                            <p className="text-muted-foreground text-sm">
                              Processamento instantâneo de preços, volumes, notícias e sentimento do mercado 
                              para reações imediatas às mudanças.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="space-y-6">
                      <Card className="cyber-card">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-green-400">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Capacidades
                          </h4>
                          <ul className="space-y-2">
                            {strategies[2].benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card border-orange-500/20">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-orange-400">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Considerações
                          </h4>
                          <ul className="space-y-2">
                            {strategies[2].risks.map((risk, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card border-purple-500/20">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 text-purple-400">Processo Automático</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              <span className="text-muted-foreground">Análise contínua de dados</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              <span className="text-muted-foreground">Previsão de movimentos</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              <span className="text-muted-foreground">Execução automática</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              <span className="text-muted-foreground">Adaptação contínua</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Gridlock X */}
              <TabsContent value="gridlock-x">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                      Gridlock X – <span className="text-glow">Mercado Futuro</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                      Evolução do Grid Trading com espaçamento otimizado entre ordens, projetada para operações 
                      de alta frequência em mercados laterais.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="cyber-card">
                      <div className="p-8">
                        <h3 className="text-2xl font-orbitron font-bold mb-6 flex items-center">
                          <Grid3X3 className="w-6 h-6 mr-3 text-primary" />
                          Sistema de Grades
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold mb-2 text-primary">1. Grades Inteligentes</h4>
                            <p className="text-muted-foreground text-sm">
                              Diferente do grid tradicional, o espaçamento é ajustado baseado na volatilidade 
                              histórica do ativo para maior eficiência.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">2. Ordens Automáticas</h4>
                            <p className="text-muted-foreground text-sm">
                              Coloca automaticamente ordens de compra e venda em cada nível da grade, 
                              executando trades conforme o preço oscila.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2 text-primary">3. Reinvestimento</h4>
                            <p className="text-muted-foreground text-sm">
                              Cada lucro gerado é automaticamente reinvestido, aumentando o potencial 
                              de ganhos acumulativos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="space-y-6">
                      <Card className="cyber-card">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-green-400">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Principais Benefícios
                          </h4>
                          <ul className="space-y-2">
                            {strategies[3].benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card border-orange-500/20">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 flex items-center text-orange-400">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Limitações
                          </h4>
                          <ul className="space-y-2">
                            {strategies[3].risks.map((risk, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>

                      <Card className="cyber-card">
                        <div className="p-6">
                          <h4 className="font-orbitron font-bold mb-4 text-primary">Exemplo de Configuração</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Número de grades:</span>
                              <span className="font-medium">6-15 camadas</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Espaçamento:</span>
                              <span className="font-medium">0.5% entre grades</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Take Profit:</span>
                              <span className="font-medium">0.5% - 1%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Melhor uso:</span>
                              <span className="font-medium">Mercados laterais</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                Pronto para{" "}
                <span className="text-glow">Começar?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Escolha a estratégia ideal para seu perfil de risco e comece a multiplicar seus investimentos hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hologram" size="lg" asChild>
                  <a href="/abrir-conta">
                    TESTAR ESTRATÉGIAS
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="neural" size="lg" asChild>
                  <a href="/historicos">
                    VER RESULTADOS
                    <ArrowRight className="w-4 h-4 ml-2" />
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

export default Estrategias;