import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Política de Privacidade | Vespers Bot</title>
        <meta name="description" content="Política de privacidade da Vespers Bot. Saiba como coletamos, usamos e protegemos suas informações pessoais." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/privacidade" />
        <meta property="og:title" content="Política de Privacidade | Vespers Bot" />
        <meta property="og:description" content="Política de privacidade da Vespers Bot. Saiba como coletamos, usamos e protegemos suas informações pessoais." />
        <meta property="og:url" content="https://cyber-trader-os.lovable.app/privacidade" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-orbitron font-bold text-glow mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground">
              Como coletamos, usamos e protegemos suas informações
            </p>
          </header>

          <div className="bg-card/50 border border-card-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                1. Informações Coletadas
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Coletamos as seguintes categorias de informações:</p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Informações de Conta:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Endereço de e-mail</li>
                      <li>Nome e sobrenome</li>
                      <li>Informações de autenticação</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Dados de Trading:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Chaves API (criptografadas)</li>
                      <li>Histórico de transações</li>
                      <li>Configurações de estratégias</li>
                      <li>Logs de performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                2. Uso das Informações
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer e manter nossos serviços de trading automatizado</li>
                  <li>Processar e executar ordens de negociação</li>
                  <li>Gerar relatórios de performance e análises</li>
                  <li>Comunicar atualizações importantes do sistema</li>
                  <li>Melhorar nossos algoritmos e serviços</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                3. Proteção de Dados
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Implementamos medidas rigorosas de segurança:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Criptografia AES-256 para dados sensíveis</li>
                  <li>Protocolos SSL/TLS para transmissão de dados</li>
                  <li>Autenticação de dois fatores (2FA)</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Backups seguros e redundantes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                4. Compartilhamento de Informações
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Não vendemos ou alugamos suas informações pessoais. Podemos compartilhar dados apenas em situações específicas:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Com exchanges parceiras para execução de ordens (via API)</li>
                  <li>Com provedores de serviços técnicos sob acordos de confidencialidade</li>
                  <li>Quando exigido por lei ou autoridades regulamentares</li>
                  <li>Para proteger nossos direitos legais e segurança</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                5. Retenção de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Dados de trading são retidos por até 7 anos conforme regulamentações financeiras. Você pode solicitar a exclusão de seus dados a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                6. Seus Direitos
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Você tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados imprecisos</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Revogar consentimentos</li>
                  <li>Portabilidade de dados</li>
                  <li>Apresentar reclamações à autoridade supervisora</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                7. Cookies e Tecnologias Similares
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies essenciais para o funcionamento da plataforma, cookies de performance para melhorar nossos serviços e cookies de preferências para personalizar sua experiência. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                8. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre privacidade, entre em contato conosco através do e-mail: privacy@vespersbot.com ou utilize nossos canais de suporte disponíveis na plataforma.
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

export default PrivacyPolicy;