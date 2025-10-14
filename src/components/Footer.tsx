import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Youtube, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import vespersLogo from "@/assets/vespers-logo.webp";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  const footerSections = [
    {
      title: t("footer.platform"),
      links: [
        { name: t("nav.home"), href: "/" },
        { name: t("nav.history"), href: "/historicos" },
        { name: t("nav.strategies"), href: "/estrategias" },
        { name: t("nav.tutorials"), href: "/tutoriais" },
        { name: t("nav.about"), href: "/sobre" },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { name: t("footer.helpCenter"), href: "/central-ajuda" },
        { name: t("footer.documentation"), href: "/documentacao" },
        { name: t("footer.systemStatus"), href: "/status" },
        { name: t("nav.contact"), href: "/contato" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { name: t("footer.terms"), href: "/termos" },
        { name: t("footer.privacy"), href: "/privacidade" },
        { name: t("footer.legalNotices"), href: "/avisos" },
        { name: t("footer.cookies"), href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Youtube, href: "#", name: "YouTube" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: MessageSquare, href: "#", name: "Discord" },
  ];

  return (
    <footer className="relative bg-gradient-dark border-t border-border">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={vespersLogo} alt="Vespers Bot" className="h-10 w-auto" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="neural"
                    size="icon"
                    className="hover:text-primary"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="font-orbitron font-bold text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-orbitron font-bold text-lg mb-2">
                {t("footer.needHelp")}
              </h3>
              <p className="text-muted-foreground">
                {t("footer.teamReady")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="neural" className="group" asChild>
                <a
                  href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {t("footer.whatsapp")}
                </a>
              </Button>
              <Button variant="hologram" asChild>
                <a
                  href="mailto:contato@vespersbot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t("footer.emailSupport")}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="py-8 border-t border-border">
          <div className="bg-card/50 border border-card-border rounded-2xl p-6">
            <h4 className="font-orbitron font-bold text-primary mb-3">
              ⚠️ {t("footer.legalWarning")}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.disclaimer")}
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Vespers Bot | {t("footer.rights")} | {t("footer.developedBy")}{" "}
              <a 
                href="https://danielolimpio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                DanielOlimpio
              </a>
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>{t("footer.version")} 2.1.0</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                {t("footer.systemOnline")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};