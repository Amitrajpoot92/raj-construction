import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // 🔍 Firestore se User Data aur Role fetch karna
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // User object mein Firestore ka data (role) merge kar rahe hain
            setUser({ ...currentUser, ...userData });
          } else {
            // Agar Auth mein hai par Firestore mein nahi, toh access deny
            setUser(null);
            await signOut(auth);
          }
        } catch (error) {
          console.error("Auth Context Error:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);