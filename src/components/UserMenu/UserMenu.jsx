import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styles } from './UserMenuStyles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Box sx={styles.userMenu}>
      <Avatar
        alt="user avatar"
        src="https://cdn-icons-png.flaticon.com/512/2977/2977285.png"
      />
      <Typography sx={styles.userEmail}>{user.email}</Typography>
      <Tooltip title="Log out">
        <IconButton sx={styles.logOutBtn} type="button" onClick={handleClick}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
