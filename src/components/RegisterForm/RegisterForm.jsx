import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './consts/inputValidation';
import { getDefaultValues } from 'utils/getDefaultValues';

import { Box } from '@mui/system';
import { FormField } from 'components/FormField';
import { inputsList } from './consts/inputsList';
import { Button } from '@mui/material';
import { styles } from './RegisterFormStyles';

const defaultValues = getDefaultValues(inputsList);

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues,
  });
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registration(data));
    console.log(data);
    reset();
  };

  const isError = inputName => {
    if (errors[inputName]) return true;
    return false;
  };

  const getErrorMassage = inputName => errors[inputName].message;
  return (
    <Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {inputsList.map(({ inputName, type, id }) => (
        <FormField
          key={id}
          inputName={inputName}
          type={type}
          id={id}
          register={register}
          isError={isError}
          getErrorMassage={getErrorMassage}
        />
      ))}
      <Button type="submit" fullWidth variant="contained">
        Register
      </Button>
    </Box>
  );
};
