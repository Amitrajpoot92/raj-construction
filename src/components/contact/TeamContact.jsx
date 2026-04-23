import React from 'react';
import { Phone, ShieldCheck, HardHat, Briefcase, UserCheck } from 'lucide-react';

// Images Import
import directorImg from '../../assets/director.webp';
import managerImg from '../../assets/manager.webp';
import engineerImg from '../../assets/sideengineer.webp';
import supervisorImg from '../../assets/supervisor.webp';

const TeamContact = () => {
  const team = [
    { name: "Director", role: "Strategic Lead", img: directorImg, phone: "8382099713", icon: <ShieldCheck size={18}/> },
    { name: "Manager", role: "Operations Head", img: managerImg, phone: "9450083209", icon: <Briefcase size={18}/> },
    { name: "Site Engineer", role: "Technical Lead", img: engineerImg, phone: "8382099713", icon: <HardHat size={18}/> },
    { name: "Supervisor", role: "Ground Control", img: supervisorImg, phone: "9450083209", icon: <UserCheck size={18}/> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 text-left">
        <h2 className="text-6xl font-[1000] italic uppercase tracking-tighter mb-12">
          Leadership <span className="text-zinc-300">Team</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <div key={i} className="group relative h-[550px] rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl bg-zinc-50">
              
              {/* 🖼️ IMAGE: object-top used to prevent head cutting */}
              <img 
                src={member.img} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700" 
              />
              
              {/* 🌑 LIGHT GRADIENT: Sirf niche text readability ke liye, uper se clear hai */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* 📄 CONTENT */}
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#FBBF24]">{member.icon}</span>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#FBBF24]">{member.role}</p>
                </div>
                
                <h3 className="text-3xl font-[1000] italic uppercase mb-6 drop-shadow-md">
                  {member.name}
                </h3>
                
                <a 
                  href={`tel:${member.phone}`} 
                  className="bg-[#FBBF24] text-black py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-black hover:text-[#FBBF24] transition-all duration-300 shadow-xl"
                >
                  <Phone size={16} /> {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamContact;