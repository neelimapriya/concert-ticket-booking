import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut,onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext =createContext(null);
const auth = getAuth(app);
const provider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [User,setUser]=useState(null)

    const newUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleSignIn=()=>{
        return signInWithPopup(auth,provider)
    }

    const SignOut=()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state change', currentUser)
            setUser(currentUser)
            
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        User,newUser,signIn,SignOut, GoogleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;