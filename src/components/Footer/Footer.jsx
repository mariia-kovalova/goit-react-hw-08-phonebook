import { Box, Container, Link, Typography } from '@mui/material';
import { Copyright } from 'components/Copyright';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      bgcolor: 'primary.100',
    }}
  >
    <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          gap: '5px',
        }}
      >
        <Copyright />
        <Typography> Developed with</Typography>
        <FavoriteIcon sx={{ color: 'extra.pink.400' }} />
        <Typography>by</Typography>
        <Link href="https://github.com/mariia-kovalova">Mariia Kovalova</Link>
      </Box>
    </Container>
  </Box>
);
