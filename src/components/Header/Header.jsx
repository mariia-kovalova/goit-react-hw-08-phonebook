import { useState } from 'react';
import { useAuth } from 'hooks';
import { AppBar, Box, Container, IconButton } from '@mui/material';
import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenu } from 'components/MobileMenu';
import { styles } from './HeaderStyles';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="relative">
      <Container>
        <Box sx={styles.headerContentWrap}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.menuIconBtn}
          >
            <MenuIcon />
          </IconButton>
          {mobileOpen && <MobileMenu onMenuClose={handleDrawerToggle} />}
          <Logo />
          <Box sx={styles.navbarWrap}>
            <Navigation />
            {isLoggedIn && <UserMenu />}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
