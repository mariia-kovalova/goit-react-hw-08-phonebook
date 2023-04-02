import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { updateContact } from 'redux/contacts/operations';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './inputValidation';

import { Box, Button } from '@mui/material';
import { FormField } from 'components/FormField';
import { inputsList } from './inputsList';

import PropTypes from 'prop-types';

export const UpdateContactForm = ({ id, onModalClose }) => {
  const { contacts } = useContacts();
  const { name, number } = contacts.find(item => item.id === id);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      name,
      number,
    },
  });
  const dispatch = useDispatch();

  const onSubmit = data => {
    const isInContacts = contacts.find(contact => contact.name === data.name);
    if (isInContacts) return alert(`${data.name} is aready in contacts.`);
    dispatch(updateContact({ id, ...data }));
    reset();
    onModalClose();
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
        width: { xs: '330px', sm: '400px' },
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
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Button type="submit" variant="contained">
          Update Contact
        </Button>
        <Button type="button" variant="outlined" onClick={() => onModalClose()}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

UpdateContactForm.propTypes = {
  id: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
