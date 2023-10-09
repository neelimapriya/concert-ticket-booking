import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut,onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext =createContext(null);
const auth = getAuth(app);
const provider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [User,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const newUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const SignOut=()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state change', currentUser)
            setUser(currentUser);
            setLoading(false)
            
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        User,newUser,signIn,SignOut, GoogleSignIn, loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;