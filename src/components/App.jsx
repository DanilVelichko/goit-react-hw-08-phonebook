import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// Pages
import Login from 'pages/LogIn/Login';
import Welcome from 'pages/Welcome/Welcome';
import Phonebook from 'pages/Phonebook/Phonebook';
import Registration from 'pages/Registration/Registration';
// Components
import Layout from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// Redux
import { profileThunk } from 'redux/auth/thunk';
import { selectIsAuthenticated } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';
//Services
import { setTokenAuth } from '../api/api';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuth.length > 0) {
      setTokenAuth(`Bearer ${isAuth}`);
      dispatch(profileThunk());
      dispatch(fetchContacts());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
        />

        <Route
          path="/phonebook"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
