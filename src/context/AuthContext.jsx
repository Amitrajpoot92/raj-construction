import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  updateProfile 
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        try {
          // 🔥 Firestore se user ka extra data (Name, Phone, Role) nikalna
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            // Context state mein Auth aur Firestore dono ka data merge karna
            setUser({ ...currentUser, ...userDoc.data() });
          } else {
            setUser(currentUser);
          }
        } catch (err) {
          console.error("User Sync Error:", err);
          setUser(currentUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 🚀 Signup function updated with phoneNumber
  const signup = async (email, password, name, phoneNumber) => {
    // 1. Firebase Auth mein account banana
    const res = await createUserWithEmailAndPassword(auth, email, password);
    
    // 2. Firestore mein user ki professional profile create karna
    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      name: name,
      email: email,
      phone: phoneNumber, // 👈 Phone number yahan save ho raha hai
      role: "user",       // Default role 'user' rakha hai
      createdAt: serverTimestamp() // Better tracking for Orgosaga members
    });

    // 3. Firebase Auth profile mein name update karna
    await updateProfile(res.user, { displayName: name });
    
    return res;
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      // Security ke liye local storage clear karna
      localStorage.clear();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);