import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PropTypes from 'prop-types';

export const AddContactButton = ({ onOpenModal }) => (
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
      '&:hover': {
        bgcolor: 'primary.300',
      },
    }}
    type="button"
    onClick={onOpenModal}
  >
    <PersonAddIcon />
  </IconButton>
);

AddContactButton.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};
