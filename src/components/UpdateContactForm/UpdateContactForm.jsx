import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { updateContact } from 'redux/contacts/operations';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './consts/inputValidation';

import { Box, Button } from '@mui/material';
import { FormField } from 'components/FormField';
import { inputsList } from './consts/inputsList';

import PropTypes from 'prop-types';
import { styles } from './UpdateContactFormStyles';

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
      <Box sx={styles.btnList}>
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
