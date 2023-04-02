import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './consts/inputValidation';
import { getDefaultValues } from 'utils/getDefaultValues';

import { Box, Button } from '@mui/material';
import { FormField } from 'components/FormField';
import { inputsList } from './consts/inputsList';

import PropTypes from 'prop-types';

const defaultValues = getDefaultValues(inputsList);

export const AddContactForm = ({ onModalClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues,
  });
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const isInContacts = contacts.find(contact => contact.name === data.name);
    if (isInContacts) return alert(`${data.name} is aready in contacts.`);
    dispatch(addContact(data));
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
          Add Contact
        </Button>
        <Button type="button" variant="outlined" onClick={() => onModalClose()}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

AddContactForm.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};
