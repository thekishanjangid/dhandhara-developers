import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[200] flex flex-col gap-2.5">
      <a href="https://wa.me/919599872124?text=Hello%20Dhan%20Dhara%20Developers!%20I%20am%20interested%20in%20knowing%20more%20about%20your%20projects." target="_blank" rel="noopener noreferrer"
        id="wa-float"
        className="group flex items-center overflow-hidden rounded-full transition-all duration-400"
        style={{
          background: "#25D366",
          color: "white",
          boxShadow: "0 6px 28px rgba(37,211,102,0.35)",
        }}>
        <div className="p-3.5 shrink-0">
          <WhatsAppIcon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase whitespace-nowrap overflow-hidden transition-all duration-400 max-w-0 opacity-0 pr-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:pr-4">
          WhatsApp
        </span>
      </a>

      <a href="tel:+919599872124" id="call-float"
        className="group flex items-center overflow-hidden rounded-full transition-all duration-400 btn-gold">
        <div className="p-3.5 shrink-0">
          <Phone className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase whitespace-nowrap overflow-hidden transition-all duration-400 max-w-0 opacity-0 pr-0 group-hover:max-w-[80px] group-hover:opacity-100 group-hover:pr-4">
          Call Now
        </span>
      </a>
    </div>
  );
}
