import { useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectContactsItems,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const contacts = useSelector(selectContactsItems);

  return {
    isLoading,
    error,
    contacts,
  };
};
