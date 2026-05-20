"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Logo } from "@/components/logo";
import { ArrowRight, Shield, Leaf, Sun, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <main ref={containerRef} className="relative w-full bg-ivory text-ink overflow-hidden font-sans selection:bg-champagne/20 selection:text-ink">
      
      {/* GLOBAL NAVBAR - LIGHT LUXURY */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-ivory/80 backdrop-blur-md border-b border-ink/5 shadow-sm">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" fillColor="#1A1A1A" />
          <span className="font-serif text-xl tracking-[0.15em] text-ink uppercase">Dhan Dhara</span>
        </div>
        <div className="hidden md:flex gap-10 font-sans text-xs tracking-widest text-charcoal uppercase">
          <a href="#portfolio" className="hover:text-champagne transition-colors">Projects</a>
          <a href="#trust" className="hover:text-champagne transition-colors">Why Invest</a>
          <a href="#footer" className="hover:text-champagne transition-colors">Contact</a>
        </div>
        <button className="px-6 py-2 border border-ink/20 text-ink text-xs font-medium tracking-widest uppercase hover:bg-ink hover:text-ivory transition-all duration-500">
          Book Consultation
        </button>
      </nav>

      {/* ACT I: THE WARM WELCOME (HERO) */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 px-8 bg-cashmere/30">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Light-filled architectural abstraction - Premium Township Gate/Street */}
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory/90 via-ivory/60 to-white/40 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-70 z-0" />
        </motion.div>

        <div className="z-10 text-center flex flex-col items-center max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Logo className="w-24 h-24 md:w-32 md:h-32 mb-8 mx-auto" fillColor="#1A1A1A" />
          </motion.div>
          
          <motion.div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide text-ink leading-[1.1]"
            >
              Where Land <br/>
              <span className="italic text-[#0F3524]">Builds Legacy.</span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 font-sans text-sm md:text-base tracking-[0.2em] text-charcoal uppercase max-w-xl leading-relaxed font-medium"
          >
            Premium Plotted Developments & Smart Real Estate Investment Opportunities in Jaipur.
          </motion.p>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal font-medium">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-ink/30" />
        </motion.div>
      </section>

      {/* ACT II: THE PHILOSOPHY OF DHAN DHARA */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-ivory">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-y border-ink/10 py-16">
          {/* Left: Editorial Image representing Family & Land */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto order-2 md:order-1">
            <div className="absolute inset-0 bg-[#0F3524] rounded-sm transform -translate-x-4 translate-y-4 opacity-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-sm z-10 shadow-lg shadow-ink/5" />
          </div>
          
          {/* Right: The Core Meaning */}
          <div className="md:pl-16 flex flex-col justify-center order-1 md:order-2">
            <div className="w-12 h-[1px] bg-champagne mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 tracking-wide leading-tight">
              Real estate is not just land...<br/>
              <span className="italic text-[#0F3524]">It is your family's dream.</span>
            </h2>
            <p className="font-serif text-xl text-champagne italic mb-8">
              "रियल एस्टेट में लोग सिर्फ जमीन नहीं खरीदते... वो अपने सपने खरीदते हैं।"
            </p>
            <p className="font-sans text-charcoal leading-relaxed font-light mb-10 text-lg">
              Our name holds our identity. <strong className="font-medium text-ink">Dhan</strong> signifies Prosperity, and <strong className="font-medium text-ink">Dhara</strong> is the Earth—your foundation. We meticulously plan plotted townships that secure your family's future and generate lasting wealth.
            </p>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-semibold tracking-widest uppercase text-ink">Dream & Honesty</h4>
                  <p className="text-xs text-charcoal mt-1">Building on absolute trust.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-semibold tracking-widest uppercase text-ink">Assets & Growth</h4>
                  <p className="text-xs text-charcoal mt-1">Generational wealth creation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT III: PREMIUM DEVELOPMENTS (PORTFOLIO) */}
      <section id="portfolio" className="py-32 relative bg-cashmere/40">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h3 className="text-sm font-sans tracking-[0.3em] uppercase text-champagne font-semibold mb-4">Signature Communities</h3>
            <h2 className="font-serif text-5xl md:text-6xl text-ink tracking-wide">Plotted Townships</h2>
          </div>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-ink hover:text-[#0F3524] transition-colors pb-2 border-b border-ink/20 hover:border-[#0F3524]">
            Explore Communities <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Horizontal Scroll Gallery - Plotted Communities */}
        <div className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-16 snap-x snap-mandatory hide-scrollbar">
          {[
            { name: "The Green Enclave", loc: "Premium Plotted Township", img: "https://images.unsplash.com/photo-1627918361099-a9a3b2b4dbbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { name: "Heritage Reserves", loc: "Smart Investment Corridor", img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            { name: "Dhara Meadows", loc: "Luxury Villa Plots", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
          ].map((project, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[40vw] h-[65vh] snap-center relative group overflow-hidden bg-alabaster flex-shrink-0 shadow-sm border border-champagne/20">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105" style={{ backgroundImage: `url(${project.img})` }} />
              
              {/* Light gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/60 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <p className="text-xs font-sans tracking-[0.2em] text-[#0F3524] mb-3 uppercase font-semibold">{project.loc}</p>
                <h4 className="font-serif text-3xl md:text-4xl text-ink">{project.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACT IV: WHY INVEST IN JAIPUR LAND? */}
      <section id="trust" className="py-32 px-6 md:px-12 bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <Leaf className="w-10 h-10 text-champagne mx-auto mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-wide mb-8">Secure Your Future</h2>
          <p className="font-sans text-lg text-charcoal leading-relaxed font-light mb-16 max-w-2xl mx-auto">
            Jaipur is rapidly expanding. Our plotted developments offer a rare combination of immediate lifestyle benefits and long-term capital appreciation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Clear Title Assets", desc: "100% verified legal land banking ensuring absolute security for your family." },
              { title: "Premium Infrastructure", desc: "Wide roads, lush landscaping, and modern amenities in every township." },
              { title: "High ROI Potential", desc: "Strategically acquired plots in Jaipur's highest growth corridors." }
            ].map((metric, i) => (
              <div key={i} className="bg-cashmere p-10 text-center flex flex-col items-center justify-center border-t-2 border-[#0F3524]/20 shadow-sm hover:border-champagne transition-colors duration-500">
                <h4 className="font-sans text-sm font-semibold tracking-widest uppercase text-[#0F3524] mb-4">{metric.title}</h4>
                <p className="text-sm text-charcoal font-light leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT V: THE HERITAGE MEGA FOOTER (GREEN & GOLD) */}
      <footer id="footer" className="pt-32 pb-12 px-6 md:px-12 bg-[#0F3524] text-ivory border-t-4 border-champagne relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-champagne blur-[100px] opacity-20" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24 relative z-10">
          
          {/* Column 1: Brand & Hindi Tagline */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-12 h-12" fillColor="#FDFBF7" />
              <span className="font-serif text-2xl tracking-[0.15em] text-ivory uppercase">Dhan Dhara</span>
            </div>
            <p className="font-serif text-xl italic text-champagne mb-6">
              "जहाँ विश्वास है, वहाँ विकास है..."
            </p>
            <p className="font-sans text-ivory/70 font-light leading-relaxed mb-8 max-w-sm text-sm">
              Crafting premium residential plots and modern developments across Rajasthan. Register for exclusive private launch access.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <div className="relative">
                <input type="email" placeholder="ENTER YOUR EMAIL" className="w-full bg-transparent border-b border-ivory/20 pb-3 text-ivory font-sans text-xs tracking-widest placeholder:text-ivory/40 focus:outline-none focus:border-champagne transition-colors" />
                <button className="absolute right-0 bottom-3 text-champagne hover:text-ivory transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-champagne mb-6">Company</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm font-light text-ivory/80">
              <li><a href="#" className="hover:text-champagne transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Portfolio */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-champagne mb-6">Portfolio</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm font-light text-ivory/80">
              <li><a href="#" className="hover:text-champagne transition-colors">All Townships</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Ongoing Projects</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Completed Projects</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Residential Plots</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Column 4: Insights & Trust */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-champagne mb-6">Insights</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm font-light text-ivory/80">
              <li><a href="#" className="hover:text-champagne transition-colors">Investment Opps.</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Blog & News</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Market Reports</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="md:col-span-12 lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-champagne mb-6">Reach Us</h4>
            <ul className="flex flex-col gap-5 font-sans text-sm font-light text-ivory/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-1" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <a href="mailto:info@dhandhara.com" className="hover:text-champagne transition-colors">info@dhandhara.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans tracking-widest text-ivory/50 uppercase relative z-10">
          <p>&copy; {new Date().getFullYear()} Dhan Dhara Developers LLP. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-champagne transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-champagne transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
