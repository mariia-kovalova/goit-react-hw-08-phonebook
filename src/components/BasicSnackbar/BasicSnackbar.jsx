import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const popUpRoot = document.querySelector('#pop-up-root');

export const BasicSnackbar = ({ onClose, severity, variant, children }) => {
  return createPortal(
    <Snackbar
      open
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Alert onClose={onClose} severity={severity} variant={variant}>
        {children}
      </Alert>
    </Snackbar>,
    popUpRoot
  );
};

BasicSnackbar.propTypes = {
  onClose: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
