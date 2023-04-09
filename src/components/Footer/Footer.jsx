import { Box, Container, Link, Typography } from '@mui/material';
import { Copyright } from 'components/common/Copyright';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styles } from './FooterStyles';

export const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="sm">
      <Box sx={styles.footerContentWrap}>
        <Copyright />
        <Box sx={styles.wrap}>
          <Typography>Developed with</Typography>
          <FavoriteIcon sx={styles.heart} />
          <Typography>by</Typography>
          <Link
            href="https://github.com/mariia-kovalova"
            target="_blank"
            rel="noreferrer noopener nofollow"
            color="inherit"
          >
            Mariia Kovalova
          </Link>
        </Box>
      </Box>
    </Container>
  </Box>
);
