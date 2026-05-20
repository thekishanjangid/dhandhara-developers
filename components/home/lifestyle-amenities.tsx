"use client";

import { motion } from "framer-motion";

export function LifestyleAmenities() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-3">Community Life</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink">
              Where Families<br />
              <span className="italic text-[#C5A059] font-light">Flourish</span>
            </h2>
          </div>
          <p className="text-charcoal font-light max-w-sm leading-relaxed">
            More than just land, we build communities with wide roads, lush parks, and secure environments where your family can grow safely.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {/* Top row — 2 images */}
          <div className="col-span-12 md:col-span-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="img-zoom relative h-[250px] md:h-[400px] overflow-hidden"
            >
              <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-family.png)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl mb-1">Secure Environment</p>
                <p className="text-[11px] font-light tracking-wide">24/7 Gated Security</p>
              </div>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="img-zoom relative h-[250px] md:h-[400px] overflow-hidden"
            >
              <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-gate.png)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl mb-1">Grand Entrances</p>
                <p className="text-[11px] font-light tracking-wide">Premium Township Feel</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom row — 3 images */}
          {[
            { img: "/r-plots.png", label: "Premium Plot Views" },
            { img: "/r-road.png",  label: "Wide Internal Roads" },
            { img: "/r-hero.png",  label: "Bird's Eye Planning" },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="col-span-12 sm:col-span-6 md:col-span-4 img-zoom relative h-[200px] overflow-hidden"
            >
              <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-serif text-base">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
