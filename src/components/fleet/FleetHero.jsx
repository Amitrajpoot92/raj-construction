import React from 'react';
import { Map, Briefcase, ChevronRight } from 'lucide-react';

const FleetHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#050505] pt-20 overflow-hidden border-b border-zinc-900">
      
      {/* 🌑 DYNAMIC BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0">
        {/* Large Faded 'WORK' Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] text-[20vw] font-[1000] italic pointer-events-none select-none">
          PORTFOLIO
        </div>
        {/* Subtle Yellow Glow */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FBBF24]/5 blur-[100px] rounded-full"></div>
        {/* Engineering Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* 🚀 BREADCRUMB */}
        <div className="flex items-center gap-2 mb-10 opacity-60">
          <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Raj Construction</span>
          <ChevronRight size={12} className="text-zinc-700" />
          <span className="text-[#FBBF24] text-[9px] font-black uppercase tracking-widest">Our Work Portfolio</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT: Main Heading */}
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-xl mb-6">
              <Briefcase size={14} className="text-[#FBBF24]" />
              <span className="text-zinc-400 text-[10px] font-[900] uppercase tracking-[0.3em]">Execution Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-[110px] font-[1000] italic tracking-tighter text-white uppercase leading-[0.8] mb-8">
              Proven <br /> 
              <span className="text-[#FBBF24] drop-shadow-[0_10px_30px_rgba(251,191,36,0.2)]">Impact.</span>
            </h1>
            
            <p className="text-zinc-500 text-base md:text-lg max-w-lg font-medium italic border-l-2 border-[#FBBF24] pl-6 mb-2">
              "From complex mining terrains in <span className="text-white">Singrauli</span> to smart utility grids in <span className="text-white">Raipur</span>. We deliver results, not just promises."
            </p>
          </div>

          {/* RIGHT: Compact Project Stats (Vertical) */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/50 p-8 rounded-[2.5rem] relative overflow-hidden group">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-4xl font-[1000] italic text-white leading-none">500+</span>
                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mt-2">Projects Done</span>
                  </div>
                  <Map size={32} className="text-[#FBBF24] opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="h-px bg-zinc-800/50 w-full"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#FBBF24] text-xl font-black italic">UP</p>
                    <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Primary Base</p>
                  </div>
                  <div>
                    <p className="text-white text-xl font-black italic">BIHAR</p>
                    <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Expansion</p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Line */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#FBBF24]/20 rounded-br-[2.5rem]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FleetHero;