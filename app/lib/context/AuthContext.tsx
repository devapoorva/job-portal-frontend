"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { 
  GoogleAuthProvider, 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut,
  signInWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "@/lib/firebase";
interface Login {
  email:string;
  password:string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
  handleGoogleSignIn: () => Promise<any>;
  emailPasswordSignIn: (cred:Login) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null); 
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log("res",res);
      return res;
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };
  const emailPasswordSignIn = async (cred:Login) => {
    setLoading(true);
    setError(null); 
    try {
      const res = await signInWithEmailAndPassword(auth,cred.email,cred.password);
      console.log("res",res);
      return res;
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("_token");
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, logout, handleGoogleSignIn,emailPasswordSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
