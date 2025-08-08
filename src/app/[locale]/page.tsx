import CallToAction from "@/components/CallToAction";
import HeroSection from "./_components/HeroSection";
import HomeAbout from "./_components/HomeAbout";
import OurPartners from "./_components/OurPartners";
import TestimonialsSlider from "./_components/TestimonialsSlider";
import WhyUsSection from "./_components/WhyUsSection";
import FAQSection from "./_components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurPartners />
      <HomeAbout />
      {/* <ServicesSection /> */}
      <WhyUsSection />
      <TestimonialsSlider />
      {/* <ProjectsPreviewSection /> */}
      <FAQSection />
      <CallToAction />
    </main>
  );
}
