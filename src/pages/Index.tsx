import HeroSection from "@/components/HeroSection";
import GiftGrid from "@/components/GiftGrid";
import GuestBook from "@/components/GuestBook";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GiftGrid />
      <GuestBook />
      <Footer />
    </main>
  );
};

export default Index;
