import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import vespersLogo from "@/assets/vespers-logo.webp";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Históricos", href: "/historicos" },
    { name: "Estratégias", href: "/estrategias" },
    { name: "Tutoriais", href: "/tutoriais" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border cyber-grid">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={vespersLogo} alt="Vespers Bot" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary text-glow"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="neural" 
              size="sm"
              asChild
            >
              <a
                href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button variant="hologram" size="sm" asChild>
              <a
                href="https://www.vespers.bot/portal/index/invite?invitation_code=mqOHBV"
                target="_blank"
                rel="noopener noreferrer"
              >
                ABRIR CONTA
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-base font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary text-glow"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="neural" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/5512982519116?text=Olá, Gostaria de saber mais sobre a Vespers Bot."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="hologram" size="sm" className="w-full" asChild>
                  <a
                    href="https://www.vespers.bot/portal/index/invite?invitation_code=mqOHBV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ABRIR CONTA
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};