"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left image stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main image */}
            <div className="img-zoom relative h-[420px] md:h-[520px] overflow-hidden shadow-2xl">
              <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-road.png)" }} />
            </div>
            {/* Floating inset image */}
            <div className="img-zoom absolute -bottom-8 -right-4 md:-right-10 w-[45%] h-[200px] md:h-[240px] overflow-hidden shadow-2xl border-4 border-ivory">
              <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-park.png)" }} />
            </div>
            {/* Gold badge */}
            <div className="absolute -top-4 -left-4 md:-left-8 bg-[#C5A059] text-[#1A1A1A] px-5 py-3 shadow-lg">
              <p className="font-serif text-2xl font-medium leading-none">18</p>
              <p className="text-[9px] tracking-[0.25em] uppercase font-bold mt-0.5">Years</p>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-4">About Dhan Dhara</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-6 leading-tight">
              Jaipur's Most Trusted<br />
              <span className="italic text-[#C5A059] font-light">Land Developer</span>
            </h2>
            <div className="w-10 h-0.5 bg-[#C5A059] mb-7" />
            <p className="text-charcoal text-base font-light leading-relaxed mb-5">
              Our identity is rooted in our name. <strong className="text-ink font-semibold">Dhan</strong> signifies Prosperity, and <strong className="text-ink font-semibold">Dhara</strong> means the Earth. Since 2008, we have been meticulously developing plotted townships that give Jaipur families a secure, investable future.
            </p>
            <p className="text-charcoal text-base font-light leading-relaxed mb-9">
              Every plot we sell comes with 100% JDA & RERA approval, clear title documentation, and fully developed infrastructure — roads, electricity, water, and walls — before we hand over possession.
            </p>

            <p className="font-serif text-xl text-[#C5A059] italic mb-9">
              &quot;जहाँ विश्वास है, वहाँ विकास है...&quot;
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Legal Clarity", desc: "100% clean & approved titles" },
                { label: "Real Infrastructure", desc: "Fully ready before possession" },
                { label: "Prime Locations", desc: "High-growth Jaipur corridors" },
                { label: "No Hidden Costs", desc: "Transparent pricing always" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-ink">{item.label}</p>
                    <p className="text-[11px] text-slate mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact"
              className="btn-gold inline-flex items-center gap-2.5 px-8 py-3.5 text-[11px]">
              Schedule a Free Consultation <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
