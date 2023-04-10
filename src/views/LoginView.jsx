import { Helmet } from 'react-helmet';
import { CONTACTS_ROUTE, REGISTER_ROUTE } from 'consts/routes';
import { withPrivatRedirect } from 'hoc/withPrivatRedirect';

import { Section } from 'components/common/Section';
import { Box, Avatar, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { LoginForm } from 'components/LoginForm';
import { StyledRouterLink } from 'components/common/StyledRouterLink';

const styles = {
  wrap: {
    marginTop: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: { m: 1, bgcolor: 'secondary.main' },
  text: { mb: 3 },
  link: { mt: 3 },
};

const LoginView = () => (
  <>
    <Helmet>
      <title>Log In</title>
    </Helmet>
    <Section>
      <Box sx={styles.wrap}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={styles.text}>
          Sign in
        </Typography>
        <LoginForm />
        <Link component={StyledRouterLink} sx={styles.link} to={REGISTER_ROUTE}>
          Don't have an account? Register
        </Link>
      </Box>
    </Section>
  </>
);

export default withPrivatRedirect(LoginView, CONTACTS_ROUTE);
