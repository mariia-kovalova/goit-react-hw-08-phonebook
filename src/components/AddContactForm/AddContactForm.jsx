import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from './consts/inputValidation';
import { getDefaultValues } from 'utils/getDefaultValues';

import { Box, Button } from '@mui/material';
import { BasicSnackbar } from 'components/BasicSnackbar';
import { FormField } from 'components/FormField';
import { inputsList } from './consts/inputsList';

import PropTypes from 'prop-types';
import { styles } from './AddContactFormStyles';

const defaultValues = getDefaultValues(inputsList);

export const AddContactForm = ({ onModalClose }) => {
  const [contactName, setContactName] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const contactInfo = contacts.find(({ name }) => name === data.name);
    if (contactInfo) return setContactName(contactInfo.name);
    dispatch(addContact(data));
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
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Button type="submit" variant="contained">
            Add Contact
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

AddContactForm.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};
