import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import ResidentialServices from "@/components/ResidentialServices";
import CommercialServices from "@/components/CommercialServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import ManufacturersSection from "@/components/ManufacturersSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ResidentialServices />
      <CommercialServices />
      <GallerySection />
      <TestimonialsSection />
      <ManufacturersSection />
      <QuoteFormSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
