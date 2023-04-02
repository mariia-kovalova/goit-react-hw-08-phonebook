import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './ModalWindowStyles';

export const ModalWindow = ({ children, onModalClose }) => {
  return (
    <Modal
      open
      onClose={onModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.wrap}>{children}</Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.element,
  onModalClose: PropTypes.func.isRequired,
};
