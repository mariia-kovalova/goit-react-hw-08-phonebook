import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { linksList } from './linksList';
import PropTypes from 'prop-types';

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledNavLink } from './MobileMenu.styled';

export const MobileMenu = ({ onMenuClose }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={true}
        onClose={onMenuClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '280px' },
        }}
      >
        <Box
          onClick={() => onMenuClose()}
          sx={{ textAlign: 'center', position: 'relative' }}
        >
          <IconButton
            onClick={onMenuClose}
            sx={{ position: 'absolute', right: '10px' }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {linksList(isLoggedIn).map(({ path, page, render }) =>
              render ? (
                <li key={page}>
                  <ListItemButton
                    component={StyledNavLink}
                    sx={{ textAlign: 'center' }}
                    to={path}
                  >
                    {page}
                  </ListItemButton>
                </li>
              ) : (
                ''
              )
            )}
            {isLoggedIn && (
              <li>
                <istItemButton type="button" onClick={handleClick}>
                  <Typography sx={{ textAlign: 'left', padding: '8px 16px' }}>
                    Log out
                  </Typography>
                </istItemButton>
              </li>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

MobileMenu.propTypes = {
  onMenuClose: PropTypes.func.isRequired,
};
