import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import { Construction } from 'lucide-react';

const Contact = () => {
  // 🚀 Force Scroll to Top on Page Load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // 'smooth' bhi kar sakte ho, par instant better hai for navigation
    });
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen relative overflow-hidden">
      
      {/* 🏗️ BACKGROUND GRAPHICS: Global Weight */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Decorative Text (Vertical) */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-zinc-100/50 text-[15vw] font-[1000] rotate-90 select-none leading-none">
          GETINTOUCH
        </div>
        {/* Subtle Industrial Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        {/* Floating Construction Icon behind Info */}
        <div className="absolute bottom-20 left-10 text-zinc-100 opacity-40">
           <Construction size={400} strokeWidth={0.5} />
        </div>
      </div>

      {/* 🚀 HERO SECTION (Dark) */}
      <ContactHero />

      {/* 📩 CONTACT CONTENT SECTION (Light) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Contact Information (Compact & Clean) */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="mb-12">
               <div className="h-1 w-12 bg-[#FBBF24] mb-6"></div>
               <h2 className="text-black text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter leading-none">
                  Reach Our <br /> <span className="text-zinc-300">HQ.</span>
               </h2>
            </div>
            <ContactInfo />
          </div>

          {/* RIGHT: Contact Form (Tactical & Weighted) */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="bg-white p-2 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-zinc-100">
              <ContactForm />
            </div>
            
            {/* Quick Trust Bar under Form */}
            <div className="mt-10 flex items-center justify-between px-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">Government Contractor Grade-A</p>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                   <div className="w-2 h-2 rounded-full bg-[#FBBF24]"></div>
                </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;