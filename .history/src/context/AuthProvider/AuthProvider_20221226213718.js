import { getAuth } from '@firebase/app';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';

const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = () => {
    const [user, setUser]
    const authInfo={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;