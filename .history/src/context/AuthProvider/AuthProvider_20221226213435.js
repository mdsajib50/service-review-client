import { getAuth } from '@firebase/app';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';

const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = () => {
    c
    return (
        <AuthContext.Provider value={}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;