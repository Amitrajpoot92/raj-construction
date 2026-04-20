import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, PhoneCall, Construction } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* 🏗️ BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Industrial Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        {/* Large Decorative Icon Background */}
        <div className="absolute -bottom-20 -right-20 text-white/[0.02] rotate-12">
          <Construction size={600} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#FBBF24] rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_50px_100px_-20px_rgba(251,191,36,0.3)]">
          
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-black"></div>
              <p className="text-black text-[10px] font-black uppercase tracking-[0.4em]">Let's Build Together</p>
            </div>
            
            <h2 className="text-black text-5xl md:text-8xl font-[1000] italic tracking-tighter uppercase leading-[0.85] mb-8">
              Transforming <br /> 
              <span className="text-black/40">Visions into</span> <br />
              Concrete.
            </h2>
            
            <p className="text-black/70 text-sm md:text-base font-bold max-w-md leading-relaxed">
              Mining, Roadways, or Urban Infrastructure—whatever the scale, we have the fleet and the expertise to deliver.
            </p>
          </div>

          {/* Right Action Area */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <Link 
              to="/contact" 
              className="group flex items-center justify-center gap-4 bg-black text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all shadow-2xl"
            >
              Start Your Project <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <a 
              href="tel:8305031020" 
              className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-md border border-black/10 text-black px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/40 transition-all"
            >
              <PhoneCall size={18} /> Call Advisor
            </a>
            
            <p className="text-black/40 text-[9px] font-black uppercase tracking-widest text-center mt-4">
              Available 24/7 for urgent consultations
            </p>
          </div>

        </div>

        {/* 🏆 SUB-STATS LINE (Subtle trust builder) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
           {['Govt. Approved', 'ISO Certified', 'UP & Bihar', 'Active Fleet'].map((text, i) => (
             <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-px w-full bg-zinc-800 mb-2"></div>
                <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">{text}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;