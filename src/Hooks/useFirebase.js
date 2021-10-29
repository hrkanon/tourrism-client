import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   sign up using google
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //   Registration with email and password
  const signUpWithEmailPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   sign in with email and password
  const signInUsingEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   signOut
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
    });
    // .finaly(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    error,
    handleGoogleSignIn,
    signUpWithEmailPassword,
    signInUsingEmailPassword,
    handleSignOut,
  };
};

export default useFirebase;
