import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Button } from 'components/Button';
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
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
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
