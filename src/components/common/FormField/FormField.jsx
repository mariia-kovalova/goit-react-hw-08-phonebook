import PropTypes from 'prop-types';
import { capitalize } from 'utils/capitalize';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

export const FormField = ({
  inputName,
  type,
  id,
  register,
  isError,
  getErrorMassage,
}) => {
  return (
    <FormControl error={isError(inputName)}>
      <InputLabel htmlFor={id}>{capitalize(inputName)}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        label={capitalize(inputName)}
        aria-describedby={id}
        {...register(inputName)}
      />
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
