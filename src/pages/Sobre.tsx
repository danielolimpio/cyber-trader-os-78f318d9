import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Cpu, HeadphonesIcon, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Sobre = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Shield,
      title: t("about.reason1"),
      description: t("about.reason1Text"),
    },
    {
      icon: Cpu,
      title: t("about.reason2"),
      description: t("about.reason2Text"),
    },
    {
      icon: HeadphonesIcon,
      title: t("about.reason3"),
      description: t("about.reason3Text"),
    },
    {
      icon: TrendingUp,
      title: t("about.reason4"),
      description: t("about.reason4Text"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-dark overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-glow">
                {t("about.title")}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="cyber-card p-8 md:p-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-primary">
                  {t("about.whoWeAre")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.whoWeAreText")}
                </p>
              </div>

              <div className="cyber-card p-8 md:p-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-primary">
                  {t("about.ourMission")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.ourMissionText")}
                </p>
              </div>

              <div className="cyber-card p-8 md:p-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-primary">
                  {t("about.technology")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.technologyText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-center text-glow">
                {t("about.whyChoose")}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="cyber-card p-8 space-y-4 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8 md:p-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-primary">
                  {t("about.commitment")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.commitmentText")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
