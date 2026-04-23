import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import TeamContact from '../components/contact/TeamContact';
import ContactForm from '../components/contact/ContactForm'; // Form wapas import kiya

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen relative">
      
      {/* 1️⃣ HERO SECTION */}
      <ContactHero />

      {/* 2️⃣ OFFICIAL INFO SECTION (HQ Details) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 text-left">
           <div className="h-1 w-12 bg-[#FBBF24] mb-6"></div>
           <h2 className="text-black text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter leading-none">
             Official <br /> <span className="text-zinc-300">Channels.</span>
           </h2>
        </div>
        <ContactInfo />
      </div>

      {/* 3️⃣ TEAM LEADERSHIP SECTION (The Architects) */}
      <div className="relative z-10 bg-zinc-50 border-y border-zinc-100">
        <TeamContact />
      </div>

      {/* 4️⃣ FINAL CONTACT FORM SECTION (The Action) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-6xl md:text-8xl font-[1000] italic tracking-tighter text-black uppercase leading-[0.8]">
              Send A <br /> <span className="text-zinc-300">Message.</span>
            </h2>
            <p className="mt-8 text-zinc-500 font-bold uppercase text-[10px] tracking-widest max-w-xs">
              For tenders, machinery booking, or career inquiries, use the secure form below.
            </p>
          </div>
          
          {/* Form Container */}
          <div className="bg-white p-4 rounded-[3.5rem] shadow-2xl border border-zinc-100">
             <ContactForm />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;