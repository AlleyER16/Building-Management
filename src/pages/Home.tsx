import DifferencesSection from "../ui/components/DifferencesSection";
import FeaturesSection from "../ui/components/FeaturesSection";
import Footer from "../ui/components/Footer";
import Header from "../ui/components/Header";
import Hero from "../ui/components/Hero";
import IssuseSection from "../ui/components/IssueSection";
import MemberSection from "../ui/components/MemberSection";
import OverlookedSection from "../ui/components/OverlookedSection";
import TestimonialsSection from "../ui/components/TestimonialsSection";
import WhoWeAreSection from "../ui/components/WhoWeAreSection";
import WhySection from "../ui/components/WhySection";

export default function Home() {
  return (
    <>
      <section className="header-hero">
        <Header />
        <Hero />
      </section>
      <WhySection />
      <IssuseSection />
      <WhoWeAreSection />
      <DifferencesSection />
      <FeaturesSection />
      <MemberSection />
      <TestimonialsSection />
      <OverlookedSection />
      <Footer />
    </>
  );
}
