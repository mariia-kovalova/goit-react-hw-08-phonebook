import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { updateContact } from 'redux/contacts/operations';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './consts/inputValidation';

import { Box, Button } from '@mui/material';
import { FormField } from 'components/common/FormField';
import { inputsList } from './consts/inputsList';

import PropTypes from 'prop-types';
import { styles } from './UpdateContactFormStyles';
import { toast } from 'react-toastify';

export const UpdateContactForm = ({ id, onCloseModal }) => {
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
    if (isChanged) return onCloseModal();
    const contactInfo = contacts.find(({ name }) => name === data.name);
    if (contactInfo) return toast(`${data.name} is already in your contacts`);
    dispatch(updateContact({ id, ...data }));
    toast(`${data.name} was updated`);
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
          Update Contact
        </Button>
        <Button type="button" variant="outlined" onClick={() => onCloseModal()}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

UpdateContactForm.propTypes = {
  id: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
