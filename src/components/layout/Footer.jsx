import React from "react";
import { Link } from "react-router-dom";
import { Phone, Zap, Shield, Globe, LayoutGrid, Instagram, Facebook, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Fleet", path: "/fleet" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  // ✅ All Social Links Balanced (WP Added)
  const socials = [
    { 
      name: "WhatsApp Business", 
      icon: <MessageSquare size={18} />, 
      link: "https://wa.me/918382099713" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={18} />, 
      link: "https://www.instagram.com/rajenterprisesconstruction?utm_source=qr&igsh=MWZuanp2c28yOTJ5ag%3D%3D" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={18} />, 
      link: "https://www.facebook.com/profile.php?id=61586290622589" 
    },
  ];

  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 md:pt-20 pb-8 relative overflow-hidden">
      {/* 🎨 ARCHITECTURAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-16 mb-16">
          
          {/* 1. BRAND & VISION */}
          <div className="md:col-span-5 space-y-8 text-left">
            <div>
              <Link to="/" className="inline-block group">
                <h2 className="text-black text-3xl font-[1000] italic tracking-tighter uppercase leading-none">
                  RAJ <span className="text-[#FBBF24] group-hover:text-black transition-colors">CONSTRUCTION</span>
                </h2>
                <p className="text-[10px] font-black tracking-[0.5em] text-zinc-300 mt-2">ESTABLISHED 2013</p>
              </Link>
            </div>
            
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-sm">
              A powerhouse in North India's infrastructure, delivering <span className="text-black underline decoration-[#FBBF24] decoration-2 underline-offset-4">Grade-A mining</span> and heavy logistics solutions from the heart of Uttar Pradesh.
            </p>

            {/* LOCATION HIGHLIGHT */}
            <div className="flex items-center gap-3 text-black">
              <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center border border-zinc-100 shadow-sm">
                <MapPin size={18} className="text-[#FBBF24]" />
              </div>
              <div className="text-left">
                <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400 leading-none mb-1">Regional HQ</p>
                <p className="text-xs font-[1000] uppercase italic">Lucknow, Uttar Pradesh</p>
              </div>
            </div>

            {/* 🌐 BALANCED SOCIALS (All Icons Equal) */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-black text-white rounded-2xl flex items-center justify-center hover:bg-[#FBBF24] hover:text-black hover:-translate-y-1 transition-all duration-500 shadow-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-black font-[1000] mb-8 text-[10px] uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#FBBF24]"></span> Directory
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.path} 
                    className="text-zinc-400 hover:text-black text-[11px] font-black uppercase tracking-widest transition-all inline-flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 rounded-sm border border-zinc-200 group-hover:bg-[#FBBF24] group-hover:border-[#FBBF24] transition-all rotate-45"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT CARD (With Primary No) */}
          <div className="md:col-span-4">
             <h3 className="text-black font-[1000] mb-8 text-[10px] uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#FBBF24]"></span> Instant Connect
            </h3>
            <div className="bg-zinc-950 p-6 rounded-[2.5rem] relative group overflow-hidden shadow-2xl">
               <div className="relative z-10 flex items-center justify-between">
                  <div className="text-left">
                     <p className="text-[8px] font-black text-[#FBBF24] uppercase tracking-[0.3em] mb-1">On-Call Support</p>
                     <p className="text-xl font-[1000] text-white tracking-tighter italic">+91 83820 99713</p>
                  </div>
                  <a href="tel:8382099713" className="w-12 h-12 bg-[#FBBF24] text-black rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-xl">
                      <Phone size={20} />
                  </a>
               </div>
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FBBF24] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
            </div>
          </div>
        </div>

        {/* 🚀 SIGNATURE FOOTER BAR */}
        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.4em]">
               &copy; {new Date().getFullYear()} Raj Construction Company <span className="text-zinc-200 ml-2">|</span> <span className="text-black">Privacy Policy</span>
             </p>
          </div>

          {/* DEVELOPER BRANDING */}
          <div className="group flex items-center gap-5 bg-zinc-50 px-8 py-4 rounded-[2rem] border border-zinc-100 transition-all hover:bg-black hover:border-black">
             <div className="flex flex-col items-end">
                <span className="text-zinc-400 text-[7px] font-black uppercase tracking-[0.5em] leading-none mb-1">Digital Partner</span>
                <a href="https://codewebx.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                   <span className="text-black font-[1000] text-sm tracking-tighter group-hover:text-white transition-colors">CODEWEBX</span>
                   <span className="text-[#FBBF24] font-black text-sm">.IN</span>
                </a>
             </div>
             <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:bg-[#FBBF24] transition-all">
                <Zap size={18} className="text-[#FBBF24] group-hover:text-black transition-colors" />
             </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <Shield size={12} className="text-[#FBBF24]" />
                <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest">ISO Certified</span>
             </div>
             <Link to="/admin/login" className="text-zinc-300 hover:text-black text-[9px] font-black uppercase tracking-[0.4em] transition-colors">
               Admin Access
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;