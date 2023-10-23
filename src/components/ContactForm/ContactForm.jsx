import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contactOperations';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';

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

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.some(c => name === c.name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={{width: 600, p: 4, border: '1px solid #1976D2', borderRadius: 2}}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          sx={{ mb: 4 }}
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddIcCallIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          sx={{ mb: 4 }}
          id="number"
          name="number"
          label="number"
          type="tel"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </Box>
  );
};
