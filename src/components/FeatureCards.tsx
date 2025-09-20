import { Button } from "@/components/ui/button";
import { Settings, BarChart3, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeatureCards = () => {
  const features = [
    {
      icon: Settings,
      title: "Vinculação de API",
      description: "Conecte facilmente suas contas das principais exchanges com segurança máxima.",
      action: "Configurar",
      color: "primary",
    },
    {
      icon: BarChart3,
      title: "Históricos",
      description: "Acompanhe performance detalhada, ganhos e análises de todas as operações.",
      action: "Ver Relatórios",
      color: "accent",
    },
    {
      icon: Users,
      title: "Indique e Ganhe",
      description: "Ganhe comissões sobre o gas usado pelos usuários que você indicar.",
      action: "Começar",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Funcionalidades{" "}
            <span className="text-glow">Avançadas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Plataforma completa para automatizar seus investimentos em criptomoedas
            com tecnologia de ponta e segurança institucional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="cyber-card rounded-2xl p-8 group animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-orbitron font-bold">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {index === 0 ? (
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto font-medium text-primary hover:text-primary"
                      asChild
                    >
                      <Link to="/vinculacao-api">
                        {feature.action}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto font-medium text-primary hover:text-primary"
                    >
                      {feature.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};