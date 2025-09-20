import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const LegalNotices = () => {
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
              Avisos Legais
            </h1>
            <p className="text-xl text-muted-foreground">
              Informações legais importantes sobre riscos e regulamentações
            </p>
          </header>

          <div className="bg-card/50 border border-card-border rounded-2xl p-8 space-y-8">
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <h2 className="text-xl font-orbitron font-bold text-destructive mb-3 flex items-center">
                ⚠️ Aviso de Risco Importante
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A negociação de derivativos de criptomoedas envolve riscos significativos e pode resultar na perda total do capital investido. Este aviso é obrigatório e deve ser lido cuidadosamente antes de utilizar nossos serviços.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                1. Riscos Financeiros
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>A negociação automatizada apresenta riscos específicos:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Volatilidade Extrema:</strong> Criptomoedas podem perder ou ganhar valor rapidamente</li>
                  <li><strong>Alavancagem:</strong> Amplifica tanto ganhos quanto perdas potenciais</li>
                  <li><strong>Riscos Técnicos:</strong> Falhas de sistema podem afetar execução de ordens</li>
                  <li><strong>Risco de Liquidez:</strong> Dificuldade em fechar posições em mercados ilíquidos</li>
                  <li><strong>Risco de Contraparte:</strong> Dependência de exchanges terceiras</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                2. Não Somos uma Exchange
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Vespers Bot é uma plataforma de automação que se conecta a exchanges terceiras. Não custodiamos fundos nem executamos transações diretamente. Todas as operações são realizadas através das APIs das exchanges parceiras, cada uma com seus próprios termos e condições.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                3. Ausência de Garantias
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Nossos serviços são fornecidos sem garantias de:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lucros ou retornos positivos</li>
                  <li>Funcionamento ininterrupto do sistema</li>
                  <li>Precisão de sinais ou análises</li>
                  <li>Execução bem-sucedida de todas as ordens</li>
                  <li>Compatibilidade com todas as exchanges</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                4. Compliance Regulatório
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>É responsabilidade do usuário:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Verificar a legalidade do trading de criptomoedas em sua jurisdição</li>
                  <li>Cumprir obrigações fiscais aplicáveis</li>
                  <li>Reportar ganhos conforme legislação local</li>
                  <li>Seguir regulamentações de prevenção à lavagem de dinheiro</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Em nenhuma circunstância a Vespers Bot será responsável por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços, incluindo mas não limitado a perdas financeiras, perda de dados ou interrupção de negócios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                6. Natureza dos Algoritmos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossos algoritmos são baseados em análise técnica e modelos matemáticos. Desempenhos passados não garantem resultados futuros. Condições de mercado podem mudar rapidamente, tornando estratégias anteriormente lucrativas inadequadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                7. Idade Mínima e Capacidade Legal
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossos serviços são destinados apenas a pessoas maiores de 18 anos com plena capacidade legal para celebrar contratos. Em algumas jurisdições, a idade mínima pode ser superior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                8. Modificações de Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto de nossos serviços a qualquer momento, com ou sem aviso prévio, incluindo algoritmos, funcionalidades e integrações com exchanges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-orbitron font-bold text-primary mb-4">
                9. Jurisdição e Lei Aplicável
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes avisos são regidos pelas leis do Brasil. Disputas serão resolvidas preferencialmente por arbitragem, conforme regulamento da Câmara de Arbitragem competente.
              </p>
            </section>

            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mt-8">
              <h3 className="font-orbitron font-bold text-destructive mb-3">
                Declaração de Reconhecimento
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ao utilizar a plataforma Vespers Bot, você declara ter lido, compreendido e aceito todos os riscos mencionados neste documento. Você confirma que possui conhecimento e experiência suficientes em mercados financeiros para avaliar os méritos e riscos dos investimentos automatizados.
              </p>
            </div>

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

export default LegalNotices;