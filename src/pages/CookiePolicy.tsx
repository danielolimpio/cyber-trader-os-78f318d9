import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-orbitron font-bold text-glow mb-4">
              Política de Cookies
            </h1>
            <p className="text-xl text-muted-foreground">
              Como utilizamos cookies e tecnologias similares
            </p>
          </header>

          <div className="bg-card/50 border border-card-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                1. O que são Cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles permitem que o site reconheça seu dispositivo e armazene informações sobre suas preferências ou ações passadas, melhorando sua experiência de navegação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                2. Tipos de Cookies Utilizados
              </h2>
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-lg font-orbitron font-bold text-primary mb-3">
                    Cookies Essenciais
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Necessários para o funcionamento básico da plataforma:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Autenticação e sessão do usuário</li>
                    <li>Preferências de segurança</li>
                    <li>Carrinho de compras e transações</li>
                    <li>Balanceamento de carga do servidor</li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h3 className="text-lg font-orbitron font-bold text-accent mb-3">
                    Cookies de Performance
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Coletam informações sobre como você usa nosso site:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Páginas mais visitadas</li>
                    <li>Tempo de sessão</li>
                    <li>Mensagens de erro</li>
                    <li>Velocidade de carregamento</li>
                  </ul>
                </div>

                <div className="bg-card border border-card-border rounded-xl p-6">
                  <h3 className="text-lg font-orbitron font-bold text-foreground mb-3">
                    Cookies de Funcionalidade
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Melhoram sua experiência personalizando o conteúdo:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Idioma e região preferidos</li>
                    <li>Configurações de tema (claro/escuro)</li>
                    <li>Layouts personalizados</li>
                    <li>Histórico de navegação</li>
                  </ul>
                </div>

                <div className="bg-muted/5 border border-muted/20 rounded-xl p-6">
                  <h3 className="text-lg font-orbitron font-bold text-muted-foreground mb-3">
                    Cookies de Marketing
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Utilizados para publicidade direcionada:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Rastreamento de conversões</li>
                    <li>Remarketing</li>
                    <li>Análise de comportamento</li>
                    <li>Segmentação de audiência</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                3. Cookies de Terceiros
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Utilizamos serviços de terceiros que podem definir seus próprios cookies:</p>
                <div className="bg-card/30 border border-card-border rounded-xl p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                      <p className="text-sm">Análise de tráfego e comportamento</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Hotjar</h4>
                      <p className="text-sm">Gravações de sessão e mapas de calor</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intercom</h4>
                      <p className="text-sm">Chat de suporte ao cliente</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Stripe</h4>
                      <p className="text-sm">Processamento de pagamentos</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                4. Gerenciamento de Cookies
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Você pode controlar o uso de cookies de várias maneiras:</p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h3 className="font-orbitron font-bold text-primary mb-3">
                    Configurações do Navegador
                  </h3>
                  <p className="mb-3">A maioria dos navegadores permite:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Visualizar cookies armazenados</li>
                    <li>Bloquear cookies de terceiros</li>
                    <li>Excluir cookies existentes</li>
                    <li>Receber alertas antes de aceitar cookies</li>
                  </ul>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <h3 className="font-orbitron font-bold text-accent mb-3">
                    Centro de Preferências
                  </h3>
                  <p>
                    Você pode acessar nossas configurações de privacidade na plataforma para gerenciar suas preferências de cookies a qualquer momento.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                5. Duração dos Cookies
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Os cookies têm diferentes períodos de validade:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card/30 border border-card-border rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Cookies de Sessão</h4>
                    <p className="text-sm">Expiram quando você fecha o navegador</p>
                  </div>
                  <div className="bg-card/30 border border-card-border rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Cookies Persistentes</h4>
                    <p className="text-sm">Permanecem por um período específico (até 2 anos)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                6. Impacto da Desativação
              </h2>
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="font-orbitron font-bold text-destructive mb-3">
                  ⚠️ Importante
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desativar cookies essenciais pode prejudicar o funcionamento da plataforma de trading automatizado. Algumas funcionalidades podem não funcionar corretamente, incluindo login, execução de ordens e salvamento de configurações.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                7. Tecnologias Similares
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Além de cookies, utilizamos outras tecnologias:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Local Storage:</strong> Armazenamento local no navegador</li>
                  <li><strong>Session Storage:</strong> Dados temporários da sessão</li>
                  <li><strong>Web Beacons:</strong> Pequenas imagens para rastreamento</li>
                  <li><strong>Fingerprinting:</strong> Identificação baseada em características do dispositivo</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                8. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre nossa política de cookies, entre em contato através do e-mail: privacy@vespersbot.com ou utilize nosso chat de suporte na plataforma.
              </p>
            </section>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-8">
              <p className="text-sm text-center text-muted-foreground">
                Última atualização: Janeiro de 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;