import { useAuth } from 'hooks';
import { Box, ListItemButton, Toolbar } from '@mui/material';
import { StyledNavLink } from './Navigation.styled';
import { linksList } from './consts/linksList';
import { styles } from './NavigationStyles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar component="nav" sx={styles.nav}>
      <Box component="ul" sx={styles.list}>
        {linksList(isLoggedIn).map(({ path, page, render }) =>
          render ? (
            <Box component="li" key={page}>
              <ListItemButton component={StyledNavLink} to={path}>
                {page}
              </ListItemButton>
            </Box>
          ) : (
            ''
          )
        )}
      </Box>
    </Toolbar>
  );
};
