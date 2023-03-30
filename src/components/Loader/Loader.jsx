import { Backdrop, Box, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

export const Loader = ({ type = 'light' }) => {
  return type === 'light' ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

Loader.propTypes = {
  type: PropTypes.string,
};
