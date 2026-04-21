import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Website Components (Check carefully: Capitalization matters)
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// ✅ Paths Updated: Extension .jsx add ki hai aur Case check kiya hai
import Home from "./pages/Home.jsx"; 
import Fleet from "./pages/Fleet.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

// Admin Components
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminLogin from "./admin/pages/Login";
import ManageFleet from "./admin/pages/ManageFleet";
import Enquiries from "./admin/pages/Enquiries";

// 🔐 STRICT PROTECTED ROUTE
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return (
    <div className="h-screen bg-black flex items-center justify-center text-[#FBBF24] font-black italic uppercase tracking-widest">
      Verifying Security Level...
    </div>
  );
  
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
          {/* Public Website Routes */}
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