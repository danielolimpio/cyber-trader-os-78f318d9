import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-phone.jpg";
import { YouTubeLazy } from "@/components/YouTubeLazy";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 neural-bg opacity-40" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Automação Inteligente
              </div>
              
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold leading-tight">
                <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
                  Vespers Bot
                </span>{" "}
                — Automação Inteligente para Criptomoedas
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Ganhos automáticos com seu dinheiro seguro na{" "}
                <span className="text-primary font-medium">Binance</span>!
                Algoritmos de IA para maximizar seus resultados no mercado de futuros.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center px-3 py-2 rounded-full bg-card border border-card-border text-sm">
                <Shield className="w-4 h-4 mr-2 text-accent" />
                API Segura
              </div>
              <div className="flex items-center px-3 py-2 rounded-full bg-card border border-card-border text-sm">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Resultados Comprovados
              </div>
              <div className="flex items-center px-3 py-2 rounded-full bg-card border border-card-border text-sm">
                <Wifi className="w-4 h-4 mr-2 text-accent" />
                24/7 Automatizado
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hologram" size="lg" className="group data-flow" asChild>
                <Link to="/abrir-conta" className="flex items-center">
                  <Wifi className="w-5 h-5 mr-2" />
                  ABRIR CONTA
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="neural" size="lg">
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-primary">
                  97%
                </div>
                <div className="text-sm text-muted-foreground">Precisão</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-accent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Operação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-primary">
                  +150%
                </div>
                <div className="text-sm text-muted-foreground">ROI Médio</div>
              </div>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative lg:order-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Video Frame */}
              <div className="relative bg-gradient-card rounded-3xl p-3 border-2 border-card-border backdrop-blur-sm shadow-cyber">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                  <YouTubeLazy
                    videoId="pDSge06WSnE"
                    title="Vespers Bot Demonstration"
                    className="w-full h-full"
                    priority
                  />
                  
                  {/* Screen Border Effect */}
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl pointer-events-none" />
                  <div className="absolute inset-2 border border-accent/20 rounded-xl pointer-events-none" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-float">
                  Live Demo
                </div>
                
                <div className="absolute bottom-6 left-6 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-float" style={{ animationDelay: "2s" }}>
                  IA Ativa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};