"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";

export function InvestmentCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Dark bg with realistic image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-hero.png)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,53,36,0.92) 0%, rgba(10,10,10,0.88) 60%, rgba(197,160,89,0.12) 100%)" }} />
      {/* Gold shimmer top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-10 text-center"
      >
        <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-5">The Right Time Is Now</p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.12] mb-6">
          Secure Your Plot Today<br />
          <span className="italic text-[#D4B472] font-light">Before Prices Rise Again</span>
        </h2>
        <p className="text-white/55 font-light text-base max-w-2xl mx-auto leading-relaxed mb-10">
          Land prices in Jaipur's growth corridors are appreciating 18–24% annually. Join 3,500+ families who chose Dhan Dhara for their most important investment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact"
            className="btn-gold inline-flex items-center gap-2.5 px-9 py-4 text-[11px] w-full sm:w-auto justify-center rounded-md">
            Book Free Site Visit <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://wa.me/919599872124?text=Hello%20Dhan%20Dhara%20Developers!%20I%20am%20interested%20in%20knowing%20more%20about%20your%20projects." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] font-bold tracking-[0.2em] uppercase border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all w-full sm:w-auto justify-center rounded-md">
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us Now
          </a>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
    </section>
  );
}
