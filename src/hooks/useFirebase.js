import { useState } from "react";
import initializeFirebase from "../components/Authentication/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const registerUser = (email, password) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('')
      
      })
      .catch((error) => {
        
        const errorMessage = setAuthError(error.message);
        
      })
      .finally(() => setIsLoading(false))
  };

  const loginUser = (email, password, location, nevigate) => {
    
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from?.pathname || '/';
        nevigate(destination)
        setAuthError('')
        
      })
      .catch((error) => {
        const errorMessage = setAuthError(error.message);
      })
      .finally(() => setIsLoading(false))
  };

  // observe user activity
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, []);

  // logout user
  const logout = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false))
  };
  return {
    user,
    registerUser,
    logout,
    loginUser,
    isLoading,
    authError
  };
};

export default useFirebase;
