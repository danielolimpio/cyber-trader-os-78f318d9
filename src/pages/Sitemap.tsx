import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Map, ExternalLink } from "lucide-react";

const Sitemap = () => {
  const { t } = useTranslation();

  const siteLinks = [
    {
      category: t("footer.platform"),
      links: [
        { name: t("nav.home"), href: "/", description: "Página inicial do Vespers Bot" },
        { name: t("nav.about"), href: "/sobre", description: "Sobre a Vespers Bot" },
        { name: t("nav.history"), href: "/historicos", description: "Histórico de operações" },
        { name: t("nav.strategies"), href: "/estrategias", description: "Estratégias de trading" },
        { name: t("nav.tutorials"), href: "/tutoriais", description: "Tutoriais e guias" },
        { name: t("nav.contact"), href: "/contato", description: "Entre em contato" },
      ],
    },
    {
      category: t("footer.support"),
      links: [
        { name: t("footer.helpCenter"), href: "/central-ajuda", description: "Central de ajuda" },
        { name: t("footer.documentation"), href: "/documentacao", description: "Documentação técnica" },
        { name: t("footer.systemStatus"), href: "/status", description: "Status do sistema" },
      ],
    },
    {
      category: "Configuração",
      links: [
        { name: "Vinculação de API", href: "/vinculacao-api", description: "Como vincular sua API" },
        { name: "Abrir Conta", href: "/abrir-conta", description: "Como abrir uma conta" },
        { name: "Depositar", href: "/depositar", description: "Como fazer depósitos" },
        { name: "Comprar Gas", href: "/comprar-gas", description: "Como comprar gas" },
        { name: "Chave API OKX", href: "/chave-api-okx", description: "Configurar chave API OKX" },
        { name: "Executar Passo a Passo", href: "/executar-passo", description: "Guia passo a passo" },
      ],
    },
    {
      category: t("footer.legal"),
      links: [
        { name: t("footer.terms"), href: "/termos", description: "Termos de serviço" },
        { name: t("footer.privacy"), href: "/privacidade", description: "Política de privacidade" },
        { name: t("footer.legalNotices"), href: "/avisos", description: "Avisos legais" },
        { name: t("footer.cookies"), href: "/cookies", description: "Política de cookies" },
        { name: "Sitemap", href: "/sitemap", description: "Mapa do site" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | Vespers Bot</title>
        <meta name="description" content="Navegue por todas as páginas do Vespers Bot. Mapa completo do site com links para conteúdo, suporte e legal." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/sitemap" />
        <meta property="og:title" content="Sitemap | Vespers Bot" />
        <meta property="og:description" content="Navegue por todas as páginas do Vespers Bot. Mapa completo do site com links para conteúdo, suporte e legal." />
        <meta property="og:url" content="https://cyber-trader-os.lovable.app/sitemap" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
              <Map className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Navegue por todas as páginas do Vespers Bot
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {siteLinks.map((section) => (
              <div key={section.category} className="bg-card/50 border border-card-border rounded-2xl p-6">
                <h2 className="font-orbitron font-bold text-lg text-primary mb-4">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="group flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <span className="block font-medium">{link.name}</span>
                          <span className="text-sm opacity-70">{link.description}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* XML Sitemap Link */}
          <div className="text-center">
            <div className="bg-card/50 border border-card-border rounded-2xl p-8 inline-block">
              <h3 className="font-orbitron font-bold text-lg mb-4">Sitemap XML</h3>
              <p className="text-muted-foreground mb-4">
                Para mecanismos de busca e crawlers
              </p>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                /sitemap.xml
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Sitemap;
