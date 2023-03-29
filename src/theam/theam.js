import { createTheme } from '@mui/material';
import { pink, teal } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: teal,
    secondary: teal,
    extra: {
      pink: pink,
    },
  },
});

console.log(theme);
