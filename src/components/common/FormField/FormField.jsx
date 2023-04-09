import PropTypes from 'prop-types';
import { capitalize } from 'utils/capitalize';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ErrorMessage } from '@hookform/error-message';
import { styles } from './FormFieldStyles';

export const FormField = ({ inputName, type, id, register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const isError = inputName => {
    if (errors[inputName]) return true;
    return false;
  };

  return (
    <>
      <FormControl error={isError(inputName)}>
        <InputLabel htmlFor={id}>{capitalize(inputName)}</InputLabel>
        {type !== 'password' ? (
          <OutlinedInput
            id={id}
            type={type}
            label={capitalize(inputName)}
            aria-describedby={id}
            {...register(inputName, { required: 'This field is required.' })}
          />
        ) : (
          <OutlinedInput
            id={id}
            type={showPassword ? 'text' : 'password'}
            label={capitalize(inputName)}
            aria-describedby={id}
            {...register(inputName, { required: 'This field is required.' })}
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
        <FormHelperText
          component={ErrorMessage}
          id={id}
          errors={errors}
          name={inputName}
          render={({ message }) => (
            <Typography sx={styles.error}>{message}</Typography>
          )}
        />
      </FormControl>
    </>
  );
};

FormField.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
