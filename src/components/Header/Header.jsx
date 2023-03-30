import { useState } from 'react';
import { useAuth } from 'hooks';
import { AppBar, Box, Container, IconButton } from '@mui/material';
import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenu } from 'components/MobileMenu';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="relative">
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {mobileOpen && <MobileMenu onMenuClose={handleDrawerToggle} />}
          <Logo />
          <Box sx={{ display: 'flex' }}>
            <Navigation />
            {isLoggedIn && <UserMenu />}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
