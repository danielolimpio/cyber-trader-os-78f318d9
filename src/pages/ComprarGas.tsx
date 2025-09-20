import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExternalLink, User, Wallet, ArrowRightLeft, Package, Lock, CheckCircle, DollarSign } from "lucide-react";

const ComprarGas = () => {
  const steps = [
    {
      number: "1",
      title: "Acessar o Dashboard",
      description: "Abra o Site da Vespers Bot e faça login com suas credenciais de usuário.",
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
      title: "Verificar o Saldo USDT", 
      description: "Na tela do perfil, vá até a seção 'My Holdings' (Minhas Posições). Certifique-se de que você tem saldo suficiente em USDT para comprar o gás.",
      icon: Wallet,
    },
    {
      number: "4",
      title: "Converter USDT para VESPERS",
      description: "Na seção 'Holdings', localize o botão 'Convert'. Clique em 'Convert' para abrir a tela de conversão.",
      icon: ArrowRightLeft,
    },
    {
      number: "5",
      title: "Selecionar o Pacote de Gás",
      description: "Na tela de compra, você verá várias opções de pacotes de gás. Escolha o pacote que melhor se adequa ao seu saldo disponível.",
      icon: Package,
    },
    {
      number: "6",
      title: "Confirmar a Seleção",
      description: "Após selecionar o pacote desejado, marque a caixa de seleção correspondente. Insira sua senha de pagamento (se necessário).",
      icon: Lock,
    },
    {
      number: "7",
      title: "Realizar a Transação",
      description: "Clique no botão 'Confirm' para confirmar a compra. Siga as instruções na tela para completar a transação.",
      icon: CheckCircle,
    },
    {
      number: "8",
      title: "Verificar o Balanço",
      description: "Após a compra, volte à seção 'Holdings' para verificar se o saldo de VESPERS foi atualizado corretamente.",
      icon: DollarSign,
    },
  ];

  const gasPackages = [
    {
      name: "Micro Vault",
      usdt: "10 USDT",
      vespers: "10 VESPERS",
      color: "border-gray-500",
    },
    {
      name: "Starter Vault",
      usdt: "50 USDT", 
      vespers: "50 VESPERS",
      color: "border-blue-500",
    },
    {
      name: "Growth Catalyst",
      usdt: "100 USDT",
      vespers: "100 VESPERS", 
      color: "border-green-500",
    },
    {
      name: "Yield Engine",
      usdt: "250 USDT",
      vespers: "280 VESPERS",
      color: "border-yellow-500",
      bonus: "+30 VESPERS BÔNUS",
    },
    {
      name: "Alpha Elite",
      usdt: "1000 USDT",
      vespers: "1500 VESPERS",
      color: "border-purple-500",
      bonus: "+500 VESPERS BÔNUS",
      popular: true,
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
                <span className="text-glow">Comprar Gás</span>
                {" "}na Vespers Bot
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
                Aprenda como adquirir VESPERS (gas fee) para manter suas operações 
                automatizadas funcionando de forma contínua e eficiente.
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
                    href="https://wa.me/5512982519116?text=Olá, preciso de ajuda para comprar gás na Vespers Bot."
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

        {/* Gas Packages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                Pacotes de{" "}
                <span className="text-glow">Gás Disponíveis</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escolha o pacote que melhor se adequa ao seu volume de operações
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
              {gasPackages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`cyber-card rounded-2xl p-6 group animate-float relative ${
                    pkg.popular ? 'ring-2 ring-primary/50' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        MAIS POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="font-orbitron font-bold text-lg mb-2">
                      {pkg.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-2xl font-bold text-primary">
                        {pkg.usdt}
                      </p>
                      <p className="text-accent font-medium">
                        = {pkg.vespers}
                      </p>
                      {pkg.bonus && (
                        <p className="text-green-400 text-sm font-bold">
                          {pkg.bonus}
                        </p>
                      )}
                    </div>
                    
                    <div className={`w-full h-1 rounded-full ${pkg.color} opacity-50`} />
                  </div>
                </div>
              ))}
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
                      Verifique o saldo USDT disponível
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">3</span>
                      Clique em "Convert" para converter USDT
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">4</span>
                      Selecione o pacote desejado
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">5</span>
                      Confirme a seleção e insira senha
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">6</span>
                      Realize a transação
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">7</span>
                      Confirme os detalhes
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">8</span>
                      Verifique o novo saldo de VESPERS
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
                      COMPRAR GÁS AGORA
                    </a>
                  </Button>
                  <p className="text-muted-foreground text-sm mt-4">
                    Pronto! Agora você está pronto para usar os recursos da Vespers Bot com o gás adquirido.
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

export default ComprarGas;