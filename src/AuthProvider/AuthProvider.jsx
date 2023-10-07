import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut,onAuthStateChanged} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext =createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [User,setUser]=useState(null)

    const newUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
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
        User,newUser,signIn,SignOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;