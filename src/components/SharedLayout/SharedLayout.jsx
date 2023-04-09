import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

import { Loader } from 'components/common/Loader';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from '@mui/material';
import { styles } from './SharedLayoutStyles';

export const SharedLayout = () => {
  const mode = useSelector(selectTheme);

  return (
    <>
      <Header />
      <Box component="main" sx={styles.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
      <ToastContainer autoClose={2500} theme={mode} />
    </>
  );
};
