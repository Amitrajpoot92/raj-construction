import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import TeamContact from '../components/contact/TeamContact';
import ContactForm from '../components/contact/ContactForm';
import { Construction, ArrowDown } from 'lucide-react';

const Contact = () => {
  // 🚀 Page load par sabse upar scroll karne ke liye
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen relative overflow-hidden">
      
      {/* 🏗️ BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden text-zinc-100/40">
        <div className="absolute -left-10 top-1/4 text-[15vw] font-[1000] rotate-90 select-none leading-none tracking-tighter uppercase">
          Contact
        </div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
           <Construction size={400} strokeWidth={0.5} />
        </div>
      </div>

      {/* 1️⃣ HERO SECTION (Dark Theme) */}
      <div className="relative z-10">
        <ContactHero />
      </div>

      {/* 2️⃣ CONTACT INFO SECTION (HQ & Offices) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 border-b border-zinc-100">
        <div className="mb-12 text-left">
           <div className="h-1 w-12 bg-[#FBBF24] mb-6"></div>
           <h2 className="text-black text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter leading-none">
             Regional <br /> <span className="text-zinc-300">Headquarters.</span>
           </h2>
        </div>
        
        <div className="w-full animate-in fade-in slide-in-from-bottom-10 duration-1000">
           <ContactInfo />
        </div>
      </div>

      {/* 3️⃣ TEAM LEADERSHIP SECTION (The Architects) */}
      <div className="relative z-10 bg-white">
        <TeamContact />
      </div>

      {/* 4️⃣ INQUIRY FORM SECTION (The Action) */}
      <section className="relative z-10 py-24 md:py-32 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-left">
              <p className="text-[#FBBF24] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Direct Site Deployment</p>
              <h2 className="text-6xl md:text-8xl font-[1000] italic tracking-tighter text-black uppercase leading-[0.8] mb-8">
                Start A <br /> <span className="text-zinc-300">Project.</span>
              </h2>
              
              <div className="flex items-center gap-4 text-zinc-500 mb-8 border-l-4 border-[#FBBF24] pl-6">
                 <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <ArrowDown size={20} className="animate-bounce text-black" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                   Fill the technical brief below <br /> for machine booking or site assessment.
                 </p>
              </div>
            </div>

            {/* 🔥 CONTACT FORM CONTAINER */}
            <div id="contact-form" className="animate-in fade-in slide-in-from-right-10 duration-1000">
               <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 🏗️ FOOTER BRANDING NOTE */}
      <div className="py-12 bg-white text-center border-t border-zinc-50">
         <p className="text-[9px] font-black uppercase tracking-[1em] text-zinc-300">
           Rajenterprises & Construction Company Pvt. Ltd.
         </p>
      </div>

    </div>
  );
};

export default Contact;