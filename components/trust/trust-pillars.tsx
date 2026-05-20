"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Building2, Users, Award } from "lucide-react";

export function TrustPillars() {
  return (
    <section className="bg-ivory border-b border-[#E8DDD0] shadow-sm">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x divide-[#E8DDD0]">
          {[
            { icon: ShieldCheck, label: "JDA & RERA Approved", sub: "100% legally verified titles" },
            { icon: Building2,   label: "15+ Projects Delivered", sub: "Across Jaipur corridors" },
            { icon: Users,       label: "3,500+ Plot Owners",    sub: "Trusted since 2008" },
            { icon: Award,       label: "Zero Legal Disputes",   sub: "Clean title guarantee" },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center gap-3.5 px-3 md:px-6 first:pl-0"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-[#F0E9DD] flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-ink leading-snug">{item.label}</p>
                <p className="text-[11px] text-slate mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
