import PropTypes from 'prop-types';
import { capitalize } from 'utils/capitalize';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const FormField = ({
  inputName,
  type,
  id,
  register,
  isError,
  getErrorMassage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormControl error={isError(inputName)}>
      <InputLabel htmlFor={id}>{capitalize(inputName)}</InputLabel>
      {type !== 'password' ? (
        <OutlinedInput
          id={id}
          type={type}
          label={capitalize(inputName)}
          aria-describedby={id}
          required
          {...register(inputName)}
        />
      ) : (
        <OutlinedInput
          id={id}
          type={showPassword ? 'text' : 'password'}
          label={capitalize(inputName)}
          aria-describedby={id}
          required
          {...register(inputName)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      )}
      {isError(inputName) && (
        <FormHelperText id={id}>{getErrorMassage(inputName)}</FormHelperText>
      )}
    </FormControl>
  );
};

FormField.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  isError: PropTypes.func.isRequired,
  getErrorMassage: PropTypes.func.isRequired,
};
