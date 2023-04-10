import { Helmet } from 'react-helmet';
import { CONTACTS_ROUTE, LOGIN_ROUTE } from 'consts/routes';
import { withPrivatRedirect } from 'hoc/withPrivatRedirect';

import { Box, Avatar, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Section } from 'components/common/Section';
import { RegisterForm } from 'components/RegisterForm';
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
const RegisterView = () => (
  <>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <Section>
      <Box sx={styles.wrap}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={styles.text}>
          Registration
        </Typography>
        <RegisterForm />
        <Link component={StyledRouterLink} sx={styles.link} to={LOGIN_ROUTE}>
          Already have an account? Log in
        </Link>
      </Box>
    </Section>
  </>
);

export default withPrivatRedirect(RegisterView, CONTACTS_ROUTE);
