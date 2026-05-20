"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-[#F0E9DD]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4 mx-auto">
                <s.icon className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="font-serif text-4xl md:text-5xl text-ink font-medium leading-none">
                <AnimatedCounter to={s.number} suffix={s.suffix} />
              </div>
              <p className="text-[12px] text-charcoal font-medium mt-2 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
