import React from 'react';
import { ChevronRight, MessageSquare, ArrowDown } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[65vh] flex items-center bg-[#050505] pt-20 overflow-hidden border-b border-zinc-900">
      
      {/* 🌑 DYNAMIC BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0">
        {/* Large Ghost Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] text-[18vw] font-[1000] italic pointer-events-none select-none tracking-tighter">
          CONTACT
        </div>
        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#FBBF24]/5 blur-[120px] rounded-full opacity-60"></div>
        {/* Engineering Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* 🚀 BREADCRUMB */}
        <div className="flex items-center gap-2 mb-10 opacity-60">
          <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Raj Construction</span>
          <ChevronRight size={12} className="text-zinc-700" />
          <span className="text-[#FBBF24] text-[9px] font-black uppercase tracking-widest">Inquiry Portal</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Massive Typography */}
          <div className="lg:col-span-9 text-left">
            <div className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-xl mb-8">
              <MessageSquare size={14} className="text-[#FBBF24]" />
              <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">Ready for New Tenders</span>
            </div>
            
            <h1 className="text-6xl md:text-[120px] font-[1000] italic tracking-tighter text-white uppercase leading-[0.8] mb-10">
              Let's <br /> 
              <span className="text-[#FBBF24] drop-shadow-[0_10px_40px_rgba(251,191,36,0.3)]">Discuss.</span>
            </h1>
            
            <p className="text-zinc-500 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed italic border-l-2 border-zinc-800 pl-8">
              "Every iconic project starts with a single handshake. <span className="text-white">Reach out</span> to discuss your infrastructure needs today."
            </p>
          </div>

          {/* RIGHT: Floating Decorative Indicator (Compact) */}
          <div className="lg:col-span-3 hidden lg:flex flex-col items-end">
            <div className="relative group">
               {/* Spinning Outer Ring */}
               <div className="w-32 h-32 border border-zinc-800 rounded-full animate-spin-slow flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#FBBF24] absolute top-0 rounded-full shadow-[0_0_10px_#FBBF24]"></div>
               </div>
               {/* Center Arrow */}
               <div className="absolute inset-0 flex items-center justify-center text-zinc-800 group-hover:text-[#FBBF24] transition-colors">
                  <ArrowDown size={32} className="animate-bounce" />
               </div>
            </div>
            <p className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.5em] mt-8 mr-4">Scroll to Form</p>
          </div>

        </div>
      </div>

      {/* Animation Logic */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ContactHero;