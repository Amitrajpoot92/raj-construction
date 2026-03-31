import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// --- Magic Scroll Component ---
import ScrollToTop from "./components/ScrollToTop"; 

// --- User Components & Pages ---
import Navbar from "./components/common/Navbar"; 
import Footer from "./components/common/Footer"; 
import Home from "./pages/home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"; 
import TrackOrder from "./pages/TrackOrder";
import About from "./pages/about"; 

// --- Admin Components & Pages ---
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AddProduct from "./admin/pages/AddProduct";
import AllProducts from "./admin/pages/AllProducts";
import Orders from "./admin/pages/Orders";
import AdminLogin from "./admin/pages/Login";
// 🚀 Naye Pages Import kiye
import Customers from "./admin/pages/customers"; 
import Revenue from "./admin/pages/revenue";

// Protected Route Component (100% Secured for Admin)
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  // 1. Security Check: अगर कोई लॉगिन नहीं है, तो एडमिन लॉगिन पेज पर भेजें
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // 2. MAIN SECURITY Check: अगर यूजर लॉगिन है, लेकिन एडमिन नहीं है
  if (user.role !== "admin") {
    alert("🚨 Access Denied! You are not an Admin.");
    return <Navigate to="/" replace />; 
  }

  // 3. अगर वो असली एडमिन है, तब ही एडमिन पैनल देखने दें
  return children;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          
          <Routes>
            
            {/* 1. PUBLIC WEBSITE ROUTES */}
            <Route
              path="/*"
              element={
                <div className="min-h-screen bg-white">
                  <Navbar />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/track-order" element={<TrackOrder />} />
                      <Route path="/about" element={<About />} /> 
                    </Routes>
                  </main>
                  <Footer />
                </div>
              }
            />

            {/* 2. ADMIN LOGIN ROUTE */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* 3. PROTECTED ADMIN PANEL ROUTES (Now Fully Updated) */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute> 
                  <AdminLayout /> 
                </ProtectedRoute>
              }
            >
              {/* Dashboard Index */}
              <Route index element={<Dashboard />} />
              
              {/* Product Management */}
              <Route path="add-product" element={<AddProduct />} />
              <Route path="all-products" element={<AllProducts />} />
              
              {/* Sales & Orders */}
              <Route path="orders" element={<Orders />} />
              <Route path="revanue" element={<Revenue />} /> {/* 👈 Naya Navigation Set */}
              
              {/* User Management */}
              <Route path="customer" element={<Customers />} /> {/* 👈 Naya Navigation Set */}
            </Route>

          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;