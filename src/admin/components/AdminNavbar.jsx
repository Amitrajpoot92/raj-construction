import React, { useState } from "react";
import { 
  UserCircle, Menu, Key, X, Loader2, ShieldCheck, 
  Eye, EyeOff, Mail, ArrowRight, CheckCircle2 
} from "lucide-react"; 
import { auth } from "../../firebase";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

const AdminNavbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Verify, 2: New Password
  
  const [oldEmail, setOldEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const resetStates = () => {
    setStep(1);
    setOldEmail(""); setOldPass("");
    setNewPass("");
    setMessage({ type: "", text: "" });
    setIsModalOpen(false);
  };

  // 🛡️ Step 1: Verify Current Identity
  const handleVerifyOld = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(oldEmail, oldPass);
      // Check old credentials
      await reauthenticateWithCredential(user, credential);
      
      setStep(2); 
      setMessage({ type: "success", text: "Identity Verified! Set your new password." });
    } catch (err) {
      setMessage({ type: "error", text: "Invalid Admin Credentials. Access Denied!" });
    }
    setLoading(false);
  };

  // 🚀 Step 2: Set New Password
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (newPass.length < 6) return setMessage({ type: "error", text: "Password must be 6+ chars!" });
    
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const user = auth.currentUser;
      await updatePassword(user, newPass);

      setMessage({ type: "success", text: "Password Updated Successfully! 🔐" });
      setTimeout(() => resetStates(), 2000);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
    setLoading(false);
  };

  return (
    <>
      <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 md:px-10 flex items-center justify-between sticky top-0 z-[100]">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="p-3 bg-slate-950 text-white rounded-2xl shadow-xl active:scale-90 transition-all">
            <Menu size={20} />
          </button>
        </div>

        {/* Brand Label */}
        <div className="hidden lg:block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic">
          ORGO <span className="text-green-600">INVENTORY</span> CONTROL
        </div>

        {/* Profile Action */}
        <div className="relative">
          <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-4 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-none italic">Ashish kumar</p>
              <p className="text-[8px] font-bold text-green-600 uppercase tracking-tighter mt-1 italic">Super Admin</p>
            </div>
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-inner hover:border-green-600/20 transition-all">
              <UserCircle size={28} className="group-hover:text-slate-900 transition-colors" />
            </div>
          </div>

          <AnimatePresence>
            {isProfileOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 w-64 bg-white border border-slate-100 rounded-[2rem] shadow-2xl z-20 p-2"
                >
                  <button 
                    onClick={() => { setIsModalOpen(true); setIsProfileOpen(false); }}
                    className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 rounded-2xl text-slate-600 hover:text-green-600 transition-all"
                  >
                    <Key size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Security Settings</span>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* 🔐 PASSWORD UPDATE MODAL (Elite System) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={resetStates} 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl" 
            />

            <motion.div 
              initial={{ scale: 0.9, y: 30, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative bg-white w-full max-w-sm rounded-[3rem] shadow-2xl p-8 md:p-10 z-[2001]"
            >
              <button onClick={resetStates} className="absolute top-8 right-8 text-slate-300 hover:text-red-600 transition-all">
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-3xl mx-auto flex items-center justify-center mb-4 transition-all duration-500 ${step === 1 ? 'bg-slate-100 text-slate-900 shadow-inner' : 'bg-green-600 text-white shadow-lg shadow-green-200'}`}>
                  {step === 1 ? <ShieldCheck size={32} /> : <CheckCircle2 size={32} />}
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
                  {step === 1 ? "Security Lock" : "New Access"}
                </h3>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2 italic">
                  {step === 1 ? "Verify Orgosaga Admin" : "Set your new master password"}
                </p>
              </div>

              <form onSubmit={step === 1 ? handleVerifyOld : handleUpdatePassword} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type="email" required placeholder="CURRENT EMAIL" value={oldEmail} onChange={(e) => setOldEmail(e.target.value)} className="w-full bg-slate-50 p-5 pl-12 rounded-2xl text-xs font-bold outline-none border-2 border-transparent focus:border-green-600/20 transition-all uppercase" />
                    </div>
                    <div className="relative">
                      <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input type={showPass ? "text" : "password"} required placeholder="CURRENT PASSWORD" value={oldPass} onChange={(e) => setOldPass(e.target.value)} className="w-full bg-slate-50 p-5 pl-12 pr-12 rounded-2xl text-xs font-bold outline-none border-2 border-transparent focus:border-green-600/20 transition-all" />
                      <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">{showPass ? <EyeOff size={18} /> : <Eye size={18} />}</button>
                    </div>
                  </>
                ) : (
                  <div className="relative">
                    <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" size={18} />
                    <input type={showPass ? "text" : "password"} required placeholder="NEW MASTER PASSWORD" value={newPass} onChange={(e) => setNewPass(e.target.value)} className="w-full bg-green-50/50 p-5 pl-12 pr-12 rounded-2xl text-xs font-bold outline-none border-2 border-green-600/10 focus:border-green-600/40 transition-all" />
                  </div>
                )}

                {message.text && (
                  <p className={`text-[10px] font-black uppercase text-center tracking-widest p-3 rounded-xl ${message.type === 'success' ? 'text-green-600 bg-green-50 border border-green-100' : 'text-red-600 bg-red-50 border border-red-100'}`}>
                    {message.text}
                  </p>
                )}

                <button disabled={loading} className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95 disabled:opacity-50">
                  {loading ? <Loader2 className="animate-spin" size={18} /> : (step === 1 ? "Verify & Proceed" : "Update Password")}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </form>
              
              <p className="text-[8px] font-black text-center text-slate-300 uppercase tracking-[0.4em] mt-8">Orgosaga brand Security Protocol</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminNavbar;