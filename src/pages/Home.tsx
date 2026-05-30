import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCards } from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const VideoTutorials = lazy(() => import("@/components/VideoTutorials").then(m => ({ default: m.VideoTutorials })));
const WelcomePopup = lazy(() => import("@/components/WelcomePopup").then(m => ({ default: m.WelcomePopup })));

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Vespers Bot - Automação Inteligente para Futuros de Criptomoedas</title>
        <meta name="description" content="Ganhos automáticos com seu dinheiro seguro na Binance! Automação inteligente para trading de futuros com IA avançada." />
        <link rel="canonical" href="https://cyber-trader-os.lovable.app/" />
        <meta property="og:title" content="Vespers Bot - Automação Inteligente para Futuros de Criptomoedas" />
        <meta property="og:description" content="Ganhos automáticos com seu dinheiro seguro na Binance! Automação inteligente para trading de futuros com IA avançada." />
        <meta property="og:url" content="https://cyber-trader-os.lovable.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <FloatingWhatsApp />
      <Suspense fallback={null}>
        <WelcomePopup />
      </Suspense>
      <main>
        <HeroSection />
        <FeatureCards />
        <Suspense fallback={<div className="py-20" />}>
          <VideoTutorials />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Home;