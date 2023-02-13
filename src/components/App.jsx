import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
// Services
import { setTokenAuth } from '../api/api';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuth) {
      setTokenAuth(`Bearer ${isAuth}`); //поновлення токену у axios для авторизації
      dispatch(profileThunk());
      dispatch(fetchContacts());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Welcome />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/phonebook" element={<Phonebook />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
