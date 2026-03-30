import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Leaf, ChevronRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000" 
          alt="Organic Farm Background"
          className="w-full h-full object-cover opacity-50 transition-transform duration-[3000ms] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-green-600"></div>
            <span className="text-green-500 font-black uppercase tracking-[0.4em] text-xs"> Conscious Living Movement </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl font-black text-white italic leading-[0.85] uppercase tracking-tighter">
            Health Is Wealth. <br />
            <span className="text-green-600">Live Pure.</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-6">
            <Link to="/products" className="relative w-full sm:w-auto px-10 py-5 bg-green-600 text-white font-black text-sm uppercase tracking-widest overflow-hidden group shadow-[0_0_30px_rgba(22,163,74,0.4)] transition-all">
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                Get Fresh Harvest <ShoppingCart size={18} />
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link to="/about" className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/20 backdrop-blur-sm text-white px-10 py-5 font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Our Vision <Leaf size={18} />
            </Link>
          </motion.div>

          <div className="flex items-center gap-8 pt-6 border-t border-white/10 max-w-sm">
             <div> <p className="text-white text-2xl font-black italic">100%</p> <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Natural Organic</p> </div>
             <div className="w-[1px] h-10 bg-white/10"></div>
             <div> <p className="text-white text-2xl font-black italic">Direct</p> <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Farm Dispatch</p> </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.05] hidden lg:block pointer-events-none">
         <ChevronRight size={500} className="text-white" />
      </div>
    </section>
  );
};

export default CTA;