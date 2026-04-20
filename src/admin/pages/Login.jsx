import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; 
import { useAuth } from "../../context/AuthContext";
import { Loader2, ShieldAlert, Lock, Eye, EyeOff, Smartphone } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Password Toggle State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.role === "admin") {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("Login Error:", err.code);
      setError("Credentials invalid ya aap admin nahi hain!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans">
      
      {/* Background Graphic elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#FBBF2408_0%,transparent_70%)]"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FBBF24]/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-[420px] bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] relative z-10 shadow-2xl">
        
        {/* Branding Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FBBF24] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-[0_10px_30px_rgba(251,191,36,0.2)]">
            <Lock size={24} className="text-black sm:hidden" />
            <Lock size={28} className="text-black hidden sm:block" />
          </div>
          <h1 className="text-xl sm:text-2xl font-[1000] text-white italic tracking-tighter uppercase">
            RAJ <span className="text-[#FBBF24]">CONTROL</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="h-[1px] w-4 bg-zinc-800"></span>
            <p className="text-zinc-500 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.4em]">Secure Admin Gateway</p>
            <span className="h-[1px] w-4 bg-zinc-800"></span>
          </div>
        </div>

        {/* Error Feedback */}
        {error && (
          <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-500 text-[9px] sm:text-[10px] font-bold uppercase animate-in fade-in slide-in-from-top-2">
            <ShieldAlert size={16} className="shrink-0" /> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">Identity</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-zinc-800 p-4 rounded-xl sm:rounded-2xl text-white text-xs outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24]/20 transition-all font-bold placeholder:text-zinc-800"
              placeholder="admin@email.com"
            />
          </div>

          {/* Password Input with Eye Toggle */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">Keyphrase</label>
            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-zinc-800 p-4 pr-12 rounded-xl sm:rounded-2xl text-white text-xs outline-none focus:border-[#FBBF24] transition-all font-bold placeholder:text-zinc-800"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-[#FBBF24] transition-colors p-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            disabled={loading}
            className="w-full h-14 sm:h-16 mt-4 bg-[#FBBF24] text-black font-[1000] uppercase tracking-widest text-[10px] sm:text-[11px] rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-xl disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> 
                <span className="hidden sm:inline">SYNCING DATABASE...</span>
                <span className="sm:hidden">SYNCING...</span>
              </>
            ) : (
              "AUTHORIZE ACCESS"
            )}
          </button>
        </form>

        {/* Device Info (Aesthetic only) */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 opacity-30">
           <Smartphone size={10} className="text-zinc-500" />
           <p className="text-[7px] font-black text-zinc-500 uppercase tracking-[0.2em]">End-to-end Encrypted Session</p>
        </div>
      </div>
    </div>
  );
};

export default Login;