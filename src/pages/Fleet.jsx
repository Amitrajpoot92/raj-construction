import React, { useEffect } from 'react';
import FleetHero from '../components/fleet/FleetHero';
import FleetFilter from '../components/fleet/FleetFilter';
import WorkGrid from '../components/fleet/WorkGrid'; // Ensure the name matches your file

const Fleet = () => {
  // 🚀 Force Scroll to Top on Page Load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen relative overflow-hidden">
      
      {/* 🏗️ BACKGROUND GRAPHICS: Portfolio Weight */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Massive Ghost Typography behind grid */}
        <div className="absolute -right-20 top-1/4 text-zinc-100/40 text-[20vw] font-[1000] rotate-90 select-none leading-none tracking-tighter">
          PROJECTS
        </div>
        
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        {/* Tactical Corner Accent */}
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-black/5 to-transparent"></div>
      </div>

      {/* 🚀 HERO SECTION (Dark Branding) */}
      <div className="relative z-20">
        <FleetHero />
      </div>

      {/* 🛠️ FILTER BAR (Sticky Dashboard) */}
      <div className="relative z-30">
        <FleetFilter />
      </div>

      {/* 📂 WORK GRID (Portfolio Content) */}
      <div className="relative z-10 max-w-7xl mx-auto py-10">
        {/* Header decoration for the grid */}
        <div className="px-6 mb-12 flex items-center gap-4">
           <div className="h-[2px] w-12 bg-[#FBBF24]"></div>
           <p className="text-zinc-400 text-[10px] font-[1000] uppercase tracking-[0.5em]">Selected Case Studies</p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
           <WorkGrid />
        </div>
      </div>

      {/* 🏆 FINAL CALL TO ACTION (Optional Bottom Accent) */}
      <div className="py-20 flex flex-col items-center justify-center border-t border-zinc-100 bg-white">
         <div className="w-1 h-12 bg-gradient-to-b from-[#FBBF24] to-transparent mb-6"></div>
         <p className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.6em]">End of Portfolio</p>
      </div>

    </div>
  );
};

export default Fleet;