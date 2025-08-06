import HeroSection from "./_components/HeroSection";
import HomeAbout from "./_components/HomeAbout";
import OurPartners from "./_components/OurPartners";
import ServicesSection from "./_components/ServicesSection";
import WhyUsSection from "./_components/WhyUsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurPartners />
      <HomeAbout />
      <ServicesSection />
      <WhyUsSection />
    </main>
  );
}
