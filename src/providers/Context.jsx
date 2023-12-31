/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase.config";

const auth = getAuth(app);

export const myContext = createContext(null);
const Context = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const loggedInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsuscribe();
    };
  }, []);

  // const googleLogin = () => {
  //   return signInWithPopup(auth, googleProvider);
  // };

  const AuthInfo = {
    user,
    loading,
    loggedInUser,
    createUser,
    logOutUser,
    setUser,
  };

  return <myContext.Provider value={AuthInfo}>{children}</myContext.Provider>;
};

export default Context;
