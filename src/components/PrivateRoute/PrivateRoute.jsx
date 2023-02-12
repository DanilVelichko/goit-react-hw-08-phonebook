import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/selectors';
import { Navigate } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ children }) => {
   const isAuth = useSelector(selectIsAuthenticated);

  if (!isAuth) return <Navigate to={'/login'} />;
  return React.cloneElement(children, { outlet: 'public' });
};

export default PrivateRoute;
