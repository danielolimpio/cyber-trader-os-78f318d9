import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExternalLink, Mail, Lock, UserCheck, LogIn, Settings } from "lucide-react";

const AbrirConta = () => {
  const steps = [
    {
      number: "1",
      title: "Acessar o Link de Convite",
      description: "Clique no Botão Abrir Conta!",
      icon: ExternalLink,
    },
    {
      number: "2", 
      title: "Ir para a Página de Registro",
      description: "Digite um endereço de e-mail válido que você possa acessar.",
      icon: Mail,
    },
    {
      number: "3",
      title: "Inserir o Código de Verificação", 
      description: "Copie o código de seis dígitos recebido no e-mail e cole-o no campo de verificação.",
      icon: UserCheck,
    },
    {
      number: "4",
      title: "Criar uma Senha",
      description: "Crie uma senha segura e digite-a no campo 'Password'. Confirme a senha digitando-a novamente no campo 'Confirm'.",
      icon: Lock,
    },
    {
      number: "5",
      title: "Invitation Code",
      description: "Utilize esse: mqOHBV. Insira-o no campo 'Invitation Code'.",
      icon: UserCheck,
    },
    {
      number: "6",
      title: "Aceitar os Termos de Uso",
      description: "Marque a caixa de seleção ao lado de 'I have agreed to and read the User Agreement' para aceitar os termos de uso.",
      icon: UserCheck,
    },
    {
      number: "7",
      title: "Registrar-se",
      description: "Clique no botão 'Register' para concluir o registro.",
      icon: UserCheck,
    },
    {
      number: "8",
      title: "Logar na Conta",
      description: "Após o registro bem-sucedido, você será redirecionado à página de login. Insira o e-mail e a senha usados durante o registro e clique em 'Login'.",
      icon: LogIn,
    },
    {
      number: "9",
      title: "Acessar o Dashboard",
      description: "Após fazer login, você será direcionado ao dashboard da Vespers Bot, onde poderá visualizar suas informações e começar a usar os recursos disponíveis.",
      icon: Settings,
    },
    {
      number: "10",
      title: "Configurar API (Se Necessário)",
      description: "Para integrar sua conta com exchanges como OKX, Huobi ou Binance, vá até a seção 'API Binding' no menu. Siga as instruções fornecidas para configurar a integração via API.",
      icon: Settings,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Abrir Conta | Vespers Bot</title>
        <meta name="description" content="Aprenda a criar sua conta na Vespers Bot em 10 passos simples. Registro completo com código de convite mqOHBV." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/abrir-conta" />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                Passo a Passo para se{" "}
                <span className="text-glow">Registrar</span>
                {" "}na Vespers Bot
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
                Siga este guia completo para criar sua conta e começar a automatizar 
                seus investimentos em criptomoedas com segurança e eficiência.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hologram" 
                  size="lg"
                  asChild
                >
                  <a
                    href="https://www.vespers.bot/portal/index/invite?invitation_code=mqOHBV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    ABRIR CONTA AGORA
                  </a>
                </Button>
                <Button 
                  variant="neural" 
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
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
                          
                          {step.number === "2" && (
                            <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                              <p className="text-sm text-accent font-medium">
                                💡 <strong>Dica:</strong> Se o código não aparecer no seu e-mail principal, verifique a pasta de Spam.
                              </p>
                            </div>
                          )}
                          
                          {step.number === "5" && (
                            <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                              <p className="text-sm text-primary font-medium">
                                📞 <strong>Suporte:</strong> Obtenha suporte do indicador no WhatsApp{" "}
                                <a
                                  href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline hover:text-primary/80"
                                >
                                  (12) 982519116
                                </a>
                              </p>
                            </div>
                          )}
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
                      Clique no Botão Abrir Conta
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">2</span>
                      Preencha o formulário de registro
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">3</span>
                      Aceite os termos de uso
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">4</span>
                      Clique em "Register"
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">5</span>
                      Faça login usando e-mail e senha
                    </p>
                    <p className="flex items-center text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-3 font-bold">6</span>
                      Acesse o dashboard e configure a API
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
                      href="https://www.vespers.bot/portal/index/invite?invitation_code=mqOHBV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      COMEÇAR AGORA
                    </a>
                  </Button>
                  <p className="text-muted-foreground text-sm mt-4">
                    Pronto! Agora você está registrado e pronto para usar os recursos da Vespers Bot.
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

export default AbrirConta;