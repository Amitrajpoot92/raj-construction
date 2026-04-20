import React from 'react';
import { Settings, Truck, CheckCircle, ArrowRight, ArrowDown } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      num: "01", 
      title: "Consult", 
      desc: "Site Analysis & Strategy", 
      icon: <Settings size={22} />,
    },
    { 
      num: "02", 
      title: "Deploy", 
      desc: "Rapid Fleet Mobilization", 
      icon: <Truck size={22} />,
    },
    { 
      num: "03", 
      title: "Execute", 
      desc: "Precision Delivery", 
      icon: <CheckCircle size={22} />,
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-zinc-100 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <div className="flex items-center gap-4">
             <div className="h-px w-12 bg-[#FBBF24]"></div>
             <h2 className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.5em]">Workflow</h2>
             <div className="h-px w-12 bg-[#FBBF24]"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-black mt-4 text-center">
             Execution <span className="text-zinc-200">Pipeline.</span>
          </h3>
        </div>

        <div className="relative flex flex-col md:flex-row gap-12 md:gap-4 justify-between items-center md:items-start">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-zinc-50 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent opacity-30 animate-pulse"></div>
          </div>

          {steps.map((s, i) => (
            <div 
              key={i} 
              className="relative group flex flex-col items-center text-center w-full md:w-1/3 px-4"
            >
              <div className="relative z-10 w-24 h-24 bg-black rounded-[2.5rem] flex items-center justify-center border border-zinc-800 transition-all duration-500 group-hover:bg-[#FBBF24] group-hover:shadow-[0_20px_40px_-10px_rgba(251,191,36,0.5)]">
                <div className="text-[#FBBF24] group-hover:text-black transition-colors duration-500 scale-110">
                  {s.icon}
                </div>
                <div className="absolute -top-3 -right-3 bg-zinc-100 text-black text-[10px] font-[1000] w-9 h-9 rounded-2xl flex items-center justify-center italic shadow-md border border-white group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  {s.num}
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-black text-2xl font-[1000] uppercase tracking-tighter mb-3 italic transition-colors">
                  {s.title}
                </h4>
                <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed max-w-[180px] mx-auto">
                  {s.desc}
                </p>
              </div>

              {i !== steps.length - 1 && (
                <div className="md:hidden mt-8 text-zinc-200">
                  <ArrowDown size={32} className="animate-bounce" />
                </div>
              )}

              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 translate-x-1/2 text-zinc-100">
                  <ArrowRight size={24} />
                </div>
              )}

              <div className="absolute inset-0 bg-zinc-50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 scale-95 group-hover:scale-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;