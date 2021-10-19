import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import initializeAuth from "../Pages/Login/Firebase/firebase.init";

initializeAuth();
const useFirebase = () => {
    //initializing states
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true);
    const auth = getAuth();
    const history = useHistory();
    // set google login
    const handleGoogleSignIn = () => {
        // setIsloading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        // .then(result => setUser(result.user))
        // .finally(()=> setIsloading(false));
    }

    // set Input fields
    const handleSetName = (e) => {
        setName(e.target.value);
    }
    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSetConfirmPassword = (e) => {
        
        setConfirmPassword(e.target.value);
    }

    //Verify fields
    const verifyFields = (formType) => {
        setError('');
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setError('Invalid Email');
            return false;
        }

        if(password.length <= 6 || password.length >= 25){
            setError('Invalid Password. Use at least 6 characters and at most 25 characters');
            return false;
        }
        
        if(formType === 'register'){
            if(name.length < 3){
                setError('Invalid Name. Use at least 3 words');
                return false;
            }
            if(password !== confirmPassword){
                setError('Password and Confirm Password must be same');
                return false;
            }
        }
        return true;

    }

   

    //set email Register
    const handleEmailRegister = (e) => {
        e.preventDefault();
        const isValid = verifyFields('register');
        if(isValid){
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                });
                history.push('/home');
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
              });
            
        }else{
            return false;
        }
    }

    //signout
    const logout = () => {
        setIsloading(true);
        signOut(auth)
        .then(result => {})
        .finally(()=> setIsloading(false));
    }

    //onAuthStateChanged
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
        auth,
        name,
        email,
        password,
        logout,
        isLoading,
        handleSetName,
        handleSetEmail,
        handleSetPassword,
        handleSetConfirmPassword,
        handleEmailRegister,
        error,
        setError,
        updateProfile,
        verifyFields
    };
}

export default useFirebase;