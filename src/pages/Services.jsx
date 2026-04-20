import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceList from '../components/services/ServiceList';
import Process from '../components/services/Process';
import SafetyBanner from '../components/services/SafetyBanner';
import { Settings } from 'lucide-react';

const Services = () => {
  // 🚀 Force Scroll to Top on Page Load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen relative overflow-hidden">
      
      {/* 🏗️ INDUSTRIAL BACKGROUND GRAPHICS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Ghost Text - Vertical Side Branding */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-white/[0.01] text-[15vw] font-[1000] rotate-90 select-none leading-none tracking-tighter">
          SOLUTIONS
        </div>
        
        {/* Subtle Radar/Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>

        {/* Floating Gear Icon behind Process section */}
        <div className="absolute bottom-[20%] left-[-5%] text-white/[0.02] animate-spin-slow">
           <Settings size={500} strokeWidth={0.5} />
        </div>
      </div>

      {/* 🚀 PAGE SECTIONS */}
      <main className="relative z-10">
        <ServicesHero />
        
        {/* Services List Section with transition glow */}
        <div className="relative">
          <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
          <ServiceList />
        </div>

        {/* Modern Section Divider */}
        <div className="max-w-7xl mx-auto px-6">
           <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        </div>

        <Process />

        {/* High-Alert Safety Section */}
        <div className="relative pb-20">
          <div className="absolute inset-0 bg-[#FBBF24]/5 blur-[120px] rounded-full opacity-20 translate-y-20"></div>
          <SafetyBanner />
        </div>
      </main>

      {/* 🏆 Technical Spec Badge (Fixed Desktop) */}
      <div className="fixed bottom-10 right-10 z-50 hidden xl:flex items-center gap-3 pointer-events-none">
         <span className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em]">
           Quality Control: Grade-A
         </span>
         <div className="w-12 h-px bg-zinc-800"></div>
      </div>

      {/* Custom Keyframe for Gear Rotation */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Services;