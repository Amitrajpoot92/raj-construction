import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, updateDoc, doc, query, orderBy, deleteDoc } from "firebase/firestore";
import { 
  Truck, ExternalLink, MapPin, Phone, ShoppingBasket, 
  CheckCircle, X, Clock, User, Navigation, Home, Hash, Trash2, ShieldCheck, CreditCard, Scale
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setOrders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetchOrders(); }, []);

  const deleteOrder = async (id) => {
    if(window.confirm("Bhai, are you sure? Ye order history se hat jayega!")) {
      try {
        await deleteDoc(doc(db, "orders", id));
        alert("Order Removed!");
        fetchOrders();
      } catch (err) { console.error(err); }
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await updateDoc(doc(db, "orders", orderId), { status: newStatus });
      fetchOrders();
      if (selectedOrder) setSelectedOrder(prev => ({ ...prev, status: newStatus }));
    } catch (err) { console.error(err); }
  };

  const togglePayment = async (orderId, currentStatus) => {
    const nextStatus = currentStatus === "paid" ? "unpaid" : "paid";
    try {
      await updateDoc(doc(db, "orders", orderId), { paymentStatus: nextStatus });
      fetchOrders();
      if (selectedOrder) setSelectedOrder(prev => ({ ...prev, paymentStatus: nextStatus }));
    } catch (err) { console.error(err); }
  };

  const statusColors = {
    pending: "bg-orange-50 text-orange-600 border-orange-100",
    confirmed: "bg-blue-50 text-blue-600 border-blue-100",
    shipped: "bg-purple-50 text-purple-600 border-purple-100",
    completed: "bg-green-50 text-green-600 border-green-100",
    cancelled: "bg-red-50 text-red-600 border-red-100",
  };

  return (
    <div className="space-y-10 pb-20 px-4 md:px-0 font-sans">
      <div className="flex justify-between items-end">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none italic">
          Harvest <span className="text-green-600">Central</span>
        </h1>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{orders.length} Total Harvest Shipments</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-xl transition-all group relative">
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${statusColors[order.status || 'pending']}`}>
                <ShoppingBasket size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-slate-900 leading-none">
                  #ORGO-{order.id.slice(-6).toUpperCase()}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {order.customerName} • {new Date(order.createdAt?.seconds * 1000).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between md:justify-end gap-6 w-full md:w-auto">
              <div className="text-left md:text-right">
                <p className="text-xl font-black italic text-slate-900 leading-none">₹{order.totalAmount}</p>
                <span className={`mt-2 inline-block px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${statusColors[order.status || 'pending']}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setSelectedOrder(order)}
                  className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-green-600 transition-all active:scale-95 shadow-lg"
                >
                  Inspect Order <ExternalLink size={14} />
                </button>
                <button 
                  onClick={() => deleteOrder(order.id)}
                  className="bg-red-50 text-red-500 p-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedOrder && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedOrder(null)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" />
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 20, opacity: 0 }} 
              className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              
              {/* MODAL HEADER */}
              <div className="bg-slate-950 p-6 md:p-8 text-white flex justify-between items-center shrink-0">
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter">Order Detail Panel</h2>
                  <p className="text-green-500 font-black text-[9px] uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={12}/> Order ID: ORGO-{selectedOrder.id.toUpperCase()}
                  </p>
                </div>
                <button onClick={() => setSelectedOrder(null)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all"><X size={18} /></button>
              </div>

              {/* MODAL CONTENT (SCROLLABLE) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* LOGISTICS SECTION */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 font-sans"><User size={14}/> Customer Data</p>
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                      <p className="text-xl font-black text-slate-900 uppercase italic leading-none mb-4">{selectedOrder.customerName}</p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-600 font-bold text-xs bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                          <Phone size={14} className="text-green-600" /> {selectedOrder.phone}
                        </div>
                        
                        <div className="space-y-3 pl-1">
                           <div className="flex items-start gap-3 text-slate-700 font-bold text-[11px] leading-relaxed">
                              <Home size={14} className="text-green-600 shrink-0 mt-0.5" /> 
                              <span>{selectedOrder.address || "Address not provided"}</span>
                           </div>
                           <div className="flex items-center gap-3 text-slate-700 font-bold text-[11px]">
                              <Navigation size={14} className="text-green-600" /> 
                              <span>{selectedOrder.shipping?.city || "N/A"}, {selectedOrder.shipping?.state || "N/A"}</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* STATUS CONTROLS SECTION */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 font-sans"><Clock size={14}/> Live Sync (Tracker)</p>
                    <div className="grid grid-cols-2 gap-2">
                       <StatusBtn label="Placed" sub="Verified" active={selectedOrder.status === 'pending'} onClick={() => updateStatus(selectedOrder.id, 'pending')} />
                       <StatusBtn label="Harvesting" sub="Processing" active={selectedOrder.status === 'confirmed'} onClick={() => updateStatus(selectedOrder.id, 'confirmed')} />
                       <StatusBtn label="In Transit" sub="Dispatch" active={selectedOrder.status === 'shipped'} onClick={() => updateStatus(selectedOrder.id, 'shipped')} />
                       <StatusBtn label="Delivered" sub="Success" active={selectedOrder.status === 'completed'} onClick={() => updateStatus(selectedOrder.id, 'completed')} />
                    </div>
                    <button onClick={() => updateStatus(selectedOrder.id, 'cancelled')} className={`w-full p-4 rounded-2xl text-[9px] font-black uppercase tracking-widest border transition-all ${selectedOrder.status === 'cancelled' ? 'bg-red-500 text-white' : 'bg-red-50 text-red-400 border-red-100 hover:bg-red-500 hover:text-white'}`}>Reject Shipment</button>
                  </div>
                </div>

                {/* ITEMS SECTION */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 font-sans"><Scale size={14}/> Produce Picked</p>
                  <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100">
                    {selectedOrder.items?.map((item, idx) => (
                      <div key={idx} className="p-4 md:p-6 flex justify-between items-center border-b border-white last:border-none hover:bg-white transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-slate-200 shrink-0 shadow-sm">
                            <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-black uppercase text-slate-900 tracking-tighter leading-tight">{item.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <p className="text-[10px] font-bold text-slate-400 italic">Qty: {item.qty} × ₹{item.price}</p>
                                {/* ⚖️ PACK SIZE DISPLAY */}
                                <div className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded-md border border-green-200">
                                    <Scale size={8} className="text-green-700" />
                                    <span className="text-[8px] font-black text-green-700 uppercase tracking-tighter">{item.sellingQty || '1'}{item.sellingUnit || 'kg'}</span>
                                </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-base font-black italic text-slate-900 tracking-tight shrink-0">₹{item.price * item.qty}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOTAL BILL & PAYMENT ACTION */}
                <div className="bg-slate-950 p-6 md:p-10 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-6 text-white shadow-2xl relative overflow-hidden shrink-0 border-b-8 border-green-600">
                   <div className="text-center md:text-left relative z-10">
                     <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Grand Total Bill</p>
                     <p className="text-5xl font-black italic text-green-500 leading-none tracking-tighter">₹{selectedOrder.totalAmount}</p>
                   </div>
                   <div className="text-center md:text-right relative z-10 space-y-3">
                     <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Payment Security</p>
                     <button 
                       onClick={() => togglePayment(selectedOrder.id, selectedOrder.paymentStatus)}
                       className={`px-8 py-4 rounded-2xl font-black uppercase text-[11px] flex items-center gap-3 transition-all ${selectedOrder.paymentStatus === 'paid' ? 'bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}
                     >
                       <CreditCard size={16}/> {selectedOrder.paymentStatus === 'paid' ? 'Paid & Verified' : 'Confirm Cash/Pay'}
                     </button>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 💡 Internal Component for Clean Code
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