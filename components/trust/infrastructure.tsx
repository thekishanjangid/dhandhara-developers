"use client";

import { motion } from "framer-motion";
import { amenities } from "@/lib/data";

export function Infrastructure() {
  return (
    <section id="amenities" className="py-20 md:py-32 bg-ivory border-t border-[#E8DDD0]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-3">Built to Last</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-5">
            World-Class Infrastructure
          </h2>
          <p className="text-charcoal font-light text-base max-w-xl mx-auto leading-relaxed">
            Before you receive possession, we ensure 100% physical infrastructure is complete — so your investment is secure from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {amenities.map((a, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col items-center text-center p-6 md:p-7 bg-white rounded-md border border-[#F0E9DD] hover:border-[#C5A059]/40 hover:shadow-lg transition-all duration-400 cursor-default card-lift"
            >
              <div className="w-14 h-14 rounded-full bg-[#F8F4ED] flex items-center justify-center mb-5 group-hover:bg-[#C5A059]/10 transition-colors duration-400">
                <a.icon className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h4 className="text-[11px] font-bold tracking-wide uppercase text-ink mb-2">{a.title}</h4>
              <p className="text-[11px] text-slate font-light leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Infrastructure image strip */}
        <div className="mt-14 grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
          {["/r-road.png", "/r-plots.png", "/r-gate.png", "/r-park.png"].map((img, i) => (
            <div key={i} className="img-zoom relative h-[140px] md:h-[180px] overflow-hidden">
              <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
