import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/contactOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem
            contact={contact}
            handleDelete={() => dispatch(deleteContact(contact.id))}
            key={contact.id}
          />
        );
      })}
    </ul>
  );
};
