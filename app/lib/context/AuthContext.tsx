"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error:Error | null;
  handleSignWithEmailPasssword: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(true);
        if (currentUser) {
            setUser(currentUser)
            setLoading(false);
        }else{
            setUser(null)
            setLoading(false);
        }
      
    });

    return () => unsubscribe();
  }, []);

  const handleSignWithEmailPasssword = async ()=>{
    setLoading(true)
    try {
        await signInWithPopup(auth,new GoogleAuthProvider())
    } catch (error) {
        setError(error as Error)
    }
    setLoading(false)
  }

  const logout = async () => {
    setLoading(true)
    try {
        await signOut(auth);
    } catch (error) {
        setError(error as Error) 
    }

    setLoading(false)
  };

  return (
    <AuthContext.Provider value={{ user, loading, error,logout,handleSignWithEmailPasssword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
