import React from 'react';
import { ArrowRight, HardHat, Building2, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
// Image path correctly imported
import heroImg from '../../assets/hero.webp';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 🖼️ BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Raj Construction Site" 
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
        {/* Overlay 1: Dark Tint for Contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Overlay 2: Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-20">
        
        {/* 🔥 TOP BADGE */}
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-8">
          <Trophy size={14} className="text-[#FBBF24]" />
          <span className="text-zinc-200 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">
            ISO Certified Grade-A Govt. Contractor
          </span>
        </div>

        {/* 🏗️ MAIN HEADING (Responsive Sizes) */}
        <h1 className="text-5xl sm:text-7xl md:text-[110px] font-[1000] italic tracking-tighter text-white leading-[0.85] mb-6 uppercase">
          Building <br /> 
          <span className="text-[#FBBF24] drop-shadow-[0_10px_30px_rgba(251,191,36,0.4)]">
            Modern India
          </span>
        </h1>

        {/* 🛠️ SERVICE TAGS (Horizontal Scroll on Mobile) */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 mb-10 max-w-4xl mx-auto">
          {['Mining', 'Highways', 'Street Lighting', 'Civil Works', 'Fleet'].map((text) => (
            <div key={text} className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/5 px-4 py-1.5 rounded-lg">
              <div className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full shadow-[0_0_8px_#FBBF24]"></div>
              <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </div>

        {/* 📝 DESCRIPTION */}
        <p className="text-zinc-300 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-12 px-4">
          Expertise in <span className="text-[#FBBF24] font-bold">Mining</span>, <span className="text-white">Industrial Infrastructure</span> & <span className="text-[#FBBF24] font-bold">Smart Lighting Solutions</span>. From government contracts to heavy fleet management.
        </p>
        
        {/* 🚀 ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
          <Link to="/fleet" className="w-full sm:w-auto bg-[#FBBF24] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3 group shadow-2xl">
            Explore Fleet <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform"/>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            Get a Quote
          </Link>
        </div>

        {/* 📊 BOTTOM ICONS (Grid 1x3 on Mobile, Row on Desktop) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-10 border-t border-white/10">
           <div className="flex items-center justify-center md:justify-start gap-4">
              <Building2 size={32} className="text-[#FBBF24]" />
              <div className="text-left">
                <p className="text-white font-black text-xs uppercase tracking-widest">Civil Works</p>
                <p className="text-zinc-500 text-[10px] font-bold uppercase">Mega Infrastructure</p>
              </div>
           </div>
           <div className="flex items-center justify-center md:justify-center gap-4 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
              <Zap size={32} className="text-[#FBBF24]" />
              <div className="text-left">
                <p className="text-white font-black text-xs uppercase tracking-widest">Street Lighting</p>
                <p className="text-zinc-500 text-[10px] font-bold uppercase">Smart City Projects</p>
              </div>
           </div>
           <div className="flex items-center justify-center md:justify-end gap-4">
              <HardHat size={32} className="text-[#FBBF24]" />
              <div className="text-left">
                <p className="text-white font-black text-xs uppercase tracking-widest">Safe Mining</p>
                <p className="text-zinc-500 text-[10px] font-bold uppercase">Grade-A Excavation</p>
              </div>
           </div>
        </div>
      </div>

      {/* Tailwind Animation CSS (Add this to your index.css) */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;