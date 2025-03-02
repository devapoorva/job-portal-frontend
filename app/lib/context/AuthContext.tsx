"use client";
import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react";
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
      console.log('currentUser',currentUser)
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
      localStorage.removeItem("_user");
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };
  const contextValue = useMemo(
    () => ({ user, loading, error, logout, handleGoogleSignIn, emailPasswordSignIn }),
    [user, loading, error]
  );
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
