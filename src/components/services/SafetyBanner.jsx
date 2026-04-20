import React from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

const SafetyBanner = () => {
  return (
    <section className="bg-[#050505] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative group">
        
        {/* 🚧 INDUSTRIAL ACCENT: Border Stripes (Top & Bottom) */}
        <div className="absolute inset-0 border border-zinc-800 rounded-[2.5rem] group-hover:border-[#FBBF24]/30 transition-colors duration-500"></div>
        
        {/* The Card Container */}
        <div className="relative bg-zinc-900/40 backdrop-blur-xl p-8 md:p-16 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
          
          {/* Animated Background Icon */}
          <AlertTriangle className="absolute -right-10 -bottom-10 text-white/[0.02] -rotate-12 pointer-events-none" size={300} />

          {/* Left: Info Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-left z-10">
            <div className="relative">
              <div className="p-6 bg-black rounded-[2rem] text-[#FBBF24] shadow-2xl border border-zinc-800 relative z-10 group-hover:scale-110 transition-transform duration-500">
                <ShieldAlert size={48} />
              </div>
              {/* Pulse Effect Around Icon */}
              <div className="absolute inset-0 bg-[#FBBF24]/20 blur-2xl rounded-full animate-pulse pointer-events-none"></div>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FBBF24] px-3 py-1 rounded-md mb-4">
                <span className="text-[10px] font-black uppercase text-black italic">Site Security 101</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-white leading-none">
                Zero-Accident <br /> <span className="text-zinc-500 italic">Mandate.</span>
              </h3>
              <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-[0.3em] mt-4 flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 size={14} className="text-[#FBBF24]" /> ISO 45001:2018 Certified Protocols
              </p>
            </div>
          </div>

          {/* Right: Tactical Points & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-8 z-10">
            <div className="hidden md:flex flex-col gap-3">
              {['PPE Mandatory', '24/7 Monitoring', 'Safe Excavation'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                   <div className="h-px w-4 bg-[#FBBF24]"></div>
                   <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <button className="relative group/btn bg-[#FBBF24] text-black px-12 py-5 rounded-2xl font-[1000] uppercase tracking-widest text-xs overflow-hidden shadow-[0_20px_40px_-10px_rgba(251,191,36,0.3)] transition-all hover:scale-105">
              <span className="relative z-10">Safety Standards</span>
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

        </div>
      </div>

      {/* Industrial "Danger" Stripe logic for mobile view compact feel */}
      <style>
        {`
          .danger-stripes {
            background: repeating-linear-gradient(
              45deg,
              #fbbf24,
              #fbbf24 10px,
              #000 10px,
              #000 20px
            );
          }
        `}
      </style>
    </section>
  );
};

export default SafetyBanner;