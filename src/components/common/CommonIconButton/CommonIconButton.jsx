import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

export const CommonIconButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
  type,
}) => {
  return (
    <IconButton
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
      type={type}
    >
      {children}
    </IconButton>
  );
};

CommonIconButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  sx: PropTypes.object,
  variant: PropTypes.string,
  type: PropTypes.string,
};
