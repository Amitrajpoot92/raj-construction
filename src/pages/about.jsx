import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Award, Target, Quote, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Founder image import
import FounderImg from '../assets/home/Founder.webp';

const About = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <ShieldCheck className="text-green-600" />, title: "Pure Quality", desc: "We source only 100% certified organic produce directly from local farms." },
    { icon: <Award className="text-green-600" />, title: "Farm Fresh", desc: "Each item is harvested and packed with care to ensure maximum nutritional value." },
    { icon: <Leaf className="text-green-600" />, title: "Nature First", desc: "Our products are grown without any harmful pesticides or synthetic chemicals." },
    { icon: <Target className="text-green-600" />, title: "Health Standards", desc: "Trusted by health-conscious families across Gorakhpur for purity and taste." },
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      
      {/* 🟢 Navbar Visibility Fix: Header Section */}
      <section className="relative h-[45vh] md:h-[55vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-25">
            <img 
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Nature Background" 
            />
        </div>
        <div className="relative z-10 text-center px-4 mt-16 md:mt-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[11px] block mb-2"
            >
                Soil to Soul Journey
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter"
            >
                About <span className="text-green-600">Orgosaga</span>
            </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        
        {/* Founder & Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-36">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div className="inline-block p-2.5 md:p-3 bg-green-50 rounded-2xl">
                <Quote className="text-green-600 fill-current w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter leading-[1.1]">
              A Vision for a <br /> <span className="text-green-600 font-black">Healthier Bharat</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
              Orgosaga was born out of a commitment to bring the purity of local farms to your table. Based in Gorakhpur, we noticed the gap between actual organic produce and what reaches the urban kitchen. We are here to bridge that gap with honesty and health.
            </p>
            <div className="pt-2 border-l-4 border-green-600 pl-4">
                <p className="text-slate-900 font-black uppercase tracking-widest text-sm leading-none">Asish kumar</p>
                <p className="text-green-600 font-bold text-[10px] md:text-xs uppercase tracking-tighter mt-1">Founder, Orgosaga</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group order-1 lg:order-2"
          >
            <div className="relative h-[400px] md:h-[600px] bg-slate-100 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                <img 
                  src={FounderImg} 
                  alt="Founder" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-36 md:h-36 bg-green-600 rounded-full flex items-center justify-center text-white font-black italic -rotate-12 shadow-2xl z-10 border-[6px] md:border-[10px] border-white text-xs md:text-base">
                Est. 2024
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-36">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 hover:border-green-600/20 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-all duration-500">
                {React.cloneElement(f.icon, { className: "w-6 h-6 md:w-7 md:h-7 transition-colors group-hover:text-white" })}
              </div>
              <h3 className="font-black text-slate-900 uppercase italic tracking-tighter text-lg md:text-xl mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🚀 Call to Action - Button Updated */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 space-y-8 md:space-y-12">
            <h2 className="text-3xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9]">
                Ready to join the <br />
                <span className="text-green-600">Green Living?</span>
            </h2>
            
            <button 
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/products');
              }}
              className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 bg-green-600 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all rounded-full shadow-green-600/30 shadow-2xl active:scale-95 flex items-center justify-center gap-3 mx-auto group"
            >
              Start Healthy Shopping <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Large Decorative Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[22vw] font-black italic text-white pointer-events-none whitespace-nowrap select-none">
            ORGOSAGA
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;