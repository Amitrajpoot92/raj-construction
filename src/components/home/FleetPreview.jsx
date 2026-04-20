import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Images Import
import s1 from '../../assets/s1.webp'; 
import s2 from '../../assets/s2.webp'; 
import s4 from '../../assets/s4.webp'; 
// Note: Agar s5 file nahi hai, toh s4 ya s1 ko hi use kar lo fallback ke liye
import s5 from '../../assets/s1.webp'; 

const ProjectsPreview = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { title: "Open-Cast Mining Operation", location: "Singrauli Region", year: "2024", img: s1, tag: "Mining" },
    { title: "NH-Highway Expansion", location: "Gorakhpur Route", year: "2025", img: s2, tag: "Infrastructure" },
    { title: "Smart City Street Lighting", location: "Raipur Urban", year: "2023", img: s4, tag: "Electrical" },
    { title: "Industrial Warehouse Park", location: "Basti Hub", year: "2024", img: s5, tag: "Civil" },
    { title: "Expressway Electrification", location: "Lucknow Outer", year: "2025", img: s2, tag: "Electrical" },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-[#FBBF24]"></div>
              <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.5em]">Our Legacy</p>
            </div>
            <h2 className="text-5xl md:text-8xl font-[1000] italic tracking-tighter text-black uppercase leading-[0.8]">
              Proven <br /> <span className="text-[#FBBF24]">Projects.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs font-medium leading-relaxed italic">
            "Delivering high-stakes infrastructure across North India with precision and speed."
          </p>
        </div>

        {/* Projects Layout */}
        <div className="space-y-12 md:space-y-32">
          {visibleProjects.map((proj, i) => (
            <div 
              key={i} 
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-center group`}
            >
              <div className="relative w-full md:w-3/5 aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-2xl">
                <img 
                  src={proj.img} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={proj.title}
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full">
                  <span className="text-black text-[10px] font-black uppercase tracking-widest">{proj.tag}</span>
                </div>
              </div>

              <div className="w-full md:w-2/5 text-left">
                <div className="flex items-center gap-4 text-zinc-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#FBBF24]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 border-l border-zinc-200 pl-4">
                    <Calendar size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{proj.year}</span>
                  </div>
                </div>

                <h4 className="text-3xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-black leading-none mb-8 group-hover:text-[#FBBF24] transition-colors">
                  {proj.title}
                </h4>

                <Link to="/contact" className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#FBBF24] hover:text-black transition-all">
                  Project Details <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-24 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-white border-2 border-zinc-100 rounded-full flex items-center justify-center text-black group-hover:bg-[#FBBF24] transition-all duration-500 shadow-xl">
                <Plus size={24} className="group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                View More Projects
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPreview;