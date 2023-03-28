import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Avatar, Box } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { CommonButton } from 'components/common/CommonButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Avatar
        alt="Remy Sharp"
        src="https://cdn-icons-png.flaticon.com/512/2977/2977285.png"
      />
      <p>{user.email}</p>
      <CommonButton
        sx={{ color: 'common.white' }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <span>Logout</span>
        <ExitToAppIcon />
      </CommonButton>
    </Box>
  );
};
