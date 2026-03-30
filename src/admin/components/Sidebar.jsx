import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutGrid, PlusCircle, ShoppingBasket, 
  Leaf, X, LogOut 
} from "lucide-react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Overview", path: "/admin", icon: <LayoutGrid size={20} /> },
    { name: "Add Produce", path: "/admin/add-product", icon: <PlusCircle size={20} /> },
    { name: "Warehouse", path: "/admin/all-products", icon: <Leaf size={20} /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingBasket size={20} /> },
  ];

  const handleLogout = async () => {
    if (window.confirm("Do you want to exit the management system?")) {
      await signOut(auth);
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[150] lg:hidden" 
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-screen z-[200] bg-slate-950 text-white 
        transition-all duration-300 ease-in-out border-r border-white/5
        ${isOpen 
          ? "w-72 translate-x-0" 
          : "-translate-x-full lg:translate-x-0 lg:sticky lg:w-24 xl:w-72"
        }
        flex flex-col overflow-hidden
      `}>
        
        <div className="h-20 flex items-center justify-between px-8 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-green-600/20">
               <span className="text-white font-black italic text-xs">OS</span>
            </div>
            <h2 className={`text-xl font-black italic tracking-tighter text-white transition-opacity duration-300 
              ${isOpen ? "opacity-100" : "lg:opacity-0 xl:opacity-100"}`}>
              ORGOSAGA
            </h2>
          </div>
          
          <button onClick={toggleSidebar} className="lg:hidden p-2 text-slate-400">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto overflow-x-hidden">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                className={`
                  flex items-center gap-4 px-4 py-4 rounded-2xl transition-all relative group
                  ${isActive 
                    ? "bg-green-600 text-white shadow-lg shadow-green-600/20" 
                    : "text-slate-400 hover:bg-white/5"
                  }
                `}
              >
                <div className="shrink-0">{item.icon}</div>
                <span className={`
                  text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300
                  ${isOpen ? "opacity-100 visible" : "lg:opacity-0 lg:invisible xl:opacity-100 xl:visible"}
                `}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={handleLogout} className="flex items-center gap-4 px-4 py-4 w-full text-slate-500 hover:text-red-500 transition-colors">
            <LogOut size={20} className="shrink-0" />
            <span className={`text-[10px] font-black uppercase tracking-widest transition-all
              ${isOpen ? "opacity-100 visible" : "lg:opacity-0 lg:invisible xl:opacity-100 xl:visible"}`}>
              Exit System
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;