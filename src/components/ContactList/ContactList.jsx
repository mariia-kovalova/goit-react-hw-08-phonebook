import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useContacts } from 'hooks';
import { selectFilter } from 'redux/filter/selectors';

import { ContactItem } from 'components/ContactItem';
import { Loader } from 'components/common/Loader';
import { InfoText } from 'components/common/InfoText';
import { List } from '@mui/material';
import { styles } from './ContactListStyles';

export const ContactList = () => {
  const { isLoading, error, contacts } = useContacts();
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isOk = !isLoading && !error;
  const showError = !isLoading && error;
  const empty = isOk && filter === '' && contacts.length === 0;
  const noMatches = isOk && filter !== '' && contacts.length === 0;
  const showList = !error && contacts.length !== 0;

  return (
    <>
      {showList && (
        <List sx={styles.list}>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
      {isLoading && <Loader />}
      {showError && <InfoText>Sorry, something went wrong</InfoText>}
      {empty && <InfoText>Your contacts list is empty</InfoText>}
      {noMatches && <InfoText>Sorry, there is no such contacts</InfoText>}
    </>
  );
};
