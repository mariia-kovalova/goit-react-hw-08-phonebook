import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const CommonButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
  type,
}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
      type={type}
    >
      {children}
    </Button>
  );
};

CommonButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  sx: PropTypes.object,
  variant: PropTypes.string,
  type: PropTypes.string,
};
