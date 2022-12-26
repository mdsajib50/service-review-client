import { getAuth } from '@firebase/app';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';

const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = () => {
    return (
        <AuthContext.Provider >
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;