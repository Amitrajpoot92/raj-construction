import React from 'react';
import { ArrowUpRight, MapPin, Calendar, CheckCircle, Hammer } from 'lucide-react';

// Images Import
import s1 from '../../assets/s1.webp'; 
import s2 from '../../assets/s2.webp'; 
import s4 from '../../assets/s4.webp'; 

const WorkGrid = () => {
  const projects = [
    {
      id: "mining", // Filter ID se match hona chahiye
      name: "Open-Cast Mining Operation",
      client: "Coal India Partner",
      location: "Singrauli Region",
      year: "2024",
      img: s1,
      tag: "Mining"
    },
    {
      id: "highway", // Filter ID se match hona chahiye
      name: "NH-Highway Expansion",
      client: "NHAI Project",
      location: "Gorakhpur - Basti Route",
      year: "2025",
      img: s2,
      tag: "Infrastructure"
    },
    {
      id: "electrical", // Filter ID se match hona chahiye
      name: "Smart City Street Lighting",
      client: "Municipal Corporation",
      location: "Raipur Urban",
      year: "2023",
      img: s4,
      tag: "Electrical"
    },
    {
      id: "civil", // Filter ID se match hona chahiye
      name: "Excavation & Site Prep",
      client: "Private Industrial Hub",
      location: "Sant Kabir Nagar",
      year: "2024",
      img: s1,
      tag: "Civil Work"
    }
  ];

  return (
    <section id="all-work" className="bg-[#fcfcfc] py-24 relative overflow-hidden">
      {/* 🏗️ Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          
          {projects.map((p, i) => (
            <div 
              key={i} 
              id={p.id} // 👈 Scroll Target ID
              className="scroll-mt-32 group bg-white rounded-[3rem] overflow-hidden border border-zinc-100 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
            >
              
              {/* PROJECT IMAGE */}
              <div className="h-80 md:h-[450px] overflow-hidden relative">
                <img 
                  src={p.img} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={p.name}
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-8 left-8">
                  <span className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-md shadow-xl text-black">
                    <Hammer size={12} className="text-[#FBBF24]" />
                    {p.tag}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-8 right-8">
                   <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center min-w-[70px]">
                      <p className="text-[#FBBF24] text-xs font-black leading-none">{p.year}</p>
                      <p className="text-white/40 text-[8px] font-bold uppercase mt-1">Project</p>
                   </div>
                </div>

                {/* Bottom Soft Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
              </div>
              
              {/* CONTENT AREA */}
              <div className="p-10 md:p-14 text-left">
                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin size={14} className="text-[#FBBF24]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">{p.location}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-[1000] italic text-black tracking-tighter leading-[0.9] uppercase">
                    {p.name}
                  </h3>
                </div>
                
                {/* Client & Verification Row */}
                <div className="flex flex-wrap items-center gap-6 py-6 border-y border-zinc-50 mb-10">
                  <div className="flex flex-col">
                    <span className="text-zinc-400 text-[8px] font-black uppercase tracking-widest mb-1">Lead Client</span>
                    <span className="text-black text-sm font-bold">{p.client}</span>
                  </div>
                  <div className="h-8 w-px bg-zinc-100"></div>
                  <div className="flex items-center gap-2 bg-zinc-50 px-4 py-2 rounded-xl">
                    <CheckCircle size={14} className="text-[#FBBF24]" />
                    <span className="text-[9px] font-black text-zinc-500 uppercase">Site Verified</span>
                  </div>
                </div>

                {/* CTA BUTTON */}
                <button className="group/btn relative flex items-center justify-between w-full bg-black text-white p-2 pl-8 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-500 hover:bg-[#FBBF24] hover:text-black shadow-xl shadow-black/10">
                  <span>View Full Case Study</span>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all group-hover/btn:bg-black/5">
                    <ArrowUpRight size={20} className="transition-transform duration-500 group-hover/btn:rotate-45" />
                  </div>
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* 🏆 Bottom Tagline */}
        <div className="mt-24 flex flex-col items-center">
            <div className="h-px w-32 bg-zinc-200 mb-8"></div>
            <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.8em] text-center">
              Our Legacy Is Written In Concrete
            </p>
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;