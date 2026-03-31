import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, updateDoc, doc, query, orderBy, deleteDoc } from "firebase/firestore";
import { 
  Truck, ExternalLink, MapPin, Phone, ShoppingBasket, 
  CheckCircle2, X, Clock, User, Navigation, Home, Hash, Trash2, ShieldCheck, CreditCard, Search, ArrowRight, Scale
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("all");

  // 🔄 Real-time DB Sync (Orgosaga Harvest Feed)
  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(list);
      setFilteredOrders(list);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 🚀 Advanced Filtering Logic (Search + Time)
  useEffect(() => {
    let result = [...orders];
    if (searchTerm) {
      result = result.filter(o => 
        o.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        o.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (timeFilter !== "all") {
      const now = new Date();
      result = result.filter(o => {
        const oDate = o.createdAt?.toDate ? o.createdAt.toDate() : new Date(o.createdAt?.seconds * 1000);
        if (timeFilter === "today") return oDate.toDateString() === now.toDateString();
        if (timeFilter === "month") return oDate.getMonth() === now.getMonth() && oDate.getFullYear() === now.getFullYear();
        return true;
      });
    }
    setFilteredOrders(result);
  }, [searchTerm, timeFilter, orders]);

  // 🔄 Status Update Logic
  const updateStatus = async (orderId, newStatus) => {
    try {
      await updateDoc(doc(db, "orders", orderId), { status: newStatus });
      if (selectedOrder) setSelectedOrder(prev => ({ ...prev, status: newStatus }));
    } catch (err) { console.error(err); }
  };

  // 💰 Payment Toggle Logic
  const togglePayment = async (orderId, currentStatus) => {
    const nextStatus = currentStatus === "paid" ? "unpaid" : "paid";
    try {
      await updateDoc(doc(db, "orders", orderId), { paymentStatus: nextStatus });
      if (selectedOrder) setSelectedOrder(prev => ({ ...prev, paymentStatus: nextStatus }));
    } catch (err) { console.error(err); }
  };

  // 🗑️ Delete Order
  const deleteOrder = async (id) => {
    if(window.confirm("Bhai, are you sure? Ye order history se hamesha ke liye hat jayega!")) {
      try { await deleteDoc(doc(db, "orders", id)); } catch (err) { console.error(err); }
    }
  };

  const statusColors = {
    pending: "bg-orange-50 text-orange-600 border-orange-100",
    confirmed: "bg-blue-50 text-blue-600 border-blue-100",
    shipped: "bg-purple-50 text-purple-600 border-purple-100",
    completed: "bg-green-50 text-green-600 border-green-100",
    cancelled: "bg-red-50 text-red-600 border-red-100",
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="animate-spin text-green-600 mb-4"><Clock size={40}/></div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Syncing Harvest Dispatches...</p>
    </div>
  );

  return (
    <div className="space-y-8 pb-10 font-sans px-4 md:px-0">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
            Harvest <span className="text-green-600">Central</span>
          </h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-3">Total Shipments: {orders.length}</p>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
            <input 
              type="text" placeholder="FIND ORDER..." 
              className="w-full bg-white border-2 border-slate-50 p-4 pl-12 rounded-2xl text-[10px] font-black uppercase outline-none focus:border-green-600/20 shadow-sm transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            onChange={(e) => setTimeFilter(e.target.value)}
            className="bg-slate-900 text-white p-4 rounded-2xl text-[10px] font-black uppercase outline-none cursor-pointer border-none shadow-xl"
          >
            <option value="all">Lifetime Stream</option>
            <option value="today">Today's Harvest</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {/* Main Data Display */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-sm font-black uppercase italic text-slate-900 tracking-tighter">Dispatch Queue</h3>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left min-w-[800px]">
            <thead className="sticky top-0 bg-white z-20 shadow-sm">
              <tr>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50">TXN Identity</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 text-center">Metadata</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 text-center">Status</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-bold">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="font-black uppercase tracking-tighter text-slate-900 text-sm italic">#ORGO-{order.id.slice(-6).toUpperCase()}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">₹{order.totalAmount}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex flex-col">
                      <span className="font-black text-slate-900 uppercase text-[12px] italic">{order.customerName}</span>
                      <span className="text-[9px] text-slate-400 font-black uppercase mt-1">{new Date(order.createdAt?.seconds * 1000).toLocaleDateString()}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] uppercase font-black tracking-tighter border ${statusColors[order.status || 'pending']}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="bg-slate-900 text-white px-5 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-green-600 transition-all flex items-center gap-2 shadow-lg"
                      >
                        Inspect <ArrowRight size={12} />
                      </button>
                      <button 
                        onClick={() => deleteOrder(order.id)} 
                        className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-900 text-center">
           <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.5em]">ORGOSAGA • ORDER INTELLIGENCE LOGS</p>
        </div>
      </div>

      {/* 🚀 Order Intelligence Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedOrder(null)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col">
              
              <div className="bg-slate-950 p-8 text-white flex justify-between items-center shrink-0">
                <div className="space-y-1">
                  <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">Intelligence Brief</h2>
                  <p className="text-green-500 font-black text-[9px] uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={12}/> ID: ORGO-{selectedOrder.id.toUpperCase()}
                  </p>
                </div>
                <button onClick={() => setSelectedOrder(null)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all"><X size={18} /></button>
              </div>

              <div className="p-8 space-y-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><User size={14}/> Logistics Info</p>
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <p className="text-xl font-black text-slate-900 uppercase italic leading-none mb-4">{selectedOrder.customerName}</p>
                      <div className="space-y-4 font-bold text-slate-700">
                        <div className="flex items-center gap-3 text-xs bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                          <Phone size={14} className="text-green-600" /> {selectedOrder.phone}
                        </div>
                        <div className="space-y-3 pl-1 text-[11px]">
                          <div className="flex items-start gap-3 leading-relaxed">
                            <Home size={14} className="text-green-600 shrink-0 mt-0.5" /> 
                            <span>{selectedOrder.shipping?.fullAddress || selectedOrder.address || "Address N/A"}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Navigation size={14} className="text-green-600" /> 
                            <span>{selectedOrder.shipping?.city || "N/A"}, {selectedOrder.shipping?.state || "N/A"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Clock size={14}/> Harvest Workflow</p>
                    <div className="grid grid-cols-2 gap-2">
                       <StatusBtn label="Placed" sub="Verified" active={selectedOrder.status === 'pending'} onClick={() => updateStatus(selectedOrder.id, 'pending')} />
                       <StatusBtn label="Harvesting" sub="Processing" active={selectedOrder.status === 'confirmed'} onClick={() => updateStatus(selectedOrder.id, 'confirmed')} />
                       <StatusBtn label="In Transit" sub="Dispatch" active={selectedOrder.status === 'shipped'} onClick={() => updateStatus(selectedOrder.id, 'shipped')} />
                       <StatusBtn label="Delivered" sub="Success" active={selectedOrder.status === 'completed'} onClick={() => updateStatus(selectedOrder.id, 'completed')} />
                    </div>
                    <button onClick={() => updateStatus(selectedOrder.id, 'cancelled')} className={`w-full p-4 rounded-2xl text-[9px] font-black uppercase tracking-widest border transition-all ${selectedOrder.status === 'cancelled' ? 'bg-red-500 text-white' : 'bg-red-50 text-red-400 border-red-100 hover:bg-red-500 hover:text-white'}`}>Reject Shipment</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><ShoppingBasket size={14}/> Produce Picked</p>
                  <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100">
                    {selectedOrder.items?.map((item, idx) => (
                      <div key={idx} className="p-4 md:p-6 flex justify-between items-center border-b border-white last:border-none hover:bg-white transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-slate-200 shrink-0">
                            <img src={item.imageUrl} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-black uppercase text-slate-900 italic tracking-tighter">{item.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                               <p className="text-[9px] font-bold text-slate-400 uppercase">Qty: {item.qty}</p>
                               <div className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded-md border border-green-200">
                                  <Scale size={8} className="text-green-700" />
                                  <span className="text-[8px] font-black text-green-700 uppercase">{item.sellingQty}{item.sellingUnit}</span>
                               </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm font-black italic text-slate-900 tracking-tight">₹{item.price * item.qty}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 text-white shadow-2xl border-b-8 border-green-600">
                   <div className="text-center md:text-left">
                     <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Grand Total Bill</p>
                     <p className="text-4xl font-black italic text-green-500 leading-none tracking-tighter">₹{selectedOrder.totalAmount}</p>
                   </div>
                   <button 
                     onClick={() => togglePayment(selectedOrder.id, selectedOrder.paymentStatus)}
                     className={`px-8 py-4 rounded-xl font-black uppercase text-[10px] flex items-center gap-3 transition-all ${selectedOrder.paymentStatus === 'paid' ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}
                   >
                     <CreditCard size={14}/> {selectedOrder.paymentStatus === 'paid' ? 'Verified Paid' : 'Confirm Cash/Pay'}
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Internal Component for Status Control
const StatusBtn = ({ label, sub, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`p-4 rounded-2xl flex flex-col items-center justify-center border transition-all duration-300 ${active ? 'bg-slate-900 border-slate-900 shadow-xl scale-105 z-10' : 'bg-white border-slate-100 hover:border-green-600 opacity-60'}`}
  >
    <span className={`text-[10px] font-black uppercase tracking-widest ${active ? 'text-green-500' : 'text-slate-900'}`}>{label}</span>
    <span className={`text-[8px] font-bold uppercase ${active ? 'text-white/40' : 'text-slate-400'}`}>{sub}</span>
  </button>
);

export default Orders;