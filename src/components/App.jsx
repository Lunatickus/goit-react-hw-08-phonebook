import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { StyledAppContainer } from './App.styled';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const showLoading = isLoading && !error && contacts.length === 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledAppContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {showLoading && <RotatingLines width="40" />}
    </StyledAppContainer>
  );
};
