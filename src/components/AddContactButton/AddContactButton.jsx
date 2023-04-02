import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PropTypes from 'prop-types';
import { styles } from './AddContactButtonStyles';

export const AddContactButton = ({ onOpenModal }) => (
  <IconButton
    variant="contained"
    sx={styles.btn}
    type="button"
    onClick={onOpenModal}
  >
    <PersonAddIcon />
  </IconButton>
);

AddContactButton.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};
