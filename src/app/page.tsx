import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MaterialsSection } from "@/components/sections/materials-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { InvestmentsSection } from "@/components/sections/investments-section";
import { ForArchitectsSection } from "@/components/sections/for-architects-section";

import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

// Plain document flow, smoothed by Lenis (see smooth-scroll-provider.tsx).
// Each section animates itself in via Reveal/RevealGroup (components/reveal.tsx)
// as it scrolls into view — no pinning or stacking.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          <MaterialsSection />
        </div>
        <WhyChooseSection />
        <div id="investments">
          <InvestmentsSection />
        </div>
        <div id="contact">
          <ForArchitectsSection />
        </div>
        {/* <NewsletterSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
