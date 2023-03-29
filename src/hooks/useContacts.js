import { useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectFilteresContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const contacts = useSelector(selectFilteresContacts);

  return {
    isLoading,
    error,
    contacts,
  };
};
