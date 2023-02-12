import React from 'react';
import { addFilter } from 'redux/filter/sliceFilter';
import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContacts,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Phonebook from 'pages/Phonebook/Phonebook';
import Login from 'pages/LogIn/Login';
import Registration from 'pages/Registration/Registration';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { selectIsAuthenticated } from 'redux/selectors';
import PublicRoute from './PublicRoute/PublicRoute';
import Welcome from 'pages/Welcome/Welcome';
import { Navigate } from 'react-router-dom';
import { profileThunk, authThunk } from 'redux/auth/thunk';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isAuth = useSelector(selectIsAuthenticated);

  const formSubmitHandler = data => {
    const matchNameInput = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (matchNameInput) {
      alert(data.name + ' is already in contacts.');
    } else {
      dispatch(addContacts(data));
    }
  };

  const handleDataUpdate = input => {
    dispatch(addFilter(input.currentTarget.value));
  };

  const filteredContacts = useMemo(() => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  }, [contacts, filter]);

  const onDeleteBtn = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    if (
      !isAuth.length > 0 &&
      window.location.pathname !== '/login' &&
      window.location.pathname !== '/registration'
    ) {
      <Navigate to={'/'} />;
    }
    if (isAuth.length > 0 && window.location.pathname === '/phonebook') {
      
      dispatch(fetchContacts());
      <Navigate to={'/phonebook'} />;
    }
  }, [isAuth, dispatch]);

 
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
              <Phonebook
                clickSubmit={formSubmitHandler}
                onDataUpdate={handleDataUpdate}
                arrContacts={filteredContacts}
                onDeleteBtn={onDeleteBtn}
              />
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
