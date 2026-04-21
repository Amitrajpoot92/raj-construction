import React, { useEffect } from 'react';
// Components import
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesOverview from '../components/home/ServicesOverview';
import FleetPreview from '../components/home/FleetPreview';
import ContactCTA from '../components/home/ContactCTA';
import { Construction } from 'lucide-react';

const Home = () => {
  // 🚀 Force Scroll to Top on Page Load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      
      {/* 🏗️ GLOBAL BACKGROUND ELEMENTS (Graphics Weight) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large Decorative Faded Icon */}
        <div className="absolute top-[15%] -left-20 text-white/[0.02] -rotate-12">
          <Construction size={600} />
        </div>
        
        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
        </div>

        {/* Side Progress Line Design */}
        <div className="absolute right-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden lg:block"></div>
      </div>

      {/* 🚀 PAGE SECTIONS */}
      <main className="relative z-10">
        <Hero />
        
        {/* Stats Section with extra depth */}
        <div className="relative">
          <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
          <Stats />
        </div>

        {/* Transition Divider */}
        <div className="max-w-7xl mx-auto px-6">
           <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-900 to-transparent"></div>
        </div>

        <ServicesOverview />
        
        {/* Heavy Section Divider */}
        <div className="py-10 flex justify-center opacity-10">
           <div className="w-1 h-20 bg-[#FBBF24]"></div>
        </div>

        <FleetPreview />

        {/* Final Closer Section */}
        <div className="mt-10">
          <ContactCTA />
        </div>
      </main>

      {/* 🏆 Signature Corner Badge */}
      <div className="fixed bottom-10 left-10 z-50 hidden xl:block pointer-events-none">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.5em] vertical-text">
              Raj Ops Live
            </span>
         </div>
      </div>

      {/* CSS for Vertical Text (Badge) */}
      <style>
        {`
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}
      </style>
    </div>
  );
};

export default Home;