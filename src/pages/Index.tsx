import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import CommunitySection from "@/components/CommunitySection";
import TokenSpiritSection from "@/components/TokenSpiritSection";
import RamadhanSection from "@/components/RamadhanSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div id="philosophy">
        <PhilosophySection />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      <div id="token">
        <TokenSpiritSection />
      </div>
      <div id="ramadhan">
        <RamadhanSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
