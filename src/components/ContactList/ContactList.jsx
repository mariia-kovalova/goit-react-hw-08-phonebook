import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useContacts } from 'hooks';
import { selectFilter } from 'redux/filter/selectors';

import { ContactItem } from 'components/ContactItem';
import { Loader } from 'components/Loader';
import { InfoText } from 'components/InfoText';
import { List } from '@mui/material';

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
      {isLoading && <Loader open={isLoading} />}
      {showError && <InfoText>Sorry, something went wrong</InfoText>}
      {empty && <InfoText>Your contacts list is empty</InfoText>}
      {noMatches && <InfoText>Sorry, there is no such contacts</InfoText>}
      {showList && (
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
