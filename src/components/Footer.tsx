import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Youtube, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import vespersLogo from "@/assets/vespers-logo.webp";

export const Footer = () => {
  const footerSections = [
    {
      title: "Plataforma",
      links: [
        { name: "Início", href: "/" },
        { name: "Históricos", href: "/historicos" },
        { name: "Estratégias", href: "/estrategias" },
        { name: "Tutoriais", href: "/tutoriais" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "/ajuda" },
        { name: "Documentação", href: "/docs" },
        { name: "Status do Sistema", href: "/status" },
        { name: "Contato", href: "/contato" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de Uso", href: "/termos" },
        { name: "Política de Privacidade", href: "/privacidade" },
        { name: "Avisos Legais", href: "/avisos" },
        { name: "Cookies", href: "/cookies" },
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
              <img src={vespersLogo} alt="Vespers Bot" className="w-10 h-10" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Automatização inteligente para o mercado de futuros de criptomoedas.
              Transforme sua estratégia com IA avançada.
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
                Precisa de Ajuda?
              </h3>
              <p className="text-muted-foreground">
                Nossa equipe está sempre pronta para ajudar
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
                  WhatsApp
                </a>
              </Button>
              <Button variant="hologram" asChild>
                <a
                  href="mailto:contato@vespersbot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Suporte
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="py-8 border-t border-border">
          <div className="bg-card/50 border border-card-border rounded-2xl p-6">
            <h4 className="font-orbitron font-bold text-primary mb-3">
              ⚠️ Aviso Legal
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Os investimentos em ativos digitais envolvem riscos significativos, incluindo perda total do capital. 
              As estratégias automatizadas não garantem ganhos. O uso de bots é responsabilidade exclusiva do usuário. 
              Recomendamos análise técnica e consultoria financeira qualificada antes de operar. 
              Este site não constitui aconselhamento financeiro.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Vespers Bot | Todos os direitos reservados | Desenvolvido por{" "}
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
              <span>Versão 2.1.0</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Sistema Online
              </span>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 hover:scale-105 animate-pulse"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};