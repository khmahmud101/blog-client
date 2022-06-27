import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
const PrivateRoute = ({  children, ...rest }) => {
    const {user,isLoading} = useAuth()
    const location = useLocation()
    if (isLoading){
        return <CircularProgress/>
    } 
    else{
        
       return user.email ? children : <Navigate to="/login" state={{from:location}}/>
    }
        
      
    
      
};

export default PrivateRoute;