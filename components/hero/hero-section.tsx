"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { heroSlides } from "@/lib/data";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, -100]);

  /* Auto-rotate hero */
  useEffect(() => {
    const id = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActiveSlide(p => (p + 1) % heroSlides.length);
        setTransitioning(false);
      }, 600);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const goToSlide = useCallback((i: number) => {
    if (i === activeSlide) return;
    setTransitioning(true);
    setTimeout(() => { setActiveSlide(i); setTransitioning(false); }, 500);
  }, [activeSlide]);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative w-full h-screen min-h-[620px] overflow-hidden">
      {/* Sliding background images */}
      <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: transitioning ? 1.06 : 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-cover bg-center scale-[1.04]"
              style={{ backgroundImage: `url(${slide.image})` }} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Cinematic overlays — warm, not dark */}
      <div className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to right, rgba(15,10,5,0.72) 0%, rgba(10,6,3,0.45) 55%, rgba(10,6,3,0.2) 100%)" }} />
      <div className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to top, rgba(10,7,3,0.8) 0%, rgba(10,7,3,0.3) 45%, transparent 70%)" }} />
      {/* Warm gold ambient glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: "linear-gradient(to top, rgba(197,160,89,0.06), transparent)" }} />

      {/* Hero Content */}
      <div className="relative z-20 h-full max-w-[1360px] mx-auto px-5 md:px-10 flex flex-col justify-end pb-20 md:pb-28">

        <AnimatePresence mode="wait">
          <motion.div key={`content-${activeSlide}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="inline-flex items-center gap-2.5 mb-6"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[10px] tracking-[0.35em] uppercase font-sans font-semibold text-[#C5A059]">
                {slide.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-serif text-[2.4rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[5rem] text-white leading-[1.1] mb-5">
              {slide.headline.split("\n").map((line, i) => (
                <motion.span key={i}
                  initial={{ opacity: 0, y: 24, clipPath: "inset(100% 0 0 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
                  transition={{ delay: 0.18 + i * 0.14, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${slide.accent === line ? "italic font-light text-[#D4B472]" : "font-medium"}`}
                >{line}</motion.span>
              ))}
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52, duration: 0.9 }}
              className="text-white/65 text-sm md:text-base font-light leading-relaxed max-w-lg mb-9"
            >
              {slide.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href={slide.cta1.href}
                className="btn-gold inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[11px] rounded-md">
                {slide.cta1.label} <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href={slide.cta2.href}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase border border-white/30 text-white hover:border-[#C5A059]/60 hover:text-[#D4B472] transition-all backdrop-blur-sm rounded-md">
                {slide.cta2.label}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots */}
        <div className="absolute right-5 md:right-10 bottom-1/3 flex flex-col items-center gap-2.5">
          {heroSlides.map((_, i) => (
            <button key={i} id={`hero-dot-${i}`} onClick={() => goToSlide(i)}
              className="transition-all duration-500"
            >
              <span className={`block rounded-full transition-all duration-500 ${i === activeSlide ? "w-1.5 h-9 bg-[#C5A059]" : "w-1 h-2.5 bg-white/35 hover:bg-white/60"}`} />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="absolute right-5 md:right-10 bottom-7 text-[9px] tracking-[0.3em] text-white/35 font-sans select-none">
          0{activeSlide + 1} / 0{heroSlides.length}
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-7 flex flex-col items-center gap-1.5 opacity-40"
        >
          <span className="text-[8px] tracking-[0.4em] uppercase text-white">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 text-white" />
        </motion.div>
      </div>
    </section>
  );
}
