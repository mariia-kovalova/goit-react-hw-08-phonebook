import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './inputValidation';
import { getDefaultValues } from 'utils/getDefaultValues';

import { Box } from '@mui/system';
import { FormField } from 'components/FormField';
import { inputsList } from './inputsList';
import { CommonButton } from 'components/common/CommonButton';

const defaultValues = getDefaultValues(inputsList);

export const LoginForm = () => {
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
    dispatch(logIn(data));
    reset();
  };

  const isError = inputName => {
    if (errors[inputName]) return true;
    return false;
  };

  const getErrorMassage = inputName => errors[inputName].message;
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '400px',
        margin: '0 auto',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <CommonButton type="submit" fullWidth variant="contained">
        Log in
      </CommonButton>
    </Box>
  );
};
