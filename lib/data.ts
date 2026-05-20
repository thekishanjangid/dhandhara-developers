import {
  Building2, Users, Award, ShieldCheck,
  Route, Zap, Droplet, TreePine, Shield, Landmark
} from "lucide-react";

export const heroSlides = [
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
    cta2: { label: "WhatsApp Enquiry", href: "https://wa.me/919599872124?text=Hello%20Dhan%20Dhara%20Developers!%20I%20am%20interested%20in%20knowing%20more%20about%20your%20projects." },
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

export const projects = [
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

export const stats = [
  { number: 15, suffix: "+", label: "Delivered Projects", icon: Building2 },
  { number: 3500, suffix: "+", label: "Happy Families", icon: Users },
  { number: 18, suffix: " Yrs", label: "Of Excellence", icon: Award },
  { number: 100, suffix: "%", label: "JDA Approved", icon: ShieldCheck },
];

export const amenities = [
  { icon: Route,    title: "40ft Wide Roads",      desc: "Smooth damar roads with footpaths on both sides" },
  { icon: Zap,      title: "Underground Electric", desc: "Clutter-free underground electrical cabling" },
  { icon: Droplet,  title: "Water Pipeline",       desc: "Dedicated water line to every individual plot" },
  { icon: TreePine, title: "Landscaped Parks",     desc: "Architect-designed green community gardens" },
  { icon: Shield,   title: "24/7 Security",        desc: "Gated entry with CCTV surveillance & guards" },
  { icon: Landmark, title: "Boundary Wall",        desc: "Full perimeter compound wall on all four sides" },
];

export const testimonials = [
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
