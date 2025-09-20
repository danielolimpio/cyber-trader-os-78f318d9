import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExternalLink, User, Settings, Wallet, Copy, Shield, CheckCircle, DollarSign, Key, Smartphone } from "lucide-react";

const Depositar = () => {
  const steps = [
    {
      number: "1",
      title: "Acessar o Dashboard",
      description: "Abra o aplicativo ou Site da Vespers Bot e faça login com suas credenciais de usuário.",
      icon: ExternalLink,
    },
    {
      number: "2", 
      title: "Ir para a Seção 'Profile' (Perfil)",
      description: "No menu inferior, clique no ícone do perfil localizado no canto inferior direito da tela.",
      icon: User,
    },
    {
      number: "3",
      title: "Configurar a Senha de Pagamento", 
      description: "Na tela do perfil, vá até a seção 'Settings' (Configurações). Clique em 'Payment Password' (Senha de Pagamento). Configure uma senha de seis dígitos para transações futuras.",
      icon: Settings,
    },
    {
      number: "4",
      title: "Acessar a Seção 'My Holdings' (Minhas Posições)",
      description: "Volte à tela principal e clique em 'My Holdings' (Minhas Posições).",
      icon: Wallet,
    },
    {
      number: "5",
      title: "Copiar o Endereço de Depósito",
      description: "Na seção 'Add Funds' (Adicionar Fundos), você verá um QR Code e um endereço de depósito. Copie o endereço de depósito clicando no botão 'Copy' (Copiar).",
      icon: Copy,
    },
    {
      number: "6",
      title: "Realizar o Depósito",
      description: "Use sua carteira criptográfica para enviar USDT (BEP20) para o endereço copiado. Certifique-se de enviar pelo menos 150 USDT: 100 USDT para ativar o bot e 50 USDT para cobrir as taxas de gás (gas fees).",
      icon: DollarSign,
    },
    {
      number: "7",
      title: "Verificar o Depósito",
      description: "Após realizar o depósito, volte ao aplicativo Vespers Bot. Clique novamente em 'My Holdings' para verificar se o saldo foi creditado.",
      icon: CheckCircle,
    },
    {
      number: "8",
      title: "Ativar o Bot",
      description: "Na tela inicial, vá para a seção 'Access Key' (Chave de Acesso). Clique em 'Buy' (Comprar) para adquirir a chave de acesso. Insira a senha de pagamento configurada anteriormente e confirme a compra.",
      icon: Key,
    },
    {
      number: "9",
      title: "Colar o Código de Ativação",
      description: "Após a compra bem-sucedida, coloque o código de ativação que você copiou anteriormente. Clique em 'Activate' (Ativar) para ativar o bot.",
      icon: Smartphone,
    },
    {
      number: "10",
      title: "Confirmar a Ativação",
      description: "Uma mensagem de confirmação será exibida, indicando que o bot foi ativado com sucesso.",
      icon: CheckCircle,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                Passo a Passo para{" "}
                <span className="text-glow">Depositar</span>
                {" "}na Vespers Bot
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
                Aprenda como fazer seu primeiro depósito USDT/USDC e ativar o bot 
                para começar a automatizar seus investimentos em criptomoedas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hologram" 
                  size="lg"
                  asChild
                >
                  <a
                    href="https://www.vespers.bot/app/sign/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    ACESSAR DASHBOARD
                  </a>
                </Button>
                <Button 
                  variant="neural" 
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/5512982519116?text=Olá, preciso de ajuda com depósito na Vespers Bot."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Obter Suporte
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="cyber-card rounded-2xl p-8 group animate-float"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-orbitron font-bold text-primary-foreground">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-4">
                            <Icon className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-orbitron font-bold">
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Important Notice */}
              <div className="mt-16 cyber-card rounded-2xl p-8 border border-accent/50">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-accent mb-4">
                      Valores Mínimos Recomendados
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <p className="text-primary font-bold">💰 100 USDT</p>
                        <p className="text-sm text-muted-foreground">Para ativar o bot</p>
                      </div>
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <p className="text-accent font-bold">⛽ 50 USDT</p>
                        <p className="text-sm text-muted-foreground">Para cobrir taxas de gás</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Total mínimo:</strong> 150 USDT (BEP20) para começar a operar
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Summary Section */}
              <div className="mt-16 cyber-card rounded-2xl p-8">
                <h3 className="text-2xl font-orbitron font-bold mb-6 text-center">
                  Resumo dos Passos
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">1</span>
                      Acesse o dashboard e faça login
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">2</span>
                      Configure a senha de pagamento
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">3</span>
                      Copie o endereço de depósito
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">4</span>
                      Envie pelo menos 150 USDT (BEP20)
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">5</span>
                      Verifique o depósito
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">6</span>
                      Compre a chave de acesso
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">7</span>
                      Cole o código de ativação
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">8</span>
                      Confirme a ativação
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    variant="hologram" 
                    size="lg"
                    asChild
                  >
                    <a
                      href="https://www.vespers.bot/app/sign/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      COMEÇAR DEPÓSITO
                    </a>
                  </Button>
                  <p className="text-muted-foreground text-sm mt-4">
                    Pronto! Agora você está pronto para usar os recursos da Vespers Bot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Depositar;