"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";

export function ContactAdvisory() {
  return (
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

        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl rounded-md">

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
                  { icon: Phone,          val: "+91 95998 72124",    label: "Call Us",          href: "tel:+919599872124" },
                  { icon: WhatsAppIcon,   val: "+91 95998 72124",    label: "WhatsApp",         href: "https://wa.me/919599872124?text=Hello%20Dhan%20Dhara%20Developers!%20I%20am%20interested%20in%20knowing%20more%20about%20your%20projects." },
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
                className="btn-gold py-4 text-[11px] flex items-center justify-center gap-3 rounded-md">
                Request Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
