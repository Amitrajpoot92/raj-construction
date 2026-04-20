import React from 'react';
import { Bell, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminNavbar = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-6">
      <button className="relative p-2 text-zinc-500 hover:text-white transition-colors">
        <Bell size={20} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-[#FBBF24] rounded-full border-2 border-[#111]"></span>
      </button>
      
      <div className="flex items-center gap-3 pl-6 border-l border-zinc-800">
        <div className="text-right hidden sm:block">
          <p className="text-xs font-black text-white uppercase tracking-widest">Admin Portal</p>
          <p className="text-[10px] text-zinc-500 font-bold">{user?.email || 'admin@raj.com'}</p>
        </div>
        <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-[#FBBF24] border border-zinc-700">
          <UserCircle size={24} />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;