import React from "react";

const StatCard = ({ label, val, icon, color, sub }) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-pointer active:scale-95">
      {/* 🟢 Background Accent Decoration */}
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-[0.05] rounded-bl-full transition-all duration-500 group-hover:scale-110`} />
      
      {/* 🟢 Icon Container */}
      <div className={`w-12 h-12 ${color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-current/20 transition-transform duration-500 group-hover:rotate-12`}>
        {icon}
      </div>
      
      {/* 🟢 Label & Values */}
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <h3 className="text-3xl font-black italic tracking-tighter text-slate-900 leading-none">{val}</h3>
      
      {/* 🟢 Sub-text Logic from Sports Site */}
      {sub && (
        <p className="text-[8px] font-bold text-slate-300 uppercase mt-3 tracking-[0.2em] italic group-hover:text-green-600 transition-colors">
          {sub}
        </p>
      )}
    </div>
  );
};

export default StatCard;