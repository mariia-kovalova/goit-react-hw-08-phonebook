import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

import { Avatar, Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import avatarsList from './avatarsList.json';
import { getRandomAvatar } from 'utils/getRandomAvatar';

export const ContactItem = memo(function ContactItem({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const avatar = getRandomAvatar(avatarsList);

  const handleDelete = () => dispatch(deleteContact(id));

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
        <Avatar alt={avatar.alt} src={avatar.src} />
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
