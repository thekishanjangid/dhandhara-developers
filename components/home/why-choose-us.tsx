"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, HomeIcon, AlarmCheck } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-[#F0E9DD]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-3">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-8 leading-tight">
              Your Investment,<br />
              <span className="italic text-[#C5A059] font-light">Protected & Growing</span>
            </h2>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "100% Legal Transparency",
                  desc: "Every plot carries full JDA & RERA approval, clear title deed, and registered registry documents. Zero legal complications."
                },
                {
                  icon: TrendingUp,
                  title: "Consistent Value Appreciation",
                  desc: "Plots in our townships have delivered 15–22% annual appreciation. Strategic corridor selection ensures your investment grows."
                },
                {
                  icon: HomeIcon,
                  title: "Ready Infrastructure",
                  desc: "You receive a fully developed plot with roads, water, electricity, and boundary wall already in place. No waiting, no delays."
                },
                {
                  icon: AlarmCheck,
                  title: "On-Time Possession",
                  desc: "We have never missed a possession date in 18 years. Our track record speaks for itself — 15 delivered projects, zero delays."
                },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="flex gap-5"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm mt-0.5">
                    <item.icon className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-ink mb-1">{item.title}</h4>
                    <p className="text-[13px] text-charcoal font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="img-zoom relative h-[400px] md:h-[540px] overflow-hidden shadow-2xl">
              <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-villa.png)" }} />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 glass-cream shadow-xl p-5 md:p-6 max-w-[220px]">
              <p className="font-serif text-3xl text-[#C5A059] font-medium leading-none">15+</p>
              <p className="text-[11px] font-semibold text-ink mt-2">Successfully Delivered</p>
              <p className="text-[11px] text-slate mt-0.5">Premium plotted townships</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
