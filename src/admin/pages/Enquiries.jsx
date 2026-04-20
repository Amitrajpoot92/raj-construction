import React from 'react';
import { Mail, Phone, Calendar, MapPin } from 'lucide-react';

const Enquiries = () => {
  const leads = [
    { id: 1, name: 'Suresh Kumar', machine: 'Excavator', loc: 'Gorakhpur', date: '18 Apr 2026', msg: 'Need machine for highway project.' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Client Enquiries</h1>
      
      <div className="grid grid-cols-1 gap-4">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-[#111] border border-zinc-800 p-6 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-[#FBBF24]/30 transition-colors">
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white">{lead.name}</h3>
                  <p className="text-[#FBBF24] text-xs font-bold uppercase tracking-tighter">Interested in: {lead.machine}</p>
                </div>
                <span className="text-[10px] text-zinc-600 bg-zinc-900 px-2 py-1 rounded uppercase font-bold flex items-center gap-1">
                  <Calendar size={12}/> {lead.date}
                </span>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed italic">"{lead.msg}"</p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-500"><Phone size={14}/> +91 98765 43210</div>
                <div className="flex items-center gap-2 text-xs text-zinc-500"><MapPin size={14}/> {lead.loc}</div>
              </div>
            </div>
            
            <div className="flex md:flex-col gap-2 justify-end">
              <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">View Details</button>
              <button className="flex-1 bg-[#FBBF24] hover:bg-[#eab308] text-black px-4 py-2 rounded-xl text-xs font-bold transition-colors">Contact Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enquiries;