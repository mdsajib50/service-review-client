import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, {createContext, useState } from 'react';
import app from '../../firebase/firebase.config';

const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;