import { Box, Typography } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Box
    component={Link}
    to="/"
    sx={{
      display: 'flex',
      alignItems: 'center',
      color: 'common.white',
      textDecoration: 'none',
    }}
  >
    <PersonPinIcon fontSize="large" />
    <Typography component="span" variant="h4" sx={{ padding: '8px' }}>
      PhoneBook
    </Typography>
  </Box>
);
