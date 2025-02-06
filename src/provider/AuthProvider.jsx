import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSingUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSingUp = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User", currentUser);
      setUsers(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const valueInfo = {
    users,
    loading,
    createUser,
    signInEmailPassword,
    googleSingUp,
    githubSingUp
  };

  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
