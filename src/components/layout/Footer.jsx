import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowUpRight, Shield, Zap, Globe, LayoutGrid } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Fleet", path: "/fleet" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-zinc-100 pt-12 pb-6 relative overflow-hidden">
      {/* 🎨 ARCHITECTURAL GRAPHICS */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-4 opacity-[0.05] pointer-events-none hidden md:block">
        <LayoutGrid size={200} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12 mb-12">
          
          {/* 1. BRAND IDENTITY (Industrial & Bold) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block group">
              <h2 className="text-black text-2xl font-[1000] italic tracking-tighter uppercase leading-none">
                RAJ <span className="text-[#FBBF24] group-hover:text-black transition-colors">CONSTRUCTION</span>
              </h2>
              <div className="h-1 w-0 group-hover:w-full bg-[#FBBF24] transition-all duration-500 mt-1"></div>
            </Link>
            
            <p className="text-zinc-500 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] leading-relaxed max-w-sm">
              Premium infrastructure solutions specializing in mining and heavy logistics across the <span className="text-black underline decoration-[#FBBF24] decoration-2 underline-offset-4">Belt of North India</span>.
            </p>

            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg">
                  <Shield size={12} className="text-[#FBBF24]" />
                  <span className="text-[8px] font-[1000] uppercase text-zinc-600 tracking-widest">ISO 9001</span>
               </div>
               <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg">
                  <Globe size={12} className="text-[#FBBF24]" />
                  <span className="text-[8px] font-[1000] uppercase text-zinc-600 tracking-widest">Region Focus: UP/BIHAR</span>
               </div>
            </div>
          </div>

          {/* 2. MINIMALIST NAVIGATION (Organized Grid) */}
          <div className="md:col-span-3">
            <h3 className="text-black font-[1000] mb-6 text-[10px] uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#FBBF24]"></span> Quick Access
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.path} 
                    className="text-zinc-400 hover:text-black text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-100 group-hover:bg-[#FBBF24] transition-colors"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT CARD (Compact & High Contrast) */}
          <div className="md:col-span-4">
            <div className="bg-black p-5 rounded-[2rem] border border-black relative group overflow-hidden shadow-2xl">
               <div className="relative z-10 flex items-center justify-between">
                  <div className="space-y-1">
                     <p className="text-[8px] font-black text-[#FBBF24] uppercase tracking-[0.3em]">Direct Support</p>
                     <p className="text-xl font-[1000] text-white tracking-tighter italic">+91 83050 31020</p>
                  </div>
                  <a href="tel:8305031020" className="w-12 h-12 bg-[#FBBF24] text-black rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                     <Phone size={20} />
                  </a>
               </div>
               {/* Background Glow */}
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FBBF24] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
            </div>
          </div>
        </div>

        {/* 🚀 SIGNATURE BAR: CodeWebX Branding (High Visibility) */}
        <div className="mt-8 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.4em]">
               &copy; {new Date().getFullYear()} Raj Construction <span className="text-zinc-200">|</span> All Rights Reserved
             </p>
          </div>

          {/* CODEWEBX BRANDING: Bold & Modern */}
          <div className="group flex items-center gap-4 bg-black px-6 py-3 rounded-2xl border border-zinc-900 shadow-xl transition-all hover:border-[#FBBF24]/50">
             <div className="flex flex-col items-end">
                <span className="text-zinc-500 text-[7px] font-black uppercase tracking-[0.4em] leading-none mb-1">Developed By</span>
                <a 
                   href="https://codewebx.in" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-1.5"
                >
                   <span className="text-white font-[1000] text-xs tracking-tighter group-hover:text-[#FBBF24] transition-colors">CODEWEBX</span>
                   <span className="text-[#FBBF24] font-black text-xs">.IN</span>
                </a>
             </div>
             <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Zap size={16} className="text-[#FBBF24] fill-[#FBBF24]" />
             </div>
          </div>

          <div className="hidden md:block">
             <Link to="/admin/login" className="text-zinc-300 hover:text-black text-[9px] font-black uppercase tracking-[0.4em] transition-colors">
               Staff Portal
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;