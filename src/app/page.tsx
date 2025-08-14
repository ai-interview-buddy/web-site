import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { CommunitySection } from "@/components/community-section";
import { OpenSourceSection } from "@/components/open-source-section";
import { Footer } from "@/components/footer";
import { PricingBetaSection } from "@/components/pricing-beta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-soft-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CommunitySection />
        <OpenSourceSection />
        <PricingBetaSection />
      </main>
      <Footer />
    </div>
  );
}
