import { Navbar } from "@/components/Navbar";
import { HeroKolly } from "@/components/HeroKolly";
import { WhyUseUnivyrse } from "@/components/WhyUseUnivyrse";
import { HowItWorks } from "@/components/HowItWorks";
import { RegionModes } from "@/components/RegionModes";
import { DemoStrip } from "@/components/DemoStrip";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#000]">
      <Navbar />

      <main>
        <HeroKolly />
        <WhyUseUnivyrse />
        <HowItWorks />
        <RegionModes />
        <DemoStrip />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
