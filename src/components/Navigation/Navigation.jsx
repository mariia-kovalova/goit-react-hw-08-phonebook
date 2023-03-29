import { useAuth } from 'hooks';
import { List, ListItemButton, Toolbar } from '@mui/material';
import { StyledNavLink } from './Navigation.styled';
import { LinksList } from './linksList';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Toolbar component="nav">
      <List sx={{ display: 'flex' }}>
        {LinksList(isLoggedIn).map(({ path, page, render }) =>
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
