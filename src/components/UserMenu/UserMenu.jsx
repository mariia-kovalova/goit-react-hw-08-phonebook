import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Avatar, Box, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'space-between',
      }}
    >
      <Avatar
        alt="user avatar"
        src="https://cdn-icons-png.flaticon.com/512/2977/2977285.png"
      />
      <p>{user.email}</p>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'common.white',
          textTransform: 'none',
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
        type="button"
        onClick={handleClick}
      >
        <span>Log out</span>
        <ExitToAppIcon />
      </Button>
    </Box>
  );
};
