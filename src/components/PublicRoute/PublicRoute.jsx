import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/selectors';
import { Navigate } from 'react-router-dom'; 
import React from 'react';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuthenticated);
  if (isAuth) return <Navigate to={'/phonebook'} />;
  return React.cloneElement(children, { outlet: 'public' });
};

export default PublicRoute;
