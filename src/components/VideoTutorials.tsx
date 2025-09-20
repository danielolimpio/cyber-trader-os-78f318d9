import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export const VideoTutorials = () => {
  const tutorials = [
    {
      title: "Registrar Conta na Exchange",
      description: "Passo a passo para criar conta na Binance, OKX e Huobi",
      duration: "5:30",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Configuração",
    },
    {
      title: "Configurar Chave API",
      description: "Como gerar e configurar suas chaves API com segurança",
      duration: "8:15",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Segurança",
    },
    {
      title: "Depositar USDT/USDC",
      description: "Aprenda a depositar stablecoins para começar a operar",
      duration: "4:45",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Depósito",
    },
    {
      title: "Comprar Gas Fee",
      description: "Como adquirir gas para as operações automáticas",
      duration: "6:20",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Configuração",
    },
    {
      title: "Ativar Bot Automático",
      description: "Configurações finais para ativar a automação",
      duration: "7:10",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      category: "Automação",
    },
    {
      title: "Análise de Performance",
      description: "Como interpretar relatórios e otimizar resultados",
      duration: "9:45",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
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

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={tutorial.title}
              className="video-card rounded-2xl overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-card">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary opacity-50" />
                </div>
                
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

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hologram" size="lg" className="data-flow">
            Ver Todos os Tutoriais
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};