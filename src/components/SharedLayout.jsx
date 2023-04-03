import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Main } from './GlobalStyles.styled';
import { theme } from './theam';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
      <ToastContainer autoClose={2500} theme={theme.palette.mode} />
    </>
  );
};
