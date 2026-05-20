"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#FDFBF7]"
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Gold shimmer line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-5"
      >
        <img src="/logo/dhandharalogo.png" alt="Dhan Dhara Logo" className="w-16 h-16 object-contain" />
        <div className="text-center">
          <p className="font-serif text-2xl tracking-[0.3em] text-[#1A1A1A] uppercase">Dhan Dhara</p>
          <p className="text-[10px] tracking-[0.45em] text-[#C5A059] uppercase mt-1 font-sans">Developers</p>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
        <div className="h-0.5 bg-[#E8DDD0] overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-[#C5A059]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        <p className="text-center text-[9px] tracking-[0.4em] uppercase text-[#9E9E9E] mt-3 font-sans">
          Welcome to Excellence
        </p>
      </div>
    </motion.div>
  );
}
