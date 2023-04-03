import { createTheme } from '@mui/material';
import { grey, pink, teal } from '@mui/material/colors';

// const mode = 'light';
const mode = 'dark';

export const theme = createTheme({
  palette: {
    mode,
    primary: teal,
    secondary: teal,
    extra: {
      pink: pink,
      contactItemBGC: mode === 'light' ? teal[50] : grey[600],
      footerBGC: mode === 'light' ? teal[100] : grey[800],
      modalBGC: mode === 'light' ? 'fff' : grey[900],
    },
  },
});
