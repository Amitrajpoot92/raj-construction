import React from 'react';
import { Mountain, Route, Zap, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Images Import
import s1 from '../../assets/s1.webp'; // Mining
import s2 from '../../assets/s2.webp'; // Highway
import s4 from '../../assets/s4.webp'; // Electrical
import s5 from '../../assets/s5.webp'; // Civil

const ServicesOverview = () => {
  const services = [
    { 
      title: "Mining & Excavation", 
      icon: <Mountain size={24}/>, 
      img: s1,
      tag: "Grade-A Contractor",
      accent: "hover:border-orange-500/50",
      glow: "group-hover:bg-orange-500/10"
    },
    { 
      title: "Highway & Roads", 
      icon: <Route size={24}/>, 
      img: s2,
      tag: "Mega Projects",
      accent: "hover:border-blue-500/50",
      glow: "group-hover:bg-blue-500/10"
    },
    { 
      title: "Electrical & Lights", 
      icon: <Zap size={24}/>, 
      img: s5,
      tag: "Urban Utility",
      accent: "hover:border-yellow-500/50",
      glow: "group-hover:bg-yellow-500/10"
    },
    { 
      title: "Civil Construction", 
      icon: <Hammer size={24}/>, 
      img: s4,
      tag: "Infrastructure",
      accent: "hover:border-emerald-500/50",
      glow: "group-hover:bg-emerald-500/10"
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 text-left">
          <div className="max-w-2xl">
            <p className="text-[#FBBF24] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Core Expertise</p>
            <h2 className="text-5xl md:text-7xl font-[1000] italic tracking-tighter text-black uppercase leading-[0.85]">
              Industrial <br /> <span className="text-zinc-300">Powerhouse.</span>
            </h2>
          </div>
          <Link to="/services" className="bg-black text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#FBBF24] hover:text-black transition-all duration-500">
            View All Services
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-zinc-200 transition-all duration-700 hover:-translate-y-4 ${s.accent} shadow-xl hover:shadow-2xl`}
            >
              {/* 🖼️ BACKGROUND IMAGE */}
              <img 
                src={s.img} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* 🌑 DYNAMIC OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${s.glow}`}></div>

              {/* 📄 CONTENT LAYER */}
              <div className="relative h-full p-8 flex flex-col justify-between z-10 text-left">
                {/* Top Part */}
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded-lg border border-white/10 mb-4">
                    {s.tag}
                  </span>
                </div>

                {/* Bottom Part */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-12 h-12 bg-[#FBBF24] rounded-xl flex items-center justify-center text-black mb-4 shadow-lg">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-[1000] italic uppercase tracking-tighter text-white mb-2 leading-none">
                    {s.title}
                  </h3>
                  <div className="h-1 w-0 bg-[#FBBF24] rounded-full transition-all duration-500 group-hover:w-full mb-4"></div>
                  
                  <div className="flex items-center gap-2 text-[10px] font-black text-[#FBBF24] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;