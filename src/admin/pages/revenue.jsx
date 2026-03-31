import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { IndianRupee, Search, Loader2, Clock, TrendingUp, ArrowUpRight, ShieldCheck } from "lucide-react";

const Revenue = () => {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all"); // all, today, month

  useEffect(() => {
    // 🔄 Real-time Orgosaga Revenue Sync
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const allOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // सिर्फ 'paid' status वाले orders ही Revenue का हिस्सा बनेंगे
      const paidOrders = allOrders.filter(o => o.paymentStatus === "paid");
      setPayments(paidOrders);
      setFilteredPayments(paidOrders);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // 🚀 Advanced Filtering Logic (Search + Time)
  useEffect(() => {
    let result = [...payments];
    
    if (searchTerm) {
      result = result.filter(p => 
        p.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (dateFilter !== "all") {
      const now = new Date();
      result = result.filter(p => {
        const pDate = p.createdAt?.toDate ? p.createdAt.toDate() : new Date(p.createdAt);
        if (dateFilter === "today") return pDate.toDateString() === now.toDateString();
        if (dateFilter === "month") return pDate.getMonth() === now.getMonth() && pDate.getFullYear() === now.getFullYear();
        return true;
      });
    }

    setFilteredPayments(result);
  }, [searchTerm, dateFilter, payments]);

  // 💰 Live Total Revenue Calculation
  const totalRevenue = filteredPayments.reduce((acc, curr) => acc + Number(curr.totalAmount || 0), 0);

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Loader2 className="animate-spin text-green-600 mb-4" size={40} />
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic text-center">Opening the Revenue Vault...</p>
    </div>
  );

  return (
    <div className="space-y-8 pb-10 font-sans px-4 md:px-0">
      
      {/* 1. Header & Summary Card */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
            Revenue <span className="text-green-600">Vault</span>
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Verified Organic Sales Flow</p>
          </div>
        </div>

        {/* --- Total Balance Display --- */}
        <div className="bg-slate-900 p-6 md:px-10 rounded-[2.5rem] text-white flex items-center gap-6 shadow-2xl relative overflow-hidden group">
           <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center rotate-12 transition-transform group-hover:rotate-0">
              <TrendingUp className="text-white" size={24} />
           </div>
           <div>
              <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Total Earnings</p>
              <h2 className="text-3xl font-black italic tracking-tighter">₹{totalRevenue.toLocaleString()}</h2>
           </div>
           <ArrowUpRight size={20} className="text-green-500 mb-4 ml-4 opacity-50" />
           <div className="absolute -right-4 -bottom-4 opacity-5">
              <IndianRupee size={100} />
           </div>
        </div>
      </div>

      {/* 2. Filters Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
          <input 
            type="text" placeholder="FIND TRANSACTION ID OR NAME..." 
            className="w-full bg-white border-2 border-slate-50 p-5 pl-14 rounded-2xl text-[10px] font-black uppercase outline-none focus:border-green-600/20 shadow-sm transition-all tracking-widest"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          onChange={(e) => setDateFilter(e.target.value)}
          className="bg-white border-2 border-slate-50 p-5 rounded-2xl text-[10px] font-black uppercase outline-none cursor-pointer shadow-sm min-w-[200px] hover:border-green-600/20 transition-colors"
        >
          <option value="all">Lifetime Earnings</option>
          <option value="today">Today's Inflow</option>
          <option value="month">This Month</option>
        </select>
      </div>

      {/* 3. Data Table */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
           <h3 className="text-sm font-black uppercase italic text-slate-900 tracking-tighter flex items-center gap-2">
             <ShieldCheck size={16} className="text-green-600" /> Payment Logs
           </h3>
           <span className="text-[9px] font-black text-slate-400 bg-white px-3 py-1 rounded-lg border border-slate-100 uppercase tracking-widest">
             {filteredPayments.length} Verified Entries
           </span>
        </div>

        {/* --- Scrollable Table Area --- */}
        <div className="max-h-[600px] overflow-y-auto overflow-x-auto custom-scrollbar">
          <table className="w-full text-left min-w-[700px] border-collapse">
            <thead className="sticky top-0 bg-white z-20 shadow-sm">
              <tr>
                <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50">TXN Identity</th>
                <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50">Customer</th>
                <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 text-center">Settlement</th>
                <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 text-right">Credit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredPayments.length > 0 ? (
                filteredPayments.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-all group">
                    <td className="p-8">
                      <span className="font-black text-slate-300 group-hover:text-green-600 uppercase text-[10px] transition-colors">
                        #ORGO-{item.id.slice(-8).toUpperCase()}
                      </span>
                    </td>
                    <td className="p-8">
                      <div className="flex flex-col">
                        <span className="font-black text-slate-900 uppercase text-sm italic">{item.customerName}</span>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tight mt-1">{item.phone || "No Contact"}</span>
                      </div>
                    </td>
                    <td className="p-8 text-center">
                      <div className="inline-flex items-center gap-2 text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                        <Clock size={12} className="text-green-600"/>
                        <span className="text-[10px] font-black uppercase">
                          {item.createdAt?.toDate ? item.createdAt.toDate().toLocaleDateString() : "---"}
                        </span>
                      </div>
                    </td>
                    <td className="p-8 text-right">
                      <div className="flex flex-col items-end">
                        <span className="font-black italic text-xl text-slate-950 leading-none tracking-tighter">
                          ₹{Number(item.totalAmount).toLocaleString()}
                        </span>
                        <div className="flex items-center gap-1.5 mt-2">
                           <div className="h-1 w-1 bg-green-500 rounded-full"></div>
                           <span className="text-[8px] font-black uppercase text-green-600 italic">Success Inflow</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-24 text-center">
                    <p className="text-[10px] font-black uppercase text-slate-300 tracking-[0.5em]">No verified transactions in this perimeter</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-950 text-center">
           <p className="text-[8px] font-black text-white/30 uppercase tracking-[0.6em]">ORGOSAGA • TREASURY SYSTEM • END OF LOG</p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;