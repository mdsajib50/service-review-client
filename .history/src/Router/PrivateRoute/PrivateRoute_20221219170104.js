import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation;
    if (loading) {
        return <h1 className='text-lg'>Loading...</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state = {{form:location}} replace></Navigate>
};

export default PrivateRoute;