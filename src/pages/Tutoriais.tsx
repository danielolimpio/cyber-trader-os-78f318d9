import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen } from "lucide-react";
import { YouTubeLazy } from "@/components/YouTubeLazy";

const Tutoriais = () => {
  const tutorials = [
    {
      id: "LtTgVqztgPs",
      title: "Como Fazer Hedge Trading",
      description: "Aprenda a técnica de hedge trading para proteger seus investimentos e minimizar riscos no mercado de criptomoedas.",
      duration: "1:00",
      category: "Estratégias Avançadas",
      level: "Intermediário"
    },
    {
      id: "9dOHfdr7iuw",
      title: "Como Registrar e Verificar uma Conta OKX",
      description: "Passo a passo completo para criar e verificar sua conta na exchange OKX de forma segura e eficiente.",
      duration: "1:00",
      category: "Configuração",
      level: "Iniciante"
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Tutoriais de Trading | Vespers Bot</title>
        <meta name="description" content="Aprenda a usar a Vespers Bot com tutoriais completos. Guias de configuração, estratégias e operações automatizadas." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/tutoriais" />
      </Helmet>
      <Header />
      <FloatingWhatsApp />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative neural-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Biblioteca de Conhecimento
              </Badge>
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                Tutoriais{" "}
                <span className="text-glow">Completos</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Aprimore suas habilidades com nossos tutoriais especializados em trading automatizado, 
                estratégias avançadas e configuração de plataformas.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tutorials.map((tutorial, index) => (
                <Card key={tutorial.id} className="cyber-card group">
                  <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                    <YouTubeLazy
                      videoId={tutorial.id}
                      title={tutorial.title}
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {tutorial.category}
                      </Badge>
                      <Badge 
                        variant={tutorial.level === "Iniciante" ? "default" : "destructive"} 
                        className="text-xs"
                      >
                        {tutorial.level}
                      </Badge>
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-muted-foreground pt-2">
                      <Clock className="w-4 h-4 mr-2" />
                      {tutorial.duration}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* More Coming Soon */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                Mais Tutoriais{" "}
                <span className="text-glow">Em Breve</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nossa biblioteca de tutoriais está sempre crescendo. Novos conteúdos são adicionados regularmente 
                para manter você atualizado com as melhores práticas do mercado.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-12">
                <div className="p-6 rounded-lg border border-border/50">
                  <h4 className="font-orbitron font-bold mb-2">Análise Técnica</h4>
                  <p className="text-sm text-muted-foreground">Indicadores e padrões para melhor entrada</p>
                </div>
                <div className="p-6 rounded-lg border border-border/50">
                  <h4 className="font-orbitron font-bold mb-2">Gestão de Risco</h4>
                  <p className="text-sm text-muted-foreground">Estratégias para proteger seu capital</p>
                </div>
                <div className="p-6 rounded-lg border border-border/50">
                  <h4 className="font-orbitron font-bold mb-2">Configurações Avançadas</h4>
                  <p className="text-sm text-muted-foreground">Otimizações para traders experientes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tutoriais;