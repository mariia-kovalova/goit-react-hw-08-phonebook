import { withPrivatRedirect } from 'hoc/withPrivatRedirect';
import { Box, Avatar, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Section } from 'components/common/Section';
import { RegisterForm } from 'components/RegisterForm';
import { StyledRouterLink } from 'components/common/StyledRouterLink/StyledRouterLink';
import { Helmet } from 'react-helmet';

const RegisterView = () => (
  <>
    <Helmet>
      <title>Register</title>
    </Helmet>
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
          Registration
        </Typography>
        <RegisterForm />
        <Link component={StyledRouterLink} sx={{ mt: 3 }} to="/login">
          Already have an account? Log in
        </Link>
      </Box>
    </Section>
  </>
);

export default withPrivatRedirect(RegisterView, '/contacts');
