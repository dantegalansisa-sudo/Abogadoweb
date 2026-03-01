import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import AboutSection from "@/components/home/AboutSection";
import LeadLawyerSection from "@/components/home/LeadLawyerSection";
import PracticeAreas from "@/components/home/PracticeAreas";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TeamSection from "@/components/home/TeamSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <LeadLawyerSection />
        <PracticeAreas />
        <WhyChooseUs />
        <TeamSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
