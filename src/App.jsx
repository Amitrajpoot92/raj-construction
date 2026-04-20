import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Admin
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminLogin from "./admin/pages/Login";
import ManageFleet from "./admin/pages/ManageFleet";
import Enquiries from "./admin/pages/Enquiries";

// 🔐 STRICT PROTECTED ROUTE (Role Based)
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return (
    <div className="h-screen bg-black flex items-center justify-center text-[#FBBF24] font-black italic uppercase tracking-widest">
      Verifying Security Level...
    </div>
  );
  
  // 🛡️ User logged in hona chahiye aur uska role "admin" hona chahiye
  if (!user || user.role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/*" element={
            <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
              <Navbar />
              <main className="flex-grow pt-20">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/fleet" element={<Fleet />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />

          {/* Admin Auth */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Panel */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manage-fleet" element={<ManageFleet />} />
            <Route path="enquiries" element={<Enquiries />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;