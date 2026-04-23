import React from 'react';
import { Phone, ShieldCheck, HardHat, Briefcase, UserCheck, MessageSquare } from 'lucide-react';

// Images Import (Make sure these exist in assets)
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
        <h2 className="text-6xl font-[1000] italic uppercase tracking-tighter mb-12">Leadership <span className="text-zinc-300">Team</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl">
              <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#FBBF24] mb-2">{member.role}</p>
                <h3 className="text-3xl font-[1000] italic uppercase mb-6">{member.name}</h3>
                <a href={`tel:${member.phone}`} className="bg-[#FBBF24] text-black py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2">
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