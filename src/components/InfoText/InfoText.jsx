import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './InfoTextStyles';

export const InfoText = ({ children, color = 'common.black' }) => {
  return (
    <Typography component="p" sx={{ ...styles.text, color }}>
      {children}
    </Typography>
  );
};

InfoText.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
};
