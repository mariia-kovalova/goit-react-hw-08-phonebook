import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';
import avatarsList from 'data/avatarsList.json';
import { getRandomAvatar } from 'utils/getRandomAvatar';

export const selectContactsItems = state => state.contacts.items;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectContactsItemsWithAvatar = createSelector(
  [selectContactsItems],
  contacts => {
    return contacts.map(contact => ({
      ...contact,
      avatar: getRandomAvatar(avatarsList),
    }));
  }
);

export const selectFilteresContacts = createSelector(
  [selectContactsItemsWithAvatar, selectFilter],
  (contacts, filter) => {
    if (filter === '') return contacts;
    const normalizedFilter = filter.toLocaleLowerCase();
    const regExp = new RegExp(normalizedFilter, 'gi');
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().match(regExp)
    );
  }
);
