import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Item } from './ContactItem.styled';

export const ContactItem = memo(function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  const { id, name, number } = contact;

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Item>
  );
});

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
