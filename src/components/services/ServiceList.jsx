import React from 'react';
import { Mountain, Route, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

// Images Import
import s1 from '../../assets/s1.webp'; 
import s2 from '../../assets/s2.webp'; 
import s4 from '../../assets/s4.webp'; 

const ServiceList = () => {
  const services = [
    {
      title: "Mining Operations",
      desc: "Full-scale excavation and mineral extraction logistics using heavy-duty machinery. We handle high-volume earthmoving with precision and safety.",
      icon: <Mountain size={28} />,
      img: s1,
      accent: "border-zinc-100",
      iconBg: "bg-black text-[#FBBF24]",
      points: ["Open-pit Mining", "Site Preparation", "Mineral Transport", "Overburden Removal"]
    },
    {
      title: "Highway & Infrastructure",
      desc: "Comprehensive support for highway, bridge, and industrial construction projects. From grading to final paving, we deliver quality foundations.",
      icon: <Route size={28} />,
      img: s2,
      accent: "border-zinc-100",
      iconBg: "bg-black text-[#FBBF24]",
      points: ["Earthmoving", "Debris Clearance", "Material Handling", "Road Paving"]
    },
    {
      title: "Smart Street Lighting",
      desc: "Specialized electrical contracts for urban utility. We install modern LED street lighting systems and manage smart city power grids.",
      icon: <Zap size={28} />,
      img: s4,
      accent: "border-zinc-100",
      iconBg: "bg-black text-[#FBBF24]",
      points: ["LED Installation", "Smart Grid Setup", "Maintenance Contracts", "Industrial Wiring"]
    }
  ];

  return (
    <section className="bg-[#fcfcfc] py-24 relative overflow-hidden">
      {/* 🏗️ Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title - FIXED VISIBILITY */}
        <div className="mb-24 text-left border-l-4 border-[#FBBF24] pl-8">
          <p className="text-[#FBBF24] text-[10px] font-[1000] uppercase tracking-[0.5em] mb-4">Detailed Solutions</p>
          <h2 className="text-5xl md:text-8xl font-[1000] italic tracking-tighter text-black uppercase leading-[0.8]">
            Deep Dive <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400">Capabilities.</span>
          </h2>
        </div>

        {/* Services Stack (Vertical list of big cards) */}
        <div className="space-y-20">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`group relative bg-white border ${s.accent} rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]`}
            >
              {/* Image Side (Half Width) */}
              <div className="w-full lg:w-1/2 h-[350px] lg:h-[550px] overflow-hidden relative">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                {/* Image Overlay for Depth */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col justify-center text-left relative">
                
                {/* Floating Icon */}
                <div className={`w-20 h-20 ${s.iconBg} rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transition-transform group-hover:-rotate-12 duration-500`}>
                  {s.icon}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-[1000] italic text-black uppercase tracking-tighter mb-8 leading-none">
                  {s.title}
                </h3>
                
                <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed mb-12 max-w-lg">
                  {s.desc}
                </p>

                {/* Points Grid - Weighted UI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-4">
                  {s.points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-zinc-50 rounded-lg flex items-center justify-center text-[#FBBF24]">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className="text-[10px] md:text-[11px] font-black text-zinc-800 uppercase tracking-widest leading-none">{p}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Corner Arrow */}
                <div className="absolute bottom-12 right-12 w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-200 group-hover:text-black group-hover:bg-[#FBBF24] transition-all duration-500 cursor-pointer">
                   <ArrowUpRight size={30} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;