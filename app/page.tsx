"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Logo } from "@/components/logo";
import { ArrowRight, Shield, MapPin, Mail, Phone, Droplet, Zap, TreePine, ShieldCheck, Route, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="relative w-full bg-ivory text-ink overflow-hidden font-sans selection:bg-champagne/20 selection:text-ink">

      {/* GLOBAL NAVBAR - PREMIUM LUXURY */}
      <nav className="fixed top-0 left-0 w-full z-50 py-5 px-8 md:px-12 flex justify-between items-center bg-ivory/80 backdrop-blur-md border-b border-ink/5 shadow-sm">
        <div className="flex items-center gap-4">
          <Logo className="w-10 h-10" fillColor="#1A1A1A" />
          <span className="font-serif text-xl tracking-[0.2em] text-ink uppercase hidden md:block">Dhan Dhara</span>
        </div>
        <div className="hidden lg:flex gap-10 font-sans text-xs tracking-widest text-charcoal uppercase font-medium">
          <a href="#projects" className="hover:text-champagne transition-colors">Portfolio</a>
          <a href="#amenities" className="hover:text-champagne transition-colors">Infrastructure</a>
          <a href="#about" className="hover:text-champagne transition-colors">Philosophy</a>
          <a href="#contact" className="hover:text-champagne transition-colors">Contact</a>
        </div>
        <div className="flex gap-6 items-center">
          <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 text-ink text-xs font-medium tracking-widest uppercase hover:text-champagne transition-colors">
            +91 98765 43210
          </a>
          <a href="#contact" className="px-6 py-2.5 bg-ink text-ivory text-xs font-medium tracking-widest uppercase hover:bg-[#0F3524] transition-all duration-300">
            Schedule Visit
          </a>
        </div>
      </nav>

      {/* STICKY WHATSAPP CTA - LUXURY STYLED */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#0F3524] text-champagne p-4 rounded-full shadow-2xl hover:scale-105 border border-champagne/20 transition-all duration-500 flex items-center justify-center group">
        <MessageCircle className="w-6 h-6 group-hover:text-white transition-colors" />
      </a>

      {/* ACT I: THE PREMIUM DEVELOPER HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 px-8 bg-ink">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          {/* Strictly Premium Real Estate Image: Luxury Villa / Modern Architecture */}
          <div className="absolute inset-0 bg-ink/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-90 z-0" />
        </motion.div>

        <div className="z-10 text-center flex flex-col items-center max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide text-ivory leading-[1.1] mb-6 drop-shadow-lg">
              Architecting <span className="italic text-champagne font-light">Elegance.</span><br />
              Developing Trust.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-sans text-xs md:text-sm tracking-[0.3em] text-ivory/80 uppercase max-w-2xl leading-relaxed font-light mb-12"
          >
            Premium Plotted Townships & Luxury Villa Developments in Jaipur
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#projects" className="px-10 py-4 bg-champagne text-ink text-xs font-semibold tracking-[0.2em] uppercase hover:bg-ivory transition-colors shadow-xl">
              Discover Portfolio
            </a>
            <a href="#contact" className="px-10 py-4 bg-transparent text-ivory border border-ivory/30 text-xs font-semibold tracking-[0.2em] uppercase hover:border-champagne hover:text-champagne transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ACT II: SOPHISTICATED TRUST PILLARS */}
      <section className="bg-ivory text-ink py-16 px-8 relative z-20 border-b border-ink/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start gap-2">
            <ShieldCheck className="w-8 h-8 text-[#0F3524] mb-2" />
            <span className="font-serif text-2xl text-ink">100% JDA Approved</span>
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal">Legally Secure Titles</span>
          </div>

          <div className="hidden md:block w-px h-16 bg-ink/10" />

          <div className="flex flex-col items-center md:items-start gap-2">
            <Route className="w-8 h-8 text-[#0F3524] mb-2" />
            <span className="font-serif text-2xl text-ink">Premium Infrastructure</span>
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal">Ready-to-Build Developments</span>
          </div>

          <div className="hidden md:block w-px h-16 bg-ink/10" />

          <div className="flex flex-col items-center md:items-start gap-2">
            <MapPin className="w-8 h-8 text-[#0F3524] mb-2" />
            <span className="font-serif text-2xl text-ink">Prime Corridors</span>
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal">Strategic Capital Growth</span>
          </div>

        </div>
      </section>

      {/* ACT III: PREMIUM PROJECT SHOWCASE (CINEMATIC) */}
      <section id="projects" className="py-32 px-6 md:px-12 bg-cashmere/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h3 className="text-xs font-sans tracking-[0.3em] uppercase text-charcoal font-medium mb-4">Investment Portfolio</h3>
              <h2 className="font-serif text-5xl md:text-6xl text-ink tracking-wide">Signature Townships</h2>
            </div>
            <a href="#contact" className="text-sm font-sans tracking-widest uppercase text-ink hover:text-champagne transition-colors border-b border-ink pb-1 font-medium">
              Request Full Brochure
            </a>
          </div>

          {/* Large, Cinematic 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {[
              { name: "The Green Enclave", loc: "Ajmer Road, Jaipur", type: "Premium Plotted Development", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
              { name: "Heritage Reserves", loc: "Tonk Road, Jaipur", type: "Luxury Villa Township", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
              { name: "Dhara Meadows", loc: "Sikar Road, Jaipur", type: "Gated Residential Community", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
              { name: "The Zenith Avenue", loc: "Jagatpura, Jaipur", type: "Modern Architectural Enclave", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
            ].map((project, i) => (
              <div key={i} className="group relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-ink cursor-pointer">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.img})` }}
                />

                {/* Deep Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />

                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    <p className="text-champagne text-xs font-sans tracking-[0.2em] uppercase font-semibold mb-3">
                      {project.loc}
                    </p>
                    <h4 className="font-serif text-4xl md:text-5xl text-ivory mb-2">{project.name}</h4>
                    <p className="text-ivory/70 text-sm font-sans tracking-wider font-light mb-8">
                      {project.type}
                    </p>

                    {/* Action Button - Appears on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex gap-4">
                      <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-widest uppercase hover:bg-white hover:text-ink transition-colors flex items-center gap-2">
                        View Development <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ACT IV: ARCHITECTURAL INFRASTRUCTURE (AMENITIES) */}
      <section id="amenities" className="py-32 px-6 md:px-12 bg-ivory border-t border-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-wide mb-6">World-Class Infrastructure</h2>
            <p className="font-sans text-charcoal font-light text-lg max-w-2xl mx-auto">
              We lay the foundation for luxury living. Every Dhan Dhara township is delivered with uncompromising, premium infrastructure ready for immediate construction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
            {[
              { icon: Route, title: "Wide Damar Roads", desc: "40ft & 30ft internal premium paved avenues." },
              { icon: Zap, title: "Underground Electricity", desc: "Clutter-free, secure underground cabling." },
              { icon: Droplet, title: "Water Supply", desc: "Dedicated pipelines to every individual plot." },
              { icon: TreePine, title: "Landscaped Parks", desc: "Architecturally designed green spaces." },
              { icon: Shield, title: "Gated Security", desc: "24/7 guarded entries with perimeter walls." }
            ].map((amenity, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-cashmere flex items-center justify-center mb-6 group-hover:bg-[#0F3524] transition-colors duration-500">
                  <amenity.icon className="w-8 h-8 text-[#0F3524] group-hover:text-champagne transition-colors duration-500" />
                </div>
                <h4 className="font-sans text-sm font-semibold tracking-widest uppercase text-ink mb-2">{amenity.title}</h4>
                <p className="font-sans text-xs text-charcoal font-light leading-relaxed px-2">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT V: DEVELOPER PHILOSOPHY */}
      <section id="about" className="py-32 px-6 bg-[#0F3524] text-ivory">
        <div className="max-w-5xl mx-auto text-center">
          <Logo className="w-16 h-16 mx-auto mb-10" fillColor="#FDFBF7" />
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Building on Absolute Trust.<br />
            <span className="text-champagne italic font-light">Delivering Generational Wealth.</span>
          </h2>
          <p className="font-sans text-ivory/80 leading-relaxed font-light text-lg max-w-3xl mx-auto mb-12">
            Our identity is rooted in our name. <strong className="font-medium text-white">Dhan</strong> signifies Prosperity, and <strong className="font-medium text-white">Dhara</strong> is the Earth. As Jaipur’s premier real estate developer, we are committed to meticulously planning plotted townships that offer invincible legal security and unparalleled lifestyle architecture.
          </p>
          <p className="font-serif text-2xl text-champagne italic">
            &quot;जहाँ विश्वास है, वहाँ विकास है...&quot;
          </p>
        </div>
      </section>

      {/* ACT VI: EXCLUSIVE ADVISORY (INQUIRY FORM) */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-cashmere/30">
        <div className="max-w-6xl mx-auto bg-ivory rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-ink/5">

          <div className="w-full lg:w-5/12 bg-ink p-12 lg:p-16 text-ivory flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-champagne rounded-full blur-[120px] opacity-10" />

            <div>
              <h3 className="font-serif text-4xl mb-6 relative z-10">Wealth Advisory</h3>
              <p className="font-sans text-sm text-ivory/70 mb-12 font-light relative z-10 leading-relaxed max-w-sm">
                Schedule a private consultation with our real estate experts to explore premium plot availability and secure your investment in Jaipur&apos;s most coveted townships.
              </p>
            </div>

            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-champagne shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] text-ivory/50 uppercase tracking-[0.2em] font-medium mb-1">Direct Line</p>
                  <p className="font-sans text-lg tracking-wide">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-champagne shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] text-ivory/50 uppercase tracking-[0.2em] font-medium mb-1">Email Advisory</p>
                  <p className="font-sans text-lg tracking-wide">invest@dhandhara.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-champagne shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] text-ivory/50 uppercase tracking-[0.2em] font-medium mb-1">Corporate Office</p>
                  <p className="font-sans text-sm tracking-wide text-ivory/80 max-w-[200px] leading-relaxed">123, Premium Tower, Ajmer Road, Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 p-12 lg:p-20">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">First Name</label>
                  <input type="text" className="w-full pb-3 border-b border-ink/20 focus:outline-none focus:border-ink font-sans text-sm bg-transparent transition-colors" placeholder="Enter here" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Last Name</label>
                  <input type="text" className="w-full pb-3 border-b border-ink/20 focus:outline-none focus:border-ink font-sans text-sm bg-transparent transition-colors" placeholder="Enter here" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Phone Number *</label>
                  <input type="tel" className="w-full pb-3 border-b border-ink/20 focus:outline-none focus:border-ink font-sans text-sm bg-transparent transition-colors" placeholder="+91" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Email Address</label>
                  <input type="email" className="w-full pb-3 border-b border-ink/20 focus:outline-none focus:border-ink font-sans text-sm bg-transparent transition-colors" placeholder="Optional" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Investment Interest</label>
                <select className="w-full pb-3 border-b border-ink/20 focus:outline-none focus:border-ink font-sans text-sm bg-transparent transition-colors text-ink/70">
                  <option>Premium Residential Plots</option>
                  <option>Luxury Villa Developments</option>
                  <option>Commercial Land</option>
                  <option>Schedule a Site Visit</option>
                </select>
              </div>

              <button type="submit" className="w-full py-5 mt-6 bg-ink text-champagne text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#0F3524] hover:text-white transition-all duration-300 shadow-xl flex justify-center items-center gap-3">
                Request Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ACT VII: HERITAGE MEGA FOOTER */}
      <footer className="pt-24 pb-12 px-6 md:px-12 bg-ink text-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

          <div className="md:col-span-12 lg:col-span-5 flex flex-col pr-8">
            <div className="flex items-center gap-4 mb-8">
              <Logo className="w-12 h-12" fillColor="#FDFBF7" />
              <span className="font-serif text-2xl tracking-[0.2em] text-ivory uppercase">Dhan Dhara</span>
            </div>
            <p className="font-sans text-ivory/60 font-light leading-relaxed mb-8 max-w-sm text-sm">
              Jaipur&apos;s premier real estate developer, meticulously crafting high-end plotted townships and luxury villas with absolute legal transparency.
            </p>

            <div className="inline-flex items-center gap-4 border border-champagne/30 px-6 py-3 bg-white/5">
              <ShieldCheck className="w-6 h-6 text-champagne" />
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-champagne">RERA Registered</p>
                <p className="text-[10px] text-ivory/50 mt-1 font-light">100% Legal Compliance</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-champagne mb-6">Company</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm font-light text-ivory/70">
              <li><a href="#" className="hover:text-champagne transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-champagne transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-champagne mb-6">Portfolio</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm font-light text-ivory/70">
              <li><a href="#projects" className="hover:text-champagne transition-colors">Signature Townships</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Villa Developments</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Completed Projects</a></li>
              <li><a href="#amenities" className="hover:text-champagne transition-colors">Infrastructure</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-champagne mb-6">Connect</h4>
            <ul className="flex flex-col gap-5 font-sans text-sm font-light text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-1" />
                <span className="leading-relaxed">123, Premium Tower, Ajmer Road, Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <a href="mailto:info@dhandhara.com" className="hover:text-champagne transition-colors">info@dhandhara.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans tracking-[0.2em] text-ivory/40 uppercase">
          <p>&copy; {new Date().getFullYear()} Dhan Dhara Developers LLP.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-champagne transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-champagne transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
