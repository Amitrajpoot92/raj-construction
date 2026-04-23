import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, Building2 } from 'lucide-react';

const ContactInfo = () => {
  const mainContacts = [
    { 
      icon: <Phone size={24}/>, 
      label: "24/7 Operations Line", 
      val: "+91 83820 99713",
      sub: "Alt: +91 94500 83209",
      accent: "group-hover:text-orange-500"
    },
    { 
      icon: <Mail size={24}/>, 
      label: "Official Correspondence", 
      val: "rajenterprises@gmail.com",
      sub: "Tenders & Proposals",
      accent: "group-hover:text-blue-500"
    },
    { 
      icon: <MapPin size={24}/>, 
      label: "Regional Headquarters (HQ)", 
      val: "Lucknow, Uttar Pradesh",
      sub: "Main Corporate Control",
      accent: "group-hover:text-[#FBBF24]"
    },
  ];

  const branchOffices = [
    {
      city: "Office 01 (Lucknow)",
      address: "OMX City, Near Police HQ",
      pincode: "226025"
    },
    {
      city: "Office 02 (Amethi)",
      address: "Sukul Bazar, Amethi, UP",
      pincode: "227811"
    }
  ];

  const socials = [
    { 
      name: "WhatsApp",
      icon: <MessageSquare size={24} />, 
      link: "https://wa.me/918382099713" 
    },
    { 
      name: "Instagram",
      icon: <Instagram size={24} />, 
      link: "https://www.instagram.com/rajenterprisesconstruction?utm_source=qr&igsh=MWZuanp2c28yOTJ5ag%3D%3D" 
    },
    { 
      name: "Facebook",
      icon: <Facebook size={24} />, 
      link: "https://www.facebook.com/profile.php?id=61586290622589" 
    },
  ];

  return (
    <div className="w-full space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      
      {/* 🏗️ PRIMARY CONTACT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {mainContacts.map((item, i) => (
          <div key={i} className="group bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className={`w-14 h-14 md:w-16 md:h-16 bg-black rounded-2xl flex items-center justify-center text-[#FBBF24] mb-6 md:mb-8 transition-colors duration-500 ${item.accent}`}>
              {item.icon}
            </div>
            <div className="text-left">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2 md:mb-3">{item.label}</p>
              <h3 className="text-lg md:text-2xl font-[1000] text-black italic uppercase tracking-tighter leading-tight mb-2">
                {item.val}
              </h3>
              <p className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest opacity-70">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🏢 BRANCH LOCATIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {branchOffices.map((office, idx) => (
          <div key={idx} className="flex items-center gap-6 bg-zinc-50 p-6 md:p-8 rounded-[2rem] border border-zinc-100 group hover:bg-white hover:shadow-lg transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-[#FBBF24] shadow-sm transition-colors">
              <Building2 size={20} />
            </div>
            <div className="text-left">
              <p className="text-[8px] font-black uppercase tracking-widest text-[#FBBF24] mb-1">{office.city}</p>
              <p className="text-sm md:text-base font-bold text-black uppercase tracking-tight italic">{office.address}</p>
              <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Pincode: {office.pincode}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🌐 BOTTOM BAR: SOCIALS & COMPANY NAME */}
      <div className="bg-zinc-950 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 shadow-2xl">
        <div className="text-center md:text-left">
           <p className="text-[#FBBF24] text-[10px] font-black uppercase tracking-[0.5em] mb-3">Industrial Powerhouse</p>
           <h4 className="text-white text-xl md:text-3xl font-[1000] italic uppercase tracking-tighter leading-none">
             Rajenterprises & <span className="text-zinc-600">Construction</span>
           </h4>
        </div>

        {/* Updated Socials: WhatsApp, Insta & FB */}
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social, idx) => (
            <a 
              key={idx} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center text-white hover:bg-[#FBBF24] hover:text-black hover:scale-105 transition-all duration-500"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;