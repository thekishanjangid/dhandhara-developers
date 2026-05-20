"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export function FeaturedTownships() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-3">Our Portfolio</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              Premium Townships<br />
              <span className="italic text-[#C5A059] font-light">Across Jaipur</span>
            </h2>
          </motion.div>
          <a href="#contact"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059] border-b border-[#C5A059]/40 pb-1 hover:border-[#C5A059] transition-colors">
            Download Brochure <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.7 }}
              className="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 border border-[#F0E9DD]"
            >
              {/* Image */}
              <div className="img-zoom relative h-[260px] md:h-[300px] overflow-hidden">
                <div className="bg-img absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase bg-[#C5A059] text-[#1A1A1A]">
                  {p.badge}
                </div>
                {/* Status */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className={`w-1.5 h-1.5 rounded-full ${p.statusColor}`} />
                  <span className="text-[10px] font-semibold text-ink tracking-wide">{p.status}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 md:p-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-semibold mb-2">{p.loc}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-1 group-hover:text-[#C5A059] transition-colors duration-400">
                  {p.name}
                </h3>
                <p className="text-[13px] text-slate font-light mb-5">{p.type}</p>

                <div className="flex items-center gap-6 mb-6">
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-slate mb-1">Total Plots</p>
                    <p className="text-sm font-semibold text-ink">{p.plots}</p>
                  </div>
                  <div className="w-px h-8 bg-[#E8DDD0]" />
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-slate mb-1">Plot Size</p>
                    <p className="text-sm font-semibold text-ink">{p.size}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 text-[10px] font-bold tracking-[0.2em] uppercase btn-gold">
                    View Details
                  </button>
                  <button className="px-5 py-3 border border-[#E8DDD0] text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal hover:border-[#C5A059] hover:text-[#C5A059] transition-colors rounded-md">
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
