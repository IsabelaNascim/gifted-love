import HeroSection from "@/components/HeroSection";
import GiftGrid from "@/components/GiftGrid";
import MessageCard from "@/components/MessageCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GiftGrid />
      <MessageCard />
      <Footer />
    </main>
  );
};

export default Index;
