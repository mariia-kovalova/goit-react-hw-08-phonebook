import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

import { SharedLayout } from 'components/SharedLayout';
import { Loader } from './common/Loader';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'consts/routes';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader type="dark" />
  ) : (
    <Routes>
      <Route path={HOME_ROUTE} element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route path={REGISTER_ROUTE} element={<RegisterView />} />
        <Route path={LOGIN_ROUTE} element={<LoginView />} />
        <Route path={CONTACTS_ROUTE} element={<ContactsView />} />
        <Route path="*" element={<HomeView />} />
      </Route>
    </Routes>
  );
};

// ideas:

// user page view
// папки як модулі

// log in with google

// firebase - for "favourite contacts"
// env for firebase usage ?
