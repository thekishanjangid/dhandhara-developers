"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  ArrowRight, MapPin, Mail, Phone, Droplet, Zap, TreePine, Shield,
  ShieldCheck, Route, MessageCircle, ChevronDown, Landmark,
  Star, Award, Building2, Users, Menu, X, CheckCircle2, TrendingUp,
  Home as HomeIcon, AlarmCheck
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const heroSlides = [
  {
    id: 0,
    image: "/r-hero.png",
    badge: "JDA & RERA Approved",
    headline: "Where Your Future\nFinds Its Foundation",
    accent: "Finds Its Foundation",
    sub: "Premium plotted developments with world-class infrastructure in Jaipur's fastest-growing corridors.",
    cta1: { label: "Explore Projects", href: "#projects" },
    cta2: { label: "Book Site Visit", href: "#contact" },
  },
  {
    id: 1,
    image: "/r-gate.png",
    badge: "Gated Community Living",
    headline: "Building Trust\nThrough Land & Legacy",
    accent: "Through Land & Legacy",
    sub: "18 years of delivering premium plotted townships with clear legal titles and superior infrastructure.",
    cta1: { label: "View Townships", href: "#projects" },
    cta2: { label: "WhatsApp Enquiry", href: "https://wa.me/917791086060" },
  },
  {
    id: 2,
    image: "/r-villa.png",
    badge: "Luxury Villa Plots",
    headline: "Premium Living\nBegins Here",
    accent: "Begins Here",
    sub: "Modern villa plots crafted for families who believe their home deserves the best address in Jaipur.",
    cta1: { label: "Our Projects", href: "#projects" },
    cta2: { label: "Schedule Visit", href: "#contact" },
  },
];

const projects = [
  {
    name: "The Green Enclave",
    loc: "Ajmer Road, Jaipur",
    type: "Premium Plotted Development",
    status: "Sold Out",
    statusColor: "bg-red-500",
    plots: "324 Plots",
    size: "112–250 Sq. Yd.",
    img: "/r-hero.png",
    badge: "Flagship Project",
  },
  {
    name: "Heritage Reserves",
    loc: "Tonk Road, Jaipur",
    type: "Gated Villa Township",
    status: "Active Booking",
    statusColor: "bg-emerald-500",
    plots: "186 Plots",
    size: "200–500 Sq. Yd.",
    img: "/r-villa.png",
    badge: "New Launch",
  },
  {
    name: "Dhara Meadows",
    loc: "Sikar Road, Jaipur",
    type: "Gated Residential Community",
    status: "Pre-Launch",
    statusColor: "bg-amber-400",
    plots: "260 Plots",
    size: "100–300 Sq. Yd.",
    img: "/r-road.png",
    badge: "Pre-Launch",
  },
  {
    name: "The Zenith Avenue",
    loc: "Jagatpura, Jaipur",
    type: "Modern Architectural Enclave",
    status: "Active Booking",
    statusColor: "bg-emerald-500",
    plots: "198 Plots",
    size: "150–400 Sq. Yd.",
    img: "/r-gate.png",
    badge: "Prime Location",
  },
];

const stats = [
  { number: 15, suffix: "+", label: "Delivered Projects", icon: Building2 },
  { number: 3500, suffix: "+", label: "Happy Families", icon: Users },
  { number: 18, suffix: " Yrs", label: "Of Excellence", icon: Award },
  { number: 100, suffix: "%", label: "JDA Approved", icon: ShieldCheck },
];

const amenities = [
  { icon: Route,    title: "40ft Wide Roads",      desc: "Smooth damar roads with footpaths on both sides" },
  { icon: Zap,      title: "Underground Electric", desc: "Clutter-free underground electrical cabling" },
  { icon: Droplet,  title: "Water Pipeline",       desc: "Dedicated water line to every individual plot" },
  { icon: TreePine, title: "Landscaped Parks",     desc: "Architect-designed green community gardens" },
  { icon: Shield,   title: "24/7 Security",        desc: "Gated entry with CCTV surveillance & guards" },
  { icon: Landmark, title: "Boundary Wall",        desc: "Full perimeter compound wall on all four sides" },
];

const testimonials = [
  {
    name: "Rajesh Kumar Sharma",
    role: "Ajmer Road Plot Owner",
    rating: 5,
    text: "Dhan Dhara delivered exactly what they promised. Fully developed plot with proper roads, electricity, and water. The title is completely clean. Best investment of my life.",
    city: "Jaipur",
  },
  {
    name: "Priya & Amit Gupta",
    role: "Heritage Reserves Owners",
    rating: 5,
    text: "Completely transparent process. No hidden charges, no false promises. We visited the site multiple times and every visit confirmed the quality. Highly recommend to all families.",
    city: "Jaipur",
  },
  {
    name: "Suresh Chand Agarwal",
    role: "Multi-Project Investor",
    rating: 5,
    text: "I have invested in three plots across different projects. All are appreciating steadily. Brilliant location selection — near schools, hospitals, and highways. True professionals.",
    city: "Jaipur",
  },
];

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let t0 = 0;
        const run = (ts: number) => {
          if (!t0) t0 = ts;
          const p = Math.min((ts - t0) / 1800, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   PRELOADER COMPONENT
───────────────────────────────────────────── */
function Preloader({ onDone }: { onDone: () => void }) {
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

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
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

  /* Scroll detection */
  useEffect(() => {
    return scrollY.on("change", v => setNavScrolled(v > 80));
  }, [scrollY]);

  const goToSlide = useCallback((i: number) => {
    if (i === activeSlide) return;
    setTransitioning(true);
    setTimeout(() => { setActiveSlide(i); setTransitioning(false); }, 500);
  }, [activeSlide]);

  const slide = heroSlides[activeSlide];

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>
        {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <main ref={containerRef} className="relative w-full bg-ivory text-ink overflow-x-hidden font-sans">

        {/* ═══════════════════════════════════════════════════════
            NAVBAR — Premium glass, light theme
        ═══════════════════════════════════════════════════════ */}
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
              <a href="tel:+917791086060"
                className={`hidden md:flex items-center gap-2 text-[11px] font-medium transition-colors ${navScrolled ? "text-charcoal hover:text-[#C5A059]" : "text-white/85 hover:text-white"}`}>
                <Phone className="w-3.5 h-3.5" />
                +91 77910 86060
              </a>
              <a href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
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
                className="lg:hidden overflow-hidden bg-ivory border-t border-[#C5A059]/10"
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
                      className="flex items-center justify-between py-3.5 border-b border-[#E8DDD0] text-sm font-medium text-charcoal hover:text-[#C5A059] transition-colors">
                      {l} <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    </motion.a>
                  ))}
                  <div className="pt-5 flex flex-col gap-3">
                    <a href="tel:+917791086060" className="flex items-center gap-3 text-sm text-charcoal">
                      <Phone className="w-4 h-4 text-[#C5A059]" /> +91 77910 86060
                    </a>
                    <a href="#contact"
                      className="mt-1 py-3.5 text-center text-[11px] font-bold tracking-[0.2em] uppercase btn-gold">
                      Book Free Site Visit
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ═══════════════════════════════════════════════════════
            HERO — Cinematic, real, warm
        ═══════════════════════════════════════════════════════ */}
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
                    className="btn-gold inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[11px]">
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

        {/* ═══════════════════════════════════════════════════════
            TRUST STRIP — Warm ivory bar
        ═══════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════
            ABOUT INTRO — Split layout, warm tones
        ═══════════════════════════════════════════════════════ */}
        <section id="about" className="py-20 md:py-32 bg-ivory">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left image stack */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative"
              >
                {/* Main image */}
                <div className="img-zoom relative h-[420px] md:h-[520px] overflow-hidden shadow-2xl">
                  <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-road.png)" }} />
                </div>
                {/* Floating inset image */}
                <div className="img-zoom absolute -bottom-8 -right-4 md:-right-10 w-[45%] h-[200px] md:h-[240px] overflow-hidden shadow-2xl border-4 border-ivory">
                  <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-park.png)" }} />
                </div>
                {/* Gold badge */}
                <div className="absolute -top-4 -left-4 md:-left-8 bg-[#C5A059] text-[#1A1A1A] px-5 py-3 shadow-lg">
                  <p className="font-serif text-2xl font-medium leading-none">18</p>
                  <p className="text-[9px] tracking-[0.25em] uppercase font-bold mt-0.5">Years</p>
                </div>
              </motion.div>

              {/* Right content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
              >
                <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-4">About Dhan Dhara</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-6 leading-tight">
                  Jaipur's Most Trusted<br />
                  <span className="italic text-[#C5A059] font-light">Land Developer</span>
                </h2>
                <div className="w-10 h-0.5 bg-[#C5A059] mb-7" />
                <p className="text-charcoal text-base font-light leading-relaxed mb-5">
                  Our identity is rooted in our name. <strong className="text-ink font-semibold">Dhan</strong> signifies Prosperity, and <strong className="text-ink font-semibold">Dhara</strong> means the Earth. Since 2008, we have been meticulously developing plotted townships that give Jaipur families a secure, investable future.
                </p>
                <p className="text-charcoal text-base font-light leading-relaxed mb-9">
                  Every plot we sell comes with 100% JDA & RERA approval, clear title documentation, and fully developed infrastructure — roads, electricity, water, and walls — before we hand over possession.
                </p>

                <p className="font-serif text-xl text-[#C5A059] italic mb-9">
                  &quot;जहाँ विश्वास है, वहाँ विकास है...&quot;
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {[
                    { label: "Legal Clarity", desc: "100% clean & approved titles" },
                    { label: "Real Infrastructure", desc: "Fully ready before possession" },
                    { label: "Prime Locations", desc: "High-growth Jaipur corridors" },
                    { label: "No Hidden Costs", desc: "Transparent pricing always" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-ink">{item.label}</p>
                        <p className="text-[11px] text-slate mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#contact"
                  className="btn-gold inline-flex items-center gap-2.5 px-8 py-3.5 text-[11px]">
                  Schedule a Free Consultation <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            STATS — Cream background, animated counters
        ═══════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════
            PROJECTS — Light theme, rich visuals
        ═══════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════
            LIFESTYLE GALLERY — Rich image mosaic
        ═══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-3">Community Life</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">
                Life Inside Our<br />
                <span className="italic text-[#C5A059] font-light">Premium Townships</span>
              </h2>
            </motion.div>

            {/* Asymmetric gallery grid */}
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {/* Large left image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-12 md:col-span-7 img-zoom relative h-[300px] md:h-[460px] overflow-hidden"
              >
                <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-family.png)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-serif text-xl md:text-2xl">Family-First Community</p>
                  <p className="text-[11px] text-white/70 mt-1">Safe, green & connected neighbourhoods</p>
                </div>
              </motion.div>

              {/* Right column 2 images */}
              <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="img-zoom relative h-[200px] md:h-[220px] overflow-hidden"
                >
                  <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-park.png)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-serif text-base md:text-lg">Landscaped Parks</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="img-zoom relative h-[200px] md:h-[220px] overflow-hidden"
                >
                  <div className="bg-img absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-gate.png)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-serif text-base md:text-lg">Gated Community Entry</p>
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

        {/* ═══════════════════════════════════════════════════════
            INFRASTRUCTURE — Clean light cards
        ═══════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════
            WHY CHOOSE US — Alternate layout with image
        ═══════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════
            TESTIMONIALS — Warm cards
        ═══════════════════════════════════════════════════════ */}
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

        {/* ═══════════════════════════════════════════════════════
            CTA BANNER — The only dark contrast section
        ═══════════════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Dark bg with realistic image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/r-hero.png)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,53,36,0.92) 0%, rgba(10,10,10,0.88) 60%, rgba(197,160,89,0.12) 100%)" }} />
          {/* Gold shimmer top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-10 text-center"
          >
            <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-5">The Right Time Is Now</p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.12] mb-6">
              Secure Your Plot Today<br />
              <span className="italic text-[#D4B472] font-light">Before Prices Rise Again</span>
            </h2>
            <p className="text-white/55 font-light text-base max-w-2xl mx-auto leading-relaxed mb-10">
              Land prices in Jaipur's growth corridors are appreciating 18–24% annually. Join 3,500+ families who chose Dhan Dhara for their most important investment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact"
                className="btn-gold inline-flex items-center gap-2.5 px-9 py-4 text-[11px] w-full sm:w-auto justify-center">
                Book Free Site Visit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/917791086060" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-[11px] font-bold tracking-[0.2em] uppercase border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all w-full sm:w-auto justify-center rounded-md">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
              </a>
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════════════════
            CONTACT — Light + dark panel
        ═══════════════════════════════════════════════════════ */}
        <section id="contact" className="py-20 md:py-32 bg-cream">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-sans font-semibold mb-3">Get In Touch</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink">
                Start Your Investment Journey
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl">

              {/* Left dark panel */}
              <div className="lg:col-span-4 bg-[#0F3524] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[120px] opacity-15"
                  style={{ background: "radial-gradient(circle, #C5A059, transparent)" }} />
                <div className="relative z-10">
                  <img src="/logo/dhandharalogo.png" alt="Dhan Dhara Logo" className="w-12 h-12 mb-8 object-contain" />
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Private Advisory</h3>
                  <p className="text-white/55 text-sm font-light leading-relaxed mb-10">
                    Our real estate experts will help you explore premium plot availability and guide your investment in Jaipur's most coveted corridors.
                  </p>

                  <div className="flex flex-col gap-6">
                    {[
                      { icon: Phone,          val: "+91 77910 86060",    label: "Call Us",          href: "tel:+917791086060" },
                      { icon: MessageCircle,  val: "+91 77910 86060",    label: "WhatsApp",         href: "https://wa.me/917791086060" },
                      { icon: Mail,           val: "invest@dhandhara.com", label: "Email",          href: "mailto:invest@dhandhara.com" },
                      { icon: MapPin,         val: "Ajmer Road, Jaipur",  label: "Office",          href: "#" },
                    ].map((c, i) => (
                      <a key={i} href={c.href} className="flex items-start gap-4 group">
                        <div className="w-9 h-9 border border-[#C5A059]/25 rounded-md flex items-center justify-center shrink-0 group-hover:bg-[#C5A059]/15 group-hover:border-[#C5A059]/50 transition-all">
                          <c.icon className="w-3.5 h-3.5 text-[#C5A059]/75 group-hover:text-[#C5A059] transition-colors" />
                        </div>
                        <div>
                          <p className="text-[9px] text-white/35 uppercase tracking-[0.2em] mb-0.5">{c.label}</p>
                          <p className="text-sm text-white/80 group-hover:text-white transition-colors">{c.val}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div className="lg:col-span-8 bg-white p-8 md:p-12">
                <form className="flex flex-col gap-7" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    {[
                      { id: "f-fname", label: "First Name *", type: "text", ph: "Your first name", req: true },
                      { id: "f-lname", label: "Last Name",    type: "text", ph: "Your last name" },
                    ].map(f => (
                      <div key={f.id} className="flex flex-col gap-2 group">
                        <label htmlFor={f.id}
                          className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate group-focus-within:text-[#C5A059] transition-colors">
                          {f.label}
                        </label>
                        <input id={f.id} type={f.type} required={f.req}
                          placeholder={f.ph}
                          className="pb-3 border-b border-[#E8DDD0] focus:border-[#C5A059] focus:outline-none text-sm font-sans bg-transparent text-ink placeholder-[#C5B89A]/60 transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    {[
                      { id: "f-phone", label: "Phone Number *", type: "tel",   ph: "+91 00000 00000", req: true },
                      { id: "f-email", label: "Email Address",  type: "email", ph: "Optional" },
                    ].map(f => (
                      <div key={f.id} className="flex flex-col gap-2 group">
                        <label htmlFor={f.id}
                          className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate group-focus-within:text-[#C5A059] transition-colors">
                          {f.label}
                        </label>
                        <input id={f.id} type={f.type} required={f.req}
                          placeholder={f.ph}
                          className="pb-3 border-b border-[#E8DDD0] focus:border-[#C5A059] focus:outline-none text-sm font-sans bg-transparent text-ink placeholder-[#C5B89A]/60 transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 group">
                    <label htmlFor="f-interest"
                      className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate group-focus-within:text-[#C5A059] transition-colors">
                      Investment Interest
                    </label>
                    <select id="f-interest"
                      className="pb-3 border-b border-[#E8DDD0] focus:border-[#C5A059] focus:outline-none text-sm font-sans bg-transparent text-charcoal transition-colors">
                      <option value="">Select your interest</option>
                      <option>Premium Residential Plots</option>
                      <option>Luxury Villa Township</option>
                      <option>Commercial Land</option>
                      <option>Schedule Site Visit</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 group">
                    <label htmlFor="f-msg"
                      className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate group-focus-within:text-[#C5A059] transition-colors">
                      Message (Optional)
                    </label>
                    <textarea id="f-msg" rows={3} placeholder="Tell us about your requirements..."
                      className="pb-3 border-b border-[#E8DDD0] focus:border-[#C5A059] focus:outline-none text-sm font-sans bg-transparent text-ink placeholder-[#C5B89A]/60 transition-colors resize-none" />
                  </div>

                  <button id="form-submit" type="submit"
                    className="btn-gold py-4 text-[11px] flex items-center justify-center gap-3">
                    Request Free Consultation <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            FOOTER — Warm dark, premium
        ═══════════════════════════════════════════════════════ */}
        <footer className="bg-[#0F1A14] text-white pt-20 pb-8 px-5 md:px-10">
          <div className="max-w-[1360px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/8">

              <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-10">
                <div className="flex items-center gap-3.5 mb-6">
                  <img src="/logo/dhandharalogo.png" alt="Dhan Dhara Logo" className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-serif text-lg tracking-[0.2em] uppercase text-white">Dhan Dhara</p>
                    <p className="text-[8px] tracking-[0.4em] text-[#C5A059] uppercase mt-0.5">Developers LLP</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8 max-w-sm">
                  Jaipur's most trusted plotted development company. Crafting premium communities with full legal transparency since 2008.
                </p>
                <div className="inline-flex items-center gap-3 border border-[#C5A059]/20 rounded-md px-5 py-3 hover:border-[#C5A059]/40 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">RERA Registered</p>
                    <p className="text-[9px] text-white/35 mt-0.5">100% Legal Compliance</p>
                  </div>
                </div>
              </div>

              {[
                {
                  title: "Company",
                  links: ["About Us", "Our Story", "Leadership", "Careers", "Media"],
                },
                {
                  title: "Portfolio",
                  links: ["The Green Enclave", "Heritage Reserves", "Dhara Meadows", "The Zenith Avenue"],
                },
              ].map((col, i) => (
                <div key={i} className="md:col-span-4 lg:col-span-2">
                  <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C5A059]/70 mb-6">{col.title}</h4>
                  <ul className="flex flex-col gap-4">
                    {col.links.map(l => (
                      <li key={l}>
                        <a href="#" className="text-sm text-white/40 font-light hover:text-[#C5A059] transition-colors">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="md:col-span-4 lg:col-span-3">
                <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C5A059]/70 mb-6">Connect</h4>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C5A059]/60 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/40 font-light leading-relaxed">Premium Tower, Ajmer Road, Jaipur — 302 021</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C5A059]/60 shrink-0" />
                    <a href="tel:+917791086060" className="text-sm text-white/40 hover:text-[#C5A059] transition-colors">+91 77910 86060</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C5A059]/60 shrink-0" />
                    <a href="mailto:info@dhandhara.com" className="text-sm text-white/40 hover:text-[#C5A059] transition-colors">info@dhandhara.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[9px] tracking-[0.2em] uppercase text-white/25">
              <p>&copy; {new Date().getFullYear()} Dhan Dhara Developers LLP. All Rights Reserved.</p>
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Use", "RERA Disclosure"].map(l => (
                  <a key={l} href="#" className="hover:text-[#C5A059] transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* ═══════════════════════════════════════════════════════
            FLOATING ACTIONS — WhatsApp + Call
        ═══════════════════════════════════════════════════════ */}
        <div className="fixed bottom-6 right-4 md:right-6 z-[200] flex flex-col gap-2.5">
          <a href="https://wa.me/917791086060" target="_blank" rel="noopener noreferrer"
            id="wa-float"
            className="group flex items-center overflow-hidden rounded-full transition-all duration-400"
            style={{
              background: "#25D366",
              color: "white",
              boxShadow: "0 6px 28px rgba(37,211,102,0.35)",
            }}>
            <div className="p-3.5 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="pr-4 text-[10px] font-bold tracking-widest uppercase max-w-0 group-hover:max-w-[120px] whitespace-nowrap overflow-hidden transition-all duration-400">
              WhatsApp
            </span>
          </a>

          <a href="tel:+917791086060" id="call-float"
            className="group flex items-center overflow-hidden rounded-full transition-all duration-400 btn-gold">
            <div className="p-3.5 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <span className="pr-4 text-[10px] font-bold tracking-widest uppercase max-w-0 group-hover:max-w-[80px] whitespace-nowrap overflow-hidden transition-all duration-400">
              Call Now
            </span>
          </a>
        </div>

      </main>
    </>
  );
}
