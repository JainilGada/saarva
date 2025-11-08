import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import MeetEffi from "@/components/MeetEffi";
import ProductGrid from "@/components/ProductGrid";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MissionVision />
      <MeetEffi />
      <ProductGrid />
      <WaitlistForm />
      <Footer />
    </main>
  );
}

