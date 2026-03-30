import React from "react";
import { motion } from "framer-motion";
import { Ticket, ArrowRight, Timer, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <section className="py-12 md:py-20 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#050805] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-[0_40px_80px_-15px_rgba(22,163,74,0.25)]"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#16a34a15,transparent)] z-0" />

          <div className="relative z-10 lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="bg-green-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-full flex items-center gap-1.5 animate-pulse">
                <Timer size={12} /> Seasonal Harvest Offer
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic leading-[0.9] uppercase tracking-tighter">
              Get <span className="text-green-600">20% OFF</span> <br /> 
              On All Farm Produce
            </h2>

            <p className="text-gray-400 text-sm md:text-lg max-w-md font-medium leading-relaxed opacity-80">
              Health starts from farm. Use code <span className="text-white font-bold border-b border-green-600">ORGO_HEALTH20</span> to save on your nutrition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <Link to="/products" className="group px-10 py-4 bg-green-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                Claim Freshness <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                <Ticket size={14} className="text-green-500" /> Natural T&C apply
              </div>
            </div>
          </div>

          <div className="relative lg:w-1/2 flex items-center justify-center z-10">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
              <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600" alt="Organic Fresh" className="w-full max-w-[450px] rounded-2xl shadow-2xl transform lg:-rotate-6 border border-white/5" />
              <div className="absolute -bottom-6 -right-6 md:right-0 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-black italic"> <Leaf size={18} /> </div>
                <div className="leading-tight text-left">
                   <p className="text-[10px] text-gray-500 font-bold uppercase">Save Green</p>
                   <p className="text-sm font-black text-black uppercase">Harvest Sale</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferBanner;