import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'redux/selectors';
import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';

const PublicRoute = () => {
  const isAuth = useSelector(selectIsAuthenticated);
  if (isAuth) {
    return <Navigate to={'/phonebook'} />;
  } else return <Outlet />;
};

export default PublicRoute;
