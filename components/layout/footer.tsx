import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  return (
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
                <a href="tel:+919599872124" className="text-sm text-white/40 hover:text-[#C5A059] transition-colors">+91 95998 72124</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059]/60 shrink-0" />
                <a href="mailto:info@dhandhara.com" className="text-sm text-white/40 hover:text-[#C5A059] transition-colors">info@dhandhara.com</a>
              </li>
              <li className="flex items-center gap-4 pt-4 mt-2 border-t border-white/10">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white text-white/40 transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white text-white/40 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white text-white/40 transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] hover:text-white text-white/40 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
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
  );
}
