import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatRoute';

import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

import { SharedLayout } from './SharedLayout';
import { Loader } from './Loader';

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
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterView />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginView />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />
        <Route path="*" element={<HomeView />} />
      </Route>
    </Routes>
  );
};

// ideas:

// показувати помилку при логіні/реєстрації - bad request- обробка помилок
// темна тема
// user page view
// log in with google
