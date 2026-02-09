import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import CommunitySection from "@/components/CommunitySection";
import TokenSpiritSection from "@/components/TokenSpiritSection";
import RamadhanSection from "@/components/RamadhanSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PhilosophySection />
      <CommunitySection />
      <TokenSpiritSection />
      <RamadhanSection />
      <Footer />
    </div>
  );
};

export default Index;
