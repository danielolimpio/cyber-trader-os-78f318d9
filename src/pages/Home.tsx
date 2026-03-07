import { lazy, Suspense } from "react";
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