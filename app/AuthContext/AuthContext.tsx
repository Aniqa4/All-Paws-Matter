import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

// Define the type for children prop
interface ChildrenType {
  children: React.ReactNode;
}

// Specify the type for the AuthContext
interface AuthContextType {
  user: any; // Change the type as per your user object
  signUp: (email: string, password: string) => Promise<any>; // Adjust the Promise type accordingly
  signIn: (email: string, password: string) => Promise<any>; // Adjust the Promise type accordingly
  googleSignIn: (provider: any) => Promise<any>; // Adjust the Promise type accordingly
  logOut: () => Promise<any>; // Adjust the Promise type accordingly
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null); // Provide a type for createContext

const auth = getAuth(app);

function AuthProvider({ children }: ChildrenType) {
  const [user, setUser] = useState<any>(null); // Change the type as per your user object
  const [loading, setLoading] = useState(true);

  const signUp = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = (provider: any) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log('logged in user inside auth state observer', loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    }
  }, []); // Add an empty dependency array to useEffect

  const authInfo: AuthContextType = {
    user,
    signUp,
    signIn,
    googleSignIn,
    logOut,
    loading,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider, auth };
