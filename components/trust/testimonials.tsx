"use client";

import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-[#E8DDD0]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-3">Client Stories</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink">
            Trusted by Thousands<br />
            <span className="italic text-[#C5A059] font-light">Across Jaipur</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#F0E9DD] rounded-md p-7 md:p-8 flex flex-col gap-5 hover:border-[#C5A059]/30 hover:shadow-lg transition-all duration-400"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              {/* Quote mark */}
              <div className="font-serif text-5xl text-[#C5A059]/20 leading-none -mb-2">&ldquo;</div>
              <p className="text-charcoal text-[14px] font-light leading-relaxed italic flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#F0E9DD]">
                <div className="w-10 h-10 rounded-full bg-[#F0E9DD] flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">{t.name}</p>
                  <p className="text-[10px] text-[#C5A059] tracking-widest uppercase mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
