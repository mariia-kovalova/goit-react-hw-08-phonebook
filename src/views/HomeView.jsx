import { Typography } from '@mui/material';
import { Section } from 'components/common/Section';

const HomeView = () => {
  return (
    <Section>
      <Typography
        sx={{ textAlign: 'center', marginTop: '100px' }}
        component="h2"
        variant="h3"
      >
        Welcome to your PhoneBook
      </Typography>
    </Section>
  );
};

export default HomeView;
