import React, { useState } from 'react';
import { Send, User, Phone, MessageSquare, Loader2, MapPin, Clock, Hammer } from 'lucide-react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    duration: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 📱 WhatsApp Redirection Logic
    const wpNumber = "918382099713"; // Country code ke saath
    
    // Message Format taiyaar karna
    const message = `*RAJ CONSTRUCTION - NEW INQUIRY*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Duration:* ${formData.duration}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Details:* ${formData.message}`;

    const whatsappURL = `https://wa.me/${wpNumber}?text=${message}`;

    setTimeout(() => {
      setLoading(false);
      window.open(whatsappURL, '_blank'); // Naye tab mein WhatsApp khole
    }, 1000);
  };

  return (
    <div className="relative group">
      {/* 🌑 OUTER GLOW */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FBBF24]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

      <div className="relative bg-[#0d0d0d] border border-zinc-800 p-8 md:p-14 rounded-[3rem] shadow-2xl overflow-hidden">
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
          
          {/* Row 1: Client Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                <User size={12} className="text-[#FBBF24]" /> Client Name
              </label>
              <input 
                required 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="e.g. Amit Singh" 
                className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all placeholder:text-zinc-700 font-medium" 
              />
            </div>

            <div className="space-y-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                <Phone size={12} className="text-[#FBBF24]" /> Contact Number
              </label>
              <input 
                required 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder="+91 00000 00000" 
                className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all placeholder:text-zinc-700 font-medium" 
              />
            </div>
          </div>

          {/* Row 2: Service Type & Duration (Timeframe) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                <Hammer size={12} className="text-[#FBBF24]" /> Service Type
              </label>
              <select 
                required 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all appearance-none cursor-pointer font-medium"
              >
                <option value="" className="bg-zinc-950">Select Service</option>
                <option value="Mining & Excavation" className="bg-zinc-950">Mining & Excavation</option>
                <option value="Earthwork" className="bg-zinc-950">Earthwork (Mitti Khudai)</option>
                <option value="Highway & Roads" className="bg-zinc-950">Highway & Roads</option>
                <option value="Civil Construction" className="bg-zinc-950">Civil Construction</option>
                <option value="Heavy Fleet Rental" className="bg-zinc-950">Heavy Fleet Rental</option>
              </select>
            </div>

            <div className="space-y-3 text-left">
              <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                <Clock size={12} className="text-[#FBBF24]" /> Work Duration
              </label>
              <select 
                required 
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all appearance-none cursor-pointer font-medium"
              >
                <option value="" className="bg-zinc-950">Select Timeframe</option>
                <option value="Half Day (4-5 Hours)" className="bg-zinc-950">Half Day (4-5 Hours)</option>
                <option value="Full Day (8-10 Hours)" className="bg-zinc-950">Full Day (8-10 Hours)</option>
                <option value="2-5 Days" className="bg-zinc-950">2 - 5 Days</option>
                <option value="Long Term Project" className="bg-zinc-950">Long Term Project (Monthly)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Manual Location */}
          <div className="space-y-3 text-left">
            <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
              <MapPin size={12} className="text-[#FBBF24]" /> Project Location
            </label>
            <input 
              required 
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text" 
              placeholder="Enter Full Address / Site Location" 
              className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all placeholder:text-zinc-700 font-medium" 
            />
          </div>

          {/* Row 4: Message */}
          <div className="space-y-3 text-left">
            <label className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-[0.3em] text-zinc-500 ml-1">
              <MessageSquare size={12} className="text-[#FBBF24]" /> Project Brief
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4" 
              placeholder="Mention any specific machine requirements..." 
              className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-[#FBBF24] focus:ring-4 focus:ring-[#FBBF24]/5 text-white transition-all resize-none placeholder:text-zinc-700 font-medium"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button disabled={loading} className="group/btn relative w-full bg-[#FBBF24] text-black font-[1000] py-6 rounded-2xl uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_-10px_rgba(251,191,36,0.4)] transition-all active:scale-[0.98] overflow-hidden">
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Redirecting to WhatsApp...</span>
              </>
            ) : (
              <>
                <span className="relative z-10">Initiate Inquiry</span>
                <Send size={18} className="relative z-10 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;