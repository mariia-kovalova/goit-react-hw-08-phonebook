import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const InfoText = ({ children, color }) => {
  return (
    <Typography
      component="p"
      sx={{ color, textAlign: 'center', padding: '30px' }}
    >
      {children}
    </Typography>
  );
};

InfoText.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
};
