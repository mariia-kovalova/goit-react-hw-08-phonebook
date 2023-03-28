import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';
import { Header } from 'components/Header';
import { Main } from './SharedLayout.styled';
import { Footer } from 'components/Footer';

export const SharedLayout = () => (
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
