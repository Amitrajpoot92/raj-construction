import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-[90vh] w-full bg-[#0a0a0a] overflow-hidden flex flex-col lg:flex-row">
      
      {/* 1. IMAGE AREA */}
      {/* Mobile par padding-top (pt-24) add kiya taaki navbar se na takraye */}
      <div className="relative w-full lg:w-3/5 h-[400px] md:h-[500px] lg:h-full order-1 lg:order-2 pt-24 lg:pt-0">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop" 
          alt="Orgosaga Organic Harvest"
          className="w-full h-full object-cover object-center lg:object-right-top"
        />
        {/* Gradients to blend image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0a0a0a] lg:via-transparent lg:to-transparent" />
        
        {/* Badge */}
        <div className="absolute bottom-6 right-6 bg-green-600 px-4 py-2 flex items-center gap-2 shadow-2xl z-20">
          <Leaf size={14} className="text-white fill-current" />
          <span className="text-white text-[10px] font-black tracking-widest uppercase">100% Pesticide Free</span>
        </div>
      </div>

      {/* 2. TEXT CONTENT AREA */}
      {/* Desktop par pt-32 add kiya hai taaki text navbar ke niche se shuru ho */}
      <div className="relative w-full lg:w-2/5 flex items-center z-10 order-2 lg:order-1 px-6 py-10 lg:pl-16 lg:pt-32 lg:pb-20">
        <div className="max-w-xl text-left">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic leading-[1.1] uppercase mb-6"
          >
            Pure Nature <br />
            <span className="text-green-600">To Your Table.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm md:text-base lg:text-lg mb-8 max-w-sm font-medium leading-relaxed opacity-80"
          >
            Elevate your lifestyle with Orgosaga's handpicked organic harvest. Directly sourced from the heart of local farms.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
          >
            <Link to="/products" className="px-8 py-4 bg-green-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group">
              Shop Fresh <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/about" className="px-8 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all text-center">
              Our Sourcing
            </Link>
          </motion.div>
          
          {/* Background Text Overlay */}
          <div className="absolute left-0 bottom-10 hidden lg:block opacity-[0.02] pointer-events-none">
            <h2 className="text-9xl font-black italic text-white tracking-tighter">ORGOSAGA</h2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;