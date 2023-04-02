import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ModalWindow } from 'components/ModalWindow';
import { UpdateContactForm } from 'components/UpdateContactForm';
import { styles } from './ContactItemStyles';

export const ContactItem = memo(function ContactItem({ contact }) {
  const [showModal, setShowModal] = useState(false);
  const { id, name, number, avatar } = contact;
  const dispatch = useDispatch();

  const handleToggleModal = () => setShowModal(!showModal);
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Box component="li" sx={styles.item}>
        <Box sx={styles.itemContentWrap}>
          <Avatar alt={avatar.alt} src={avatar.src} />
          <Box>
            <Typography>{name}</Typography>
            <Typography>{number}</Typography>
          </Box>
        </Box>
        <Box component="ul" sx={styles.btnList}>
          <Tooltip title="Update contact">
            <IconButton aria-label="update" onClick={handleToggleModal}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Dlete contact">
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {showModal && (
        <ModalWindow onModalClose={handleToggleModal}>
          <UpdateContactForm id={id} onModalClose={handleToggleModal} />
        </ModalWindow>
      )}
    </>
  );
});

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
