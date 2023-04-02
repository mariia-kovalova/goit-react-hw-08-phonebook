import { Section } from 'components/Section';
import { Box, Avatar, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { LoginForm } from 'components/LoginForm';
import { StyledRouterLink } from 'components/GlobalStyles.styled';

const LoginView = () => {
  return (
    <Section>
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign in
        </Typography>
        <LoginForm />
        <Link component={StyledRouterLink} sx={{ mt: 3 }} to="/register">
          Don't have an account? Register
        </Link>
      </Box>
    </Section>
  );
};

export default LoginView;
