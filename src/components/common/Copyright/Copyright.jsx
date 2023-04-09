import { HOME_ROUTE } from 'consts/routes';
import { Link, Typography } from '@mui/material';
import { StyledRouterLink } from 'components/common/StyledRouterLink/StyledRouterLink';

export const Copyright = () => (
  <Typography variant="body2" color="text.secondary">
    {'Copyright © '}
    <Link component={StyledRouterLink} color="inherit" to={HOME_ROUTE}>
      PhoneBook
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);
