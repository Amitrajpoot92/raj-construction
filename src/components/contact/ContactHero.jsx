import React from 'react';
import { ChevronRight, MessageSquare, ArrowDown, Calendar } from 'lucide-react';

const ContactHero = () => {
  
  // 🚀 fail-proof Smooth Scroll Logic
  const handleScroll = () => {
    // Laptop view mein form takriban 800-1000px niche hota hai
    // Hum "contact-form" ID ko dhundenge, agar nahi mili toh 900px scroll kar denge
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-[#050505] pt-20 overflow-hidden border-b border-zinc-900">
      
      {/* 🌑 DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] text-[18vw] font-[1000] italic pointer-events-none select-none tracking-tighter uppercase">
          Contact
        </div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#FBBF24]/5 blur-[120px] rounded-full opacity-60"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* 🚀 BREADCRUMB */}
        <div className="flex items-center gap-2 mb-12 opacity-60">
          <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Raj Construction</span>
          <ChevronRight size={12} className="text-zinc-700" />
          <span className="text-[#FBBF24] text-[9px] font-black uppercase tracking-widest">Inquiry Portal</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT: Massive Typography */}
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-xl mb-8">
              <div className="w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse"></div>
              <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">Available for deployment</span>
            </div>
            
            <h1 className="text-7xl md:text-[140px] font-[1000] italic tracking-tighter text-white uppercase leading-[0.75] mb-8">
              Let's <br /> 
              <span className="text-[#FBBF24] drop-shadow-[0_10px_40px_rgba(251,191,36,0.2)]">Connect.</span>
            </h1>

            <p className="text-zinc-500 text-lg md:text-xl max-w-xl font-bold uppercase tracking-tight leading-snug italic border-l-4 border-[#FBBF24] pl-8 mb-12">
              Every iconic project starts with a single handshake. Discussion is the first step to <span className="text-white">Industrial excellence.</span>
            </p>
          </div>

          {/* RIGHT: Action & Scroll Button (Laptop view fixed) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end pb-10">
            <button 
              onClick={handleScroll}
              className="group relative flex items-center justify-between w-full lg:w-[280px] bg-[#FBBF24] text-black p-1 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 hover:shadow-[0_20px_50px_rgba(251,191,36,0.3)]"
            >
              <div className="px-6 py-5 flex items-center gap-3">
                <Calendar size={18} />
                <span>Book Service</span>
              </div>
              <div className="w-14 h-14 bg-black text-[#FBBF24] rounded-xl flex items-center justify-center group-hover:scale-95 transition-transform">
                 <ArrowDown size={20} className="group-hover:animate-bounce" />
              </div>
            </button>
            
            <p className="mt-6 text-[8px] font-black text-zinc-600 uppercase tracking-[0.5em] hidden lg:block mr-4">
              Direct site inquiry
            </p>
          </div>

        </div>
      </div>

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