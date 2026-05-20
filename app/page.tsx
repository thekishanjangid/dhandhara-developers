"use client";

import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

// Layout
import { Preloader } from "@/components/layout/preloader";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

// Hero
import { HeroSection } from "@/components/hero/hero-section";

// Home
import { AboutPreview } from "@/components/home/about-preview";
import { LifestyleAmenities } from "@/components/home/lifestyle-amenities";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { InvestmentCTA } from "@/components/home/investment-cta";
import { ContactAdvisory } from "@/components/home/contact-advisory";

// Projects
import { FeaturedTownships } from "@/components/projects/featured-townships";

// Trust
import { TrustPillars } from "@/components/trust/trust-pillars";
import { StatsCounter } from "@/components/trust/stats-counter";
import { Infrastructure } from "@/components/trust/infrastructure";
import { Testimonials } from "@/components/trust/testimonials";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <main ref={containerRef} className="relative w-full bg-ivory text-ink overflow-x-hidden font-sans">
        <Navbar />
        <HeroSection />
        <TrustPillars />
        <AboutPreview />
        <StatsCounter />
        <FeaturedTownships />
        <LifestyleAmenities />
        <Infrastructure />
        <WhyChooseUs />
        <Testimonials />
        <InvestmentCTA />
        <ContactAdvisory />
        <Footer />
        <FloatingActions />
      </main>
    </>
  );
}
