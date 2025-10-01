import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const VideoTutorials = () => {
  const tutorials = [
    {
      title: "Registrar Conta na Exchange",
      description: "Passo a passo para criar conta na Binance, OKX e Huobi",
      duration: "1:00",
      videoId: "xn5tg5d9ZJQ",
      category: "Configuração",
    },
    {
      title: "Configurar Chave API",
      description: "Como gerar e configurar suas chaves API com segurança",
      duration: "1:00",
      videoId: "XvUdJcKESfQ",
      category: "Segurança",
    },
    {
      title: "Como Depositar USDT/USDC",
      description: "Aprenda a depositar stablecoins para começar a operar",
      duration: "1:00",
      videoId: "5vmjjhqm_YU",
      category: "Depósito",
    },
    {
      title: "Como Comprar Gas Fee",
      description: "Como adquirir gas para as operações automáticas",
      duration: "1:00",
      videoId: "dCazRjJIfwI",
      category: "Configuração",
    },
    {
      title: "Ativar Bot Automático",
      description: "Configurações finais para ativar a automação",
      duration: "1:00",
      videoId: "NDY0oM6TaOQ",
      category: "Automação",
    },
    {
      title: "Análise de Performance",
      description: "Como interpretar relatórios e otimizar resultados",
      duration: "10:30",
      videoId: "Ud9j-jXzdnU",
      category: "Análise",
    },
  ];

  const categories = ["Todos", "Configuração", "Segurança", "Depósito", "Automação", "Análise"];

  return (
    <section className="py-20 bg-gradient-dark relative">
      <div className="absolute inset-0 neural-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Central de{" "}
            <span className="text-cyber-glow">Educação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aprenda tudo sobre automação de trading com nossos tutoriais
            completos e detalhados.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "hologram" : "neural"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid - Formato Shorts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <div
              key={tutorial.title}
              className="video-card rounded-2xl overflow-hidden group"
            >
              {/* Thumbnail - Formato Vertical (9:16) */}
              <div className="relative bg-gradient-card overflow-hidden" style={{ aspectRatio: '9/16' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${tutorial.videoId}?controls=1&modestbranding=1&rel=0`}
                  title={tutorial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-background/90 text-foreground px-2 py-1 rounded text-sm font-medium">
                  {tutorial.duration}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {tutorial.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-orbitron font-bold text-lg group-hover:text-primary transition-colors">
                  {tutorial.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tutorial.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="w-full group/btn justify-between"
                >
                  Assistir Agora
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hologram" size="lg" asChild>
              <Link to="/tutoriais">
                Ver Todos os Tutoriais
              </Link>
            </Button>
            <Button variant="neural" size="lg" asChild>
              <Link to="/depositar">
                Depositar USDT/USDC
              </Link>
            </Button>
            <Button variant="cyber" size="lg" asChild>
              <Link to="/comprar-gas">
                Comprar Gas Fee
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};