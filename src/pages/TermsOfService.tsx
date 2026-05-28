import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Termos de Uso | Vespers Bot</title>
        <meta name="description" content="Termos de uso da plataforma Vespers Bot. Condições gerais para utilização dos serviços de trading automatizado." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/termos" />
      </Helmet>
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-orbitron font-bold text-glow mb-4">
              Termos de Uso
            </h1>
            <p className="text-xl text-muted-foreground">
              Condições gerais de uso da plataforma Vespers Bot
            </p>
          </header>

          <div className="bg-card/50 border border-card-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar a plataforma Vespers Bot, você concorda em cumprir e estar vinculado aos presentes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                2. Descrição do Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Vespers Bot é uma plataforma de automação para negociação de derivativos de criptomoedas que oferece:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Algoritmos de trading automatizado</li>
                <li>Integração com exchanges de criptomoedas</li>
                <li>Análise técnica e sinais de mercado</li>
                <li>Gerenciamento de risco automatizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                3. Riscos Financeiros
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A negociação de derivativos de criptomoedas envolve riscos substanciais de perda. Você reconhece que pode perder todo o capital investido. As performances passadas não garantem resultados futuros. Você deve considerar cuidadosamente se a negociação é adequada para sua situação financeira.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                4. Responsabilidades do Usuário
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Você se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Manter a confidencialidade de suas credenciais</li>
                  <li>Usar o serviço apenas para fins legais</li>
                  <li>Não reproduzir ou distribuir nossos algoritmos</li>
                  <li>Configurar adequadamente os parâmetros de risco</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Vespers Bot não se responsabiliza por perdas financeiras decorrentes do uso da plataforma. Nossos serviços são fornecidos "como estão" sem garantias de lucro. Não somos responsáveis por falhas técnicas, interrupções de conectividade ou decisões de trading automatizadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                6. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos os algoritmos, códigos, designs e conteúdos da plataforma são propriedade exclusiva da Vespers Bot. É proibida a reprodução, distribuição ou engenharia reversa sem autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                7. Modificações dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado da plataforma constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                8. Lei Aplicável
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida nos tribunais competentes do país.
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

export default TermsOfService;