import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = () => {
  const info = [
    { 
      icon: <Phone size={22}/>, 
      label: "24/7 Operations", 
      val: "+91 83050 31020",
      sub: "Immediate fleet support"
    },
    { 
      icon: <Mail size={22}/>, 
      label: "Official Correspondence", 
      val: "contact@rajconstruction.com",
      sub: "Bidding & Tenders"
    },
    { 
      icon: <MapPin size={22}/>, 
      label: "Regional Headquarters", 
      val: "Khalilabad, Sant Kabir Nagar",
      sub: "Uttar Pradesh - 272175"
    },
  ];

  const socials = [
    { icon: <Instagram size={20} />, link: "#" },
    { icon: <Facebook size={20} />, link: "#" },
    { icon: <Linkedin size={20} />, link: "#" },
    { icon: <Twitter size={20} />, link: "#" },
  ];

  return (
    <div className="flex flex-col h-full justify-between py-6 bg-white rounded-[3rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-50">
      
      {/* 📍 CONTACT DETAILS */}
      <div className="space-y-12">
        {info.map((item, i) => (
          <div key={i} className="flex items-center gap-6 group">
            {/* Dark Icon Box for Contrast */}
            <div className="relative shrink-0">
              <div className="relative z-10 p-5 bg-black rounded-[1.5rem] text-[#FBBF24] shadow-xl group-hover:bg-[#FBBF24] group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              {/* Soft shadow behind icon */}
              <div className="absolute inset-0 bg-black/5 blur-xl rounded-full translate-y-4"></div>
            </div>

            <div className="text-left">
              {/* Label in Grey (Safe for White BG) */}
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">
                {item.label}
              </p>
              {/* Value in Solid Black */}
              <p className="text-xl md:text-2xl font-[1000] text-black italic tracking-tighter leading-tight uppercase mb-1">
                {item.val}
              </p>
              {/* Sub-text in soft grey */}
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest opacity-80">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🌐 SOCIAL CONNECT */}
      <div className="mt-16 pt-10 border-t border-zinc-100 text-left">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 mb-6">
          Connect Digitally
        </p>
        <div className="flex flex-wrap gap-4">
          {socials.map((social, idx) => (
            <a 
              key={idx} 
              href={social.link}
              className="group w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-black border border-zinc-100 hover:bg-black hover:text-[#FBBF24] hover:shadow-2xl transition-all duration-500"
            >
              <span className="group-hover:scale-110 transition-transform">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;