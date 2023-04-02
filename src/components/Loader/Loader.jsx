import { Backdrop, Box, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './LoaderStyles';

export const Loader = ({ type = 'light' }) => {
  return type === 'light' ? (
    <Box sx={styles.wrap}>
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    <Backdrop sx={styles.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

Loader.propTypes = {
  type: PropTypes.oneOf(['light', 'dark']),
};
