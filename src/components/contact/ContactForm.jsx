import React, { useState } from 'react';
import { Send, User, Phone, MessageSquare, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Firebase logic placeholder
    setTimeout(() => {
      alert("Enquiry Sent Successfully!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="relative group">
      {/* 🌑 OUTER GLOW (Subtle yellow aura) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FBBF24]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

      <div className="relative bg-[#0d0d0d] border border-zinc-800 p-8 md:p-14 rounded-[3rem] shadow-2xl overflow-hidden">
        
        {/* Decorative Grid Pattern for Form Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                <User size={12} className="text-[#FBBF24]" /> Client Name
              </label>
              <div className="relative">
                <input 
                  required 
                  type="text" 
                  placeholder="e.g. Amit Singh" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all placeholder:text-zinc-700 font-medium" 
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                <Phone size={12} className="text-[#FBBF24]" /> Contact Number
              </label>
              <div className="relative">
                <input 
                  required 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all placeholder:text-zinc-700 font-medium" 
                />
              </div>
            </div>
          </div>

          {/* Requirement Field */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
              <MessageSquare size={12} className="text-[#FBBF24]" /> Project Brief
            </label>
            <textarea 
              required 
              rows="5" 
              placeholder="Tell us about your mining or construction needs..." 
              className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all resize-none placeholder:text-zinc-700 font-medium"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            disabled={loading} 
            className="group/btn relative w-full bg-[#FBBF24] text-black font-[1000] py-6 rounded-2xl uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_-10px_rgba(251,191,36,0.4)] transition-all active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
            
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span className="relative z-10">Initiate Inquiry</span>
                <Send size={18} className="relative z-10 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
              </>
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-[9px] text-zinc-600 text-center uppercase font-bold tracking-widest">
            * Your data is encrypted and handled with 100% confidentiality.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;