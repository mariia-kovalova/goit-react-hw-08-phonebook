import { Link, Typography } from '@mui/material';
import { StyledRouterLink } from 'components/GlobalStyles.styled';

export const Copyright = () => (
  <Typography variant="body2" color="text.secondary">
    {'Copyright © '}
    <Link component={StyledRouterLink} color="inherit" to="/">
      PhoneBook
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);
