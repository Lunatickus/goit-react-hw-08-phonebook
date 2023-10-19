import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledFormContacts,
  StyledFormButton,
  StyledFromLabel,
  StyledErrorText,
  StyledInput,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactOperations';


const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
    number: yup
    .string()
    .matches(
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <StyledErrorText>{message}</StyledErrorText>}
    />
  );
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (contact, { resetForm }) => {
    if (contacts.some(c => contact.name === c.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledFormContacts autoComplete="off">
        <StyledFromLabel>
          <span>Name</span>
          <StyledInput type="text" name="name" />
          <FormError name="name" />
        </StyledFromLabel>

        <StyledFromLabel>
          <span>Number</span>
          <StyledInput type="tel" name="number" />
          <FormError name="number" />
        </StyledFromLabel>

        <StyledFormButton type="submit">Add contact</StyledFormButton>
      </StyledFormContacts>
    </Formik>
  );
};
