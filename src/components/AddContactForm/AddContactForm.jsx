import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from './consts/inputValidation';
import { getDefaultValues } from 'utils/getDefaultValues';

import { Box, Button } from '@mui/material';
import { FormField } from 'components/common/FormField';
import { inputsList } from './consts/inputsList';

import PropTypes from 'prop-types';
import { styles } from './AddContactFormStyles';
import { toast } from 'react-toastify';

const defaultValues = getDefaultValues(inputsList);

export const AddContactForm = ({ onCloseModal }) => {
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
    if (contactInfo) return toast(`${data.name} is already in your contacts`);
    dispatch(addContact(data));
    toast(`${data.name} was added to your contacts`);
    reset();
    onCloseModal();
  };

  return (
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
          Add Contact
        </Button>
        <Button type="button" variant="outlined" onClick={() => onCloseModal()}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

AddContactForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
