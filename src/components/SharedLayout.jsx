import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

import { Loader } from 'components/Loader';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Main } from './GlobalStyles.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  const mode = useSelector(selectTheme);

  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
      <ToastContainer autoClose={2500} theme={mode} />
    </>
  );
};
