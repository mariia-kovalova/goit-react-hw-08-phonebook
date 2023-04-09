import { useState } from 'react';
import { useAuth } from 'hooks';

import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

import { Logo } from 'components/common/Logo';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { MobileMenu } from 'components/MobileMenu';

import { AppBar, Box, Container, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { styles } from './HeaderStyles';
import { toggleTheme } from 'redux/theme/operations';
import { DARK, LIGHT } from 'consts/theme';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const mode = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleToggleMode = () => {
    dispatch(toggleTheme());
  };

  const handleToggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="relative">
      <Container>
        <Box sx={styles.headerContentWrap}>
          <Box sx={styles.menuIconBtnWrap}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {mobileOpen && <MobileMenu onMenuClose={handleToggleDrawer} />}
          <Logo />
          <Box sx={styles.navbarWrap}>
            <Navigation />
            <Box sx={styles.modeIconBtnWrap}>
              <Tooltip
                title={`switch to ${mode === LIGHT ? DARK : LIGHT} mode`}
              >
                <IconButton onClick={handleToggleMode} color="inherit">
                  {mode === LIGHT ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
              </Tooltip>
            </Box>
            {isLoggedIn && <UserMenu />}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
