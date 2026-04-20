import React from 'react';

const Stats = () => {
  const stats = [
    { label: "Since", val: "2013", detail: "Legacy" },
    { label: "Fleet", val: "50+", detail: "Heavy Duty" },
    { label: "Projects", val: "500+", detail: "Executed" },
    { label: "Experts", val: "100+", detail: "Workforce" },
  ];

  return (
    <section className="relative bg-[#fcfcfc] py-16 md:py-24 overflow-hidden">
      {/* 🛠️ BACKGROUND TEXTURE: Modern subtle grid */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {stats.map((s, i) => (
            <div 
              key={i} 
              className="relative group overflow-hidden bg-white/70 backdrop-blur-md border border-zinc-200/60 p-6 md:p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FBBF24]/20"
            >
              {/* 🏗️ INDUSTRIAL ACCENT: Corner Numbering */}
              <span className="absolute top-6 right-8 text-[10px] font-black text-zinc-200 group-hover:text-[#FBBF24]/30 transition-colors italic">
                0{i + 1}
              </span>

              {/* ⚡ THE VALUE */}
              <div className="relative mb-2">
                <h2 className="text-4xl md:text-7xl font-[1000] italic tracking-tighter text-black leading-none group-hover:scale-110 transition-transform duration-500 origin-left">
                  {s.val}
                </h2>
                {/* Subtle yellow underline indicator */}
                <div className="w-8 h-1 bg-[#FBBF24] mt-2 rounded-full md:opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16"></div>
              </div>

              {/* 📝 LABELS */}
              <div className="mt-4">
                <p className="text-black text-[11px] md:text-xs font-[900] uppercase tracking-[0.2em]">
                  {s.label}
                </p>
                <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest mt-0.5">
                  {s.detail}
                </p>
              </div>

              {/* 🧨 HOVER GLOW EFFECT (Desktop Only) */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FBBF24]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}

        </div>

        {/* 🏆 FOOTER TAG */}
        <div className="mt-16 flex flex-col items-center">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-zinc-300 to-transparent mb-6"></div>
            <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.6em] text-center leading-loose">
              Setting Industrial Benchmarks <br className="md:hidden"/> Across India
            </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;