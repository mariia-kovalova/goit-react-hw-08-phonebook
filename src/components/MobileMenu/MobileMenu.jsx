import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { linksList } from './consts/linksList';
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
import { styles } from './MobileMenuStyles';

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
        sx={styles.drawer}
      >
        <Box onClick={() => onMenuClose()} sx={styles.wrap}>
          <IconButton onClick={onMenuClose} sx={styles.closeBtn}>
            <CloseIcon />
          </IconButton>
          <List>
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
            {isLoggedIn && (
              <Box component="li">
                <ListItemButton type="button" onClick={handleClick}>
                  <Typography>Log out</Typography>
                </ListItemButton>
              </Box>
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
