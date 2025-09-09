import HeroSection from "./_components/hero-section";
import ProblemStatementSection from "./_components/problem-statement-section";
import FeaturesSection from "./_components/features-section";
import PricingPlanSection from "./_components/price-plan-section";
import ChooseUsSection from "./_components/choose-us-section";
import ImpactSection from "./_components/impact-section";
import TestimonialSection from "./_components/testimonial-section";
import FinalCTASection from "./_components/final-cta-section";
import FooterSection from "./_components/footer-section";
import ContactUs from "./_components/contact-section";
import Navigation from "./_components/header-section";


const VaccinationLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#02343B] text-[#F8F8FF]">
      <Navigation />
      <HeroSection />
      <ProblemStatementSection />
      <FeaturesSection />
      <PricingPlanSection />
      <ChooseUsSection />
      <ImpactSection />
      <TestimonialSection />
      <FinalCTASection />
      <ContactUs />
      <FooterSection />
    </div>
  );
};

export default VaccinationLandingPage;
