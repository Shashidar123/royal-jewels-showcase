import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import GoldPriceSection from "@/components/GoldPriceSection";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <CollectionsSection />
    <GoldPriceSection />
    <FeaturedCarousel />
    <WhyChooseUs />
    <ReviewsSection />
    <LocationSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
