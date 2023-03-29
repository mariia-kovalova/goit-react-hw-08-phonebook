import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

import { Avatar, Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = memo(function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  const { id, name, number } = contact;

  return (
    <Box
      component="li"
      sx={{
        padding: '10px',
        bgcolor: 'primary.50',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Avatar
          alt="user avatar"
          src="https://cdn-icons-png.flaticon.com/512/2977/2977285.png"
        />
        <Box>
          <Typography>{name}</Typography>
          <Typography>{number}</Typography>
        </Box>
      </Box>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
});

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
