import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import React, {createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    co
    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setLoading(false)
            setUser(currentUser)

        });
        return ()=>{
            return unSubscribe()
        }
    },[])
    const authInfo={
            user,
            loading,
            createUser,
            logOut,
            login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;