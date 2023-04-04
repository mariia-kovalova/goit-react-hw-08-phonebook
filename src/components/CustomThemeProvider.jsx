import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { grey, pink, teal } from '@mui/material/colors';
import { refreshTheme } from 'redux/theme/operations';

const getDesignTokens = mode => ({
  palette: {
    mode,
    primary: teal,
    secondary: teal,
    extra: {
      pink: pink,

      contactItemBGC: mode === 'light' ? teal[50] : grey[600],
      footerBGC: mode === 'light' ? teal[100] : grey[800],
      modalBGC: mode === 'light' ? '#fff' : grey[900],
    },
  },
});

export const CustomThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  console.log(theme);

  useEffect(() => {
    dispatch(refreshTheme());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
