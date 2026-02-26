import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResidentialServices from "@/components/ResidentialServices";
import CommercialServices from "@/components/CommercialServices";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ResidentialServices />
      <CommercialServices />
      <TrustSection />
      <Footer />
    </main>
  );
}
