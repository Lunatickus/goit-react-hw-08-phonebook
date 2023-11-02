import { createSelector } from '@reduxjs/toolkit';

const selectContactsStore = state => state.contacts;
const selectFilterStore = state => state.filter;

export const selectContacts = createSelector(
  selectContactsStore,
  contactsStore => contactsStore.items
);

export const selectIsLoading = createSelector(
  selectContactsStore,
  contactsStore => contactsStore.isLoading
);

export const selectError = createSelector(
  selectContactsStore,
  contactsStore => contactsStore.error
);

export const selectFilter = createSelector(
  selectFilterStore,
  filterStore => filterStore.filterValue
);

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
