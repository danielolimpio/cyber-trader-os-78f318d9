import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Activity, Server, Database, Cloud, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const SystemStatus = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const systemComponents = [
    {
      name: t("status.tradingBot"),
      status: "operational",
      uptime: "99.98%",
      icon: Zap,
      lastUpdate: t("status.fewSecondsAgo")
    },
    {
      name: t("status.apiConnections"),
      status: "operational",
      uptime: "99.95%",
      icon: Server,
      lastUpdate: t("status.fewSecondsAgo")
    },
    {
      name: t("status.database"),
      status: "operational",
      uptime: "99.99%",
      icon: Database,
      lastUpdate: t("status.fewSecondsAgo")
    },
    {
      name: t("status.cloudInfrastructure"),
      status: "operational",
      uptime: "100%",
      icon: Cloud,
      lastUpdate: t("status.fewSecondsAgo")
    },
  ];

  const exchanges = [
    { name: "Binance", status: "operational", latency: "12ms" },
    { name: "OKX", status: "operational", latency: "15ms" },
    { name: "Huobi", status: "operational", latency: "18ms" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Status do Sistema | Vespers Bot</title>
        <meta name="description" content="Monitore o status em tempo real dos sistemas da Vespers Bot e das conexões com exchanges Binance, OKX e Huobi." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/status" />
      </Helmet>
      <Header />
      <FloatingWhatsApp />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Activity className="w-4 h-4 mr-2" />
                {t("status.realTime")}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("status.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("status.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-green-500/20 bg-green-500/5">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-orbitron font-bold text-green-500 mb-1">
                        {t("status.allSystemsOperational")}
                      </h2>
                      <p className="text-muted-foreground">
                        {t("status.allComponentsRunning")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* System Components */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{t("status.systemComponents")}</h2>
              
              <div className="space-y-4">
                {systemComponents.map((component, index) => {
                  const Icon = component.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{component.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {t("status.lastUpdate")}: {component.lastUpdate}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                              {t("status.operational")}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                              {t("status.uptime")}: {component.uptime}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Exchange Status */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{t("status.exchangeConnections")}</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {exchanges.map((exchange, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-center">{exchange.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-4">
                        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                          {t("status.connected")}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>{t("status.latency")}: <span className="font-semibold text-primary">{exchange.latency}</span></p>
                        <p className="mt-1">{t("status.uptime")}: <span className="font-semibold">99.99%</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{t("status.performanceMetrics")}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("status.lastIncidents")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {t("status.noIncidents")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t("status.averageResponseTime")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="text-4xl font-bold text-primary mb-2">89ms</div>
                      <p className="text-muted-foreground">
                        {t("status.last24Hours")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Update Schedule */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{t("status.scheduledMaintenance")}</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground">
                    {t("status.noScheduledMaintenance")}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {t("status.maintenanceNotification")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SystemStatus;
