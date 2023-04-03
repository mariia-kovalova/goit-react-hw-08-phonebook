import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { updateContact } from 'redux/contacts/operations';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './consts/inputValidation';

import { Box, Button } from '@mui/material';
import { BasicSnackbar } from 'components/BasicSnackbar';
import { FormField } from 'components/FormField';
import { inputsList } from './consts/inputsList';

import PropTypes from 'prop-types';
import { styles } from './UpdateContactFormStyles';

export const UpdateContactForm = ({ id, onModalClose, onUpdate }) => {
  const [contactName, setContactName] = useState(null);
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
    const isChanged = data.name === name && data.number === number;
    if (isChanged) return onModalClose();
    const contactInfo = contacts.find(({ name }) => name === data.name);
    if (contactInfo) return setContactName(contactInfo.name);
    dispatch(updateContact({ id, ...data }));
    onUpdate();
    reset();
    onModalClose();
  };

  return (
    <>
      <Box component="form" sx={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {inputsList.map(({ inputName, type, id }) => (
          <FormField
            key={id}
            inputName={inputName}
            type={type}
            id={id}
            register={register}
            errors={errors}
          />
        ))}
        <Box sx={styles.btnList}>
          <Button type="submit" variant="contained">
            Update Contact
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={() => onModalClose()}
          >
            Cancel
          </Button>
        </Box>
      </Box>
      {contactName && (
        <BasicSnackbar
          onClose={() => setContactName(null)}
          severity="warning"
          variant="filled"
        >
          {contactName} is aready in contacts.
        </BasicSnackbar>
      )}
    </>
  );
};

UpdateContactForm.propTypes = {
  id: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
