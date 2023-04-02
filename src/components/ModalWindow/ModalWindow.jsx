import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';

export const ModalWindow = ({ children, onModalClose }) => {
  return (
    <Modal
      open
      onClose={onModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: 'inline-flex',
          bgcolor: 'common.white',
          padding: '20px',
          borderRadius: '3px',
          position: 'absolute',
          top: { xs: '35%', sm: '50%' },
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.element,
  onModalClose: PropTypes.func.isRequired,
};
