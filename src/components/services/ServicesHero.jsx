import React from 'react';
import { Construction, ArrowRight, Settings, ShieldCheck } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-[#050505] overflow-hidden border-b border-zinc-900">
      
      {/* 🌑 CINEMATIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        {/* Large Faded Icon for Texture */}
        <div className="absolute -bottom-20 -right-20 text-white/[0.02] rotate-12 pointer-events-none">
          <Construction size={600} />
        </div>
        {/* Subtle Glow behind the text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FBBF24]/5 blur-[120px] rounded-full opacity-50"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT: 7 Columns */}
          <div className="lg:col-span-8 text-left">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-3 border border-zinc-800 bg-zinc-900/50 px-4 py-2 rounded-full mb-8">
              <Settings size={14} className="text-[#FBBF24] animate-spin-slow" />
              <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em]">Full-Scale Infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-[100px] font-[1000] italic tracking-tighter text-white uppercase leading-[0.8] mb-8">
              Expert <br /> 
              <span className="text-[#FBBF24] drop-shadow-[0_10px_30px_rgba(251,191,36,0.3)]">Services.</span>
            </h1>
            
            <p className="text-zinc-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed italic border-l-2 border-zinc-800 pl-6 mb-10">
              "Redefining <span className="text-white">Mining</span>, <span className="text-white">Roadways</span>, and <span className="text-white">Urban Utility</span> with Grade-A engineering and a massive fleet."
            </p>

            {/* Quick Actions / Indicators */}
            <div className="flex flex-wrap gap-8 opacity-50">
               <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#FBBF24]" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Govt. Approved</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">ISO Certified</span>
               </div>
            </div>
          </div>

          {/* RIGHT STATS/INDICATOR: 4 Columns (Compact) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-zinc-900/30 backdrop-blur-xl border border-zinc-800 p-10 rounded-[3rem] relative overflow-hidden group">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FBBF24]"></div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black italic text-white leading-none mb-2">A-Class</h3>
                  <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Contractor License</p>
                </div>
                <div className="h-px bg-zinc-800 w-full"></div>
                <div>
                  <h3 className="text-4xl font-black italic text-[#FBBF24] leading-none mb-2">24/7</h3>
                  <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">On-Site Operations</p>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <ArrowRight className="absolute bottom-6 right-6 text-zinc-800 group-hover:text-[#FBBF24] transition-colors" size={40} />
            </div>
          </div>

        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesHero;