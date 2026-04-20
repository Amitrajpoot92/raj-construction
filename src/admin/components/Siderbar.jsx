import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Truck, 
  MessageSquare, 
  Users, 
  LogOut 
} from 'lucide-react';

const Sidebar = ({ closeMobile }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20}/>, path: '/admin' },
    { name: 'Manage Fleet', icon: <Truck size={20}/>, path: '/admin/manage-fleet' },
    { name: 'Enquiries', icon: <MessageSquare size={20}/>, path: '/admin/enquiries' },
    { name: 'Customers', icon: <Users size={20}/>, path: '/admin/customers' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-8 text-center">
        <h2 className="text-[#FBBF24] text-xl font-black italic tracking-tighter">RAJ ADMIN</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={closeMobile}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              location.pathname === item.path 
              ? 'bg-[#FBBF24] text-black font-bold shadow-lg shadow-yellow-500/10' 
              : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
            }`}
          >
            {item.icon}
            <span className="text-sm uppercase tracking-wider">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-900">
        <button className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-500/10 w-full rounded-xl transition-all">
          <LogOut size={20}/>
          <span className="text-sm font-bold uppercase">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;