import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, DollarSign } from "lucide-react";
import { YouTubeLazy } from "@/components/YouTubeLazy";
import result130 from "@/assets/result-130.webp";
import result145 from "@/assets/result-145.webp";
import result157 from "@/assets/result-157.webp";
import result280 from "@/assets/result-280.webp";
import result650 from "@/assets/result-650.webp";

const Historicos = () => {
  const videos = [
    {
      id: "LPwlcCdm-0M",
      title: "Resultados Vespers Bot - Performance Diária",
      description: "Acompanhe os ganhos diários da Vespers Bot em tempo real",
    },
    {
      id: "VMxbvdZS0Gc", 
      title: "Análise de Rentabilidade - Estratégias Automatizadas",
      description: "Demonstração completa dos resultados obtidos com automação",
    },
    {
      id: "IpOqlkOqPZo",
      title: "ROI Comprovado - Cases de Sucesso",
      description: "Casos reais de usuários que multiplicaram seus investimentos",
    },
  ];

  const results = [
    {
      image: result130,
      capital: "$200",
      period: "7 dias",
      profit: "130%",
      description: "Capital inicial de $200 rendeu 130% de lucro em apenas 7 dias utilizando a estratégia Fusion Matrix no mercado futuro."
    },
    {
      image: result145,
      capital: "$200", 
      period: "8 dias",
      profit: "145%",
      description: "Investimento de $200 alcançou 145% de rentabilidade em 8 dias com a estratégia Echo Rebound otimizada."
    },
    {
      image: result157,
      capital: "$100",
      period: "9 dias", 
      profit: "157%",
      description: "Com apenas $100 de capital inicial, o retorno foi de 157% em 9 dias usando Quantum AI no mercado futuro."
    },
    {
      image: result280,
      capital: "$1500",
      period: "27 dias",
      profit: "280%",
      description: "Investimento robusto de $1500 gerou 280% de lucro em 27 dias combinando múltiplas estratégias da Vespers Bot."
    },
    {
      image: result650,
      capital: "$1500",
      period: "36 dias",
      profit: "650%",
      description: "Performance excepcional: $1500 transformados em mais de $9750 em 36 dias, representando 650% de retorno com Gridlock X."
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
                <TrendingUp className="w-4 h-4 mr-2" />
                Resultados Comprovados
              </Badge>
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                Histórico de{" "}
                <span className="text-glow">Performances</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Acompanhe os resultados reais da Vespers Bot através de análises detalhadas, 
                relatórios de performance e cases de sucesso dos nossos usuários.
              </p>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                Demonstrações em{" "}
                <span className="text-glow">Vídeo</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja os resultados da Vespers Bot em ação com demonstrações reais das nossas estratégias automatizadas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={video.id} className="cyber-card group cursor-pointer">
                  <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?controls=1&modestbranding=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-orbitron font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {video.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Carousel */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                Resultados{" "}
                <span className="text-glow">Comprovados</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça os resultados reais obtidos pelos usuários da Vespers Bot em diferentes períodos e estratégias.
              </p>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {results.map((result, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="cyber-card h-full">
                      <div className="p-6">
                        <div className="relative mb-6">
                          <img 
                            src={result.image} 
                            alt={`Resultado ${result.profit} em ${result.period}`}
                            className="w-full rounded-lg shadow-lg"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge variant="destructive" className="bg-green-500/90 text-white border-0">
                              +{result.profit}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <DollarSign className="w-4 h-4 mr-1" />
                              Capital: {result.capital}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-1" />
                              {result.period}
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-2xl font-orbitron font-bold text-green-400 mb-2">
                              {result.profit} de Lucro
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
                Junte-se aos traders que já estão multiplicando seus investimentos com a Vespers Bot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hologram" size="lg" asChild>
                  <a href="/abrir-conta">
                    ABRIR CONTA GRÁTIS
                  </a>
                </Button>
                <Button variant="neural" size="lg" asChild>
                  <a href="/vinculacao-api">
                    CONFIGURAR API
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

export default Historicos;