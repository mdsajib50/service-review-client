import { getAuth } from '@firebase/app';
import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';

const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = use
    const authInfo={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;