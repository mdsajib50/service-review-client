import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, {createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(,[])
    const authInfo={
            user,
            loading,
            createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;