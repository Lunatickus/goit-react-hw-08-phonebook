import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { deleteContact } from 'redux/contacts/contactOperations';
import List from '@mui/material/List';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List
      sx={{
        mt: 2,
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mx: 'auto',
      }}
    >
      {contacts.map(contact => {
        return (
          <ContactListItem
            contact={contact}
            handleDelete={() => dispatch(deleteContact(contact.id))}
            key={contact.id}
          />
        );
      })}
    </List>
  );
};
