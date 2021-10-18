import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuth from "../Pages/Login/Firebase/firebase.init";

initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .finally(()=> setIsloading(false));
    }

    const logout = () => {
        setIsloading(true);
        signOut(auth)
        .then(result => {})
        .finally(()=> setIsloading(false));
    }

    useEffect(()=>{
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if(user){
                  setUser(user);
              }else{
                  setUser({});
              }

              setIsloading(false);
              
          });
          return () => unsubscribed;
      },[]);

    return {
        handleGoogleSignIn,
        user,
        logout,
        isLoading
    };
}

export default useFirebase;