import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
    <Loader open={isRefreshing} />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="*" element={<HomeView />} />
      </Route>
    </Routes>
  );
};

// питання на леекцію - відновлення паролю

// глазик на пароль
// loader - dots
// показувати помилку при логіні - неправильний паоль чи логін

// див лекцію репети - підчистити залишки інфо пілся логауту
// isrefreshing ? === isLoading (знайти аналог isLoading для auth)

// user page view
// form add user + icon , modal window
// убрать дебаунс у 7-му дз
// не забудь переробити еррор
// переробити контакти
// footer
// запитати що робити з логіном - переносом
