import { getAuth } from '@firebase/app';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';

const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = () => {
    return (
        <Au>
            
        </Au>
    );
};

export default AuthProvider;