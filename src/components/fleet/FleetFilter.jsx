import React, { useState } from 'react';

const FleetFilter = () => {
  // Tags ko exactly vahi rakho jo niche IDs mein use karoge
  const categories = [
    { name: "All Work", id: "all-work" },
    { name: "Mining", id: "mining" },
    { name: "Highway", id: "highway" },
    { name: "Electrical", id: "electrical" },
    { name: "Civil", id: "civil" }
  ];
  
  const [active, setActive] = useState(0);

  const handleScroll = (id, index) => {
    setActive(index);
    const element = document.getElementById(id);
    if (element) {
      // Offset calculate kar rahe hain taki Sticky Header ke niche na chhup jaye
      const offset = 120; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="sticky top-20 z-40 w-full bg-[#050505]/80 backdrop-blur-xl border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-6 scroll-smooth">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => handleScroll(cat.id, i)}
                className={`relative whitespace-nowrap px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 group
                  ${active === i ? 'text-black' : 'text-zinc-500 hover:text-zinc-200'}`}
              >
                {active === i && (
                  <div className="absolute inset-0 bg-[#FBBF24] rounded-xl z-0 shadow-[0_0_20px_rgba(251,191,36,0.2)]"></div>
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 border-l border-zinc-800 pl-8 py-4">
             <div className="text-right">
                <p className="text-zinc-600 text-[8px] font-black uppercase tracking-widest leading-none">Total Impact</p>
                <p className="text-white text-lg font-black italic">500+</p>
             </div>
             <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                <div className="w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetFilter;