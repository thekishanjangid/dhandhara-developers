"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", v => setNavScrolled(v > 80));
  }, [scrollY]);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
      style={{
        background: navScrolled
          ? "rgba(253,251,247,0.94)"
          : "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%)",
        backdropFilter: navScrolled ? "blur(20px) saturate(1.6)" : "none",
        borderBottom: navScrolled ? "1px solid rgba(197,160,89,0.12)" : "none",
        boxShadow: navScrolled ? "0 2px 40px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <img src="/logo/dhandharalogo.png" alt="Dhan Dhara Logo" className="w-12 h-12 object-contain" />
          <div>
            <p className={`font-serif text-[14px] tracking-[0.2em] uppercase font-medium leading-none transition-colors ${navScrolled ? "text-ink" : "text-white"}`}>
              Dhan Dhara
            </p>
            <p className="text-[8px] tracking-[0.4em] text-[#C5A059] uppercase font-sans mt-0.5">Developers</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { l: "Portfolio", h: "#projects" },
            { l: "Infrastructure", h: "#amenities" },
            { l: "Our Story", h: "#about" },
            { l: "Contact", h: "#contact" },
          ].map(({ l, h }) => (
            <a key={l} href={h}
              className={`text-[11px] tracking-[0.18em] uppercase font-medium relative group transition-colors duration-300 ${navScrolled ? "text-charcoal hover:text-[#C5A059]" : "text-white/85 hover:text-white"}`}>
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C5A059] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a href="tel:+919599872124"
            className={`hidden md:flex items-center gap-2 text-[11px] font-medium transition-colors ${navScrolled ? "text-charcoal hover:text-[#C5A059]" : "text-white/85 hover:text-white"}`}>
            <Phone className="w-3.5 h-3.5" />
            +91 95998 72124
          </a>
          <a href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-md"
            style={{ background: "linear-gradient(135deg,#C5A059,#D4B472)", color: "#1A1A1A" }}>
            Site Visit
          </a>
          <button id="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            className={`lg:hidden p-1.5 transition-colors ${navScrolled ? "text-ink" : "text-white"}`}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-[#FDFBF7] border-t border-[#C5A059]/10"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {[
                { l: "Portfolio", h: "#projects" },
                { l: "Infrastructure", h: "#amenities" },
                { l: "Our Story", h: "#about" },
                { l: "Contact", h: "#contact" },
              ].map(({ l, h }, i) => (
                <motion.a key={l} href={h}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between py-3.5 border-b border-[#E8DDD0] text-sm font-medium text-[#3D3D3D] hover:text-[#C5A059] transition-colors">
                  {l} <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </motion.a>
              ))}
              <div className="pt-5 flex flex-col gap-3">
                <a href="tel:+919599872124" className="flex items-center gap-3 text-sm text-[#3D3D3D]">
                  <Phone className="w-4 h-4 text-[#C5A059]" /> +91 95998 72124
                </a>
                <a href="#contact"
                  className="mt-1 py-3.5 text-center text-[11px] font-bold tracking-[0.2em] uppercase btn-gold rounded-md">
                  Book Free Site Visit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
