import { useAuth } from 'hooks';
import { AppBar, Box, Container } from '@mui/material';
import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="relative">
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
