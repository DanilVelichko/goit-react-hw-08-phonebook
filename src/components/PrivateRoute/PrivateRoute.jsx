import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/selectors';
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

const PrivateRoute = () => {
  const isAuth = useSelector(selectIsAuthenticated);
  if (!isAuth) { return <Navigate to={'/login'} />; }
  else 
  return <Outlet/>
};

export default PrivateRoute;
