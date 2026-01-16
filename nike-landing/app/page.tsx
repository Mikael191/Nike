import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import StorySection from "@/components/StorySection";
import TechSection from "@/components/TechSection";
import BottomSection from "@/components/BottomSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-white/30 selection:text-white">
      <HeroSection />
      <ProductShowcase />
      <StorySection />
      <TechSection />
      <BottomSection />
    </main>
  );
}
