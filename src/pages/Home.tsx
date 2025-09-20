import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCards } from "@/components/FeatureCards";
import { VideoTutorials } from "@/components/VideoTutorials";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <VideoTutorials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;