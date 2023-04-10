import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';
import { Section } from 'components/common/Section';

const styles = {
  welcomeTitle: {
    textAlign: 'center',
    marginTop: '100px',
    fontSize: { xs: '2rem', sm: '3rem' },
  },
};

const HomeView = () => (
  <>
    <Helmet>
      <title>PhoneBook</title>
    </Helmet>
    <Section>
      <Typography sx={styles.welcomeTitle} component="h2" variant="h3">
        Welcome to your PhoneBook
      </Typography>
    </Section>
  </>
);

export default HomeView;
