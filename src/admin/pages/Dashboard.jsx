import React from 'react';
import { Truck, MessageSquare, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Fleet', value: '18', icon: <Truck className="text-blue-500"/> },
    { label: 'New Enquiries', value: '05', icon: <MessageSquare className="text-yellow-500"/> },
    { label: 'Total Clients', value: '42', icon: <Users className="text-green-500"/> },
    { label: 'Monthly Traffic', value: '1.2k', icon: <TrendingUp className="text-purple-500"/> },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Industrial Overview</h1>
        <p className="text-zinc-500 text-sm mt-1">Real-time status of Raj Construction & Mining.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#111] border border-zinc-800 p-6 rounded-2xl flex items-center gap-5 shadow-sm">
            <div className="p-4 bg-zinc-900 rounded-xl">
              {stat.icon}
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Recent Enquiries Table */}
      <div className="bg-[#111] border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">Latest Mining Enquiries</h2>
        <div className="h-32 flex items-center justify-center border border-dashed border-zinc-800 rounded-xl text-zinc-600">
          Enquiry data will sync from Firebase here.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;