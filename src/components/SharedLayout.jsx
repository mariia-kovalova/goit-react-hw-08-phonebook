import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Main } from './GlobalStyles.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader open={true} />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};
