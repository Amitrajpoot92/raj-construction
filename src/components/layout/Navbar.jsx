import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Fleet", path: "/fleet" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* 🏗️ LOGO SECTION */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex flex-col">
              <div className="flex items-center">
                <span className="text-[#FBBF24] text-2xl font-[1000] italic tracking-tighter uppercase transition-all group-hover:tracking-normal">
                  RAJ
                </span>
                <span className="text-white text-2xl font-bold tracking-tighter ml-1.5">
                  CONSTRUCTION
                </span>
              </div>
              <div className="h-[2px] w-0 group-hover:w-full bg-[#FBBF24] transition-all duration-500"></div>
            </Link>
          </div>

          {/* 🔗 DESKTOP LINKS (Glass pill design) */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-2 py-1.5 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  location.pathname === link.path 
                    ? "bg-[#FBBF24] text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* ⚡ CALL TO ACTION (Animated Button) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative group overflow-hidden bg-white text-black px-8 py-3 rounded-2xl text-[11px] font-[1000] uppercase tracking-widest flex items-center gap-3 transition-all hover:pr-10 active:scale-95"
            >
              <span className="relative z-10">Get Quote</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Button Shine Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] group-hover:animate-shine" />
            </Link>
          </div>

          {/* 📱 MOBILE MENU TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-[#FBBF24] border border-zinc-800 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE MENU OVERLAY (Full Screen) */}
      <div 
        className={`fixed inset-0 bg-black z-[-1] transition-all duration-700 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-[1000] italic uppercase tracking-tighter transition-all duration-500 transform ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className={location.pathname === link.path ? "text-[#FBBF24]" : "text-white"}>
                {link.title}
              </span>
            </Link>
          ))}
          
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs text-center bg-[#FBBF24] text-black py-5 rounded-[2rem] font-[1000] uppercase tracking-widest text-sm shadow-[0_20px_40px_rgba(251,191,36,0.2)]"
          >
            Start Project
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes shine {
            100% {
              left: 125%;
            }
          }
          .animate-shine {
            animation: shine 0.8s forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;