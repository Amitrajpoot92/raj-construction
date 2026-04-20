import React from 'react';
import { Plus, Trash2, Edit3, Eye } from 'lucide-react';

const ManageFleet = () => {
  const machinery = [
    { id: 1, name: 'JCB 3DX Eco', cat: 'Excavator', status: 'Available', rate: '₹1,200/hr' },
    { id: 2, name: 'Tata Hitachi ZAXIS', cat: 'Mining', status: 'On Site', rate: '₹45,000/mo' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Fleet Inventory</h1>
        <button className="bg-[#FBBF24] text-black px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:scale-[0.98] transition-transform text-sm">
          <Plus size={18} /> Add New Machine
        </button>
      </div>

      <div className="bg-[#111] border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900/50 text-zinc-500 text-xs uppercase tracking-widest border-b border-zinc-800">
                <th className="p-5 font-bold">Machine Details</th>
                <th className="p-5 font-bold">Category</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {machinery.map((m) => (
                <tr key={m.id} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="p-5">
                    <p className="font-bold text-white">{m.name}</p>
                    <p className="text-xs text-zinc-500">{m.rate}</p>
                  </td>
                  <td className="p-5 text-sm text-zinc-400">{m.cat}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${m.status === 'Available' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition-colors"><Edit3 size={16}/></button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-500 transition-colors"><Trash2 size={16}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageFleet;