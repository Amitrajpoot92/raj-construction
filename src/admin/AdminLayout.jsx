import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Truck, MessageSquare, Users, LogOut, Menu, X } from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Dashboard', icon: <LayoutDashboard size={20}/>, path: '/admin' },
    { title: 'Manage Fleet', icon: <Truck size={20}/>, path: '/admin/manage-fleet' },
    { title: 'Enquiries', icon: <MessageSquare size={20}/>, path: '/admin/enquiries' },
    { title: 'Customers', icon: <Users size={20}/>, path: '/admin/customers' },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-zinc-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#111] border-r border-zinc-800 transform transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#FBBF24] tracking-tighter text-center italic">RAJ ADMIN</h2>
        </div>
        
        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.title} 
              to={item.path} 
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-[#FBBF24]"
            >
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </Link>
          ))}
          
          <button className="flex items-center gap-3 p-3 w-full mt-10 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut size={20}/>
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-zinc-800 bg-[#111]/50 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-6">
          <button className="md:hidden p-2 text-zinc-400" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
          <div className="text-sm font-medium text-zinc-500">Raj Construction & Mining Portal</div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FBBF24] text-black flex items-center justify-center font-bold text-xs">RC</div>
          </div>
        </header>

        {/* Page Outlet */}
        <main className="p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;