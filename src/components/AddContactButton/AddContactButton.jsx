import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const AddContactButton = () => {
  const handleClick = () => console.log('hello');
  return (
    <IconButton
      variant="contained"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '14px',
        bgcolor: 'primary.400',
        color: 'common.white',
        position: 'fixed',
        top: '80%',
        left: '90%',
      }}
      type="button"
      onClick={handleClick}
    >
      <PersonAddIcon />
    </IconButton>
  );
};
