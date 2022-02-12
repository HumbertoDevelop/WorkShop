import React from 'react';
import { Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const isLogged = localStorage.getItem('token');
  return isLogged ? children : <Navigate to="/login"/> ;
};

export default ProtectedRoute;
