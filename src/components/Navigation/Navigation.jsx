import { useAuth } from 'hooks';
import { List, ListItemButton, Toolbar } from '@mui/material';
import { StyledNavLink } from './Navigation.styled';
import { linksList } from './linksList';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar component="nav" sx={{ display: { xs: 'none', md: 'block' } }}>
      <List sx={{ display: 'flex', margin: 'auto 0' }}>
        {linksList(isLoggedIn).map(({ path, page, render }) =>
          render ? (
            <li key={page}>
              <ListItemButton component={StyledNavLink} to={path}>
                {page}
              </ListItemButton>
            </li>
          ) : (
            ''
          )
        )}
      </List>
    </Toolbar>
  );
};
