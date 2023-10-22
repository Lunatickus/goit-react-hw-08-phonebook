import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  email: yup
    .string()
    .email('Enter valid email. For example user@gmail.com')
    .required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .required(),
});

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete='off'>
        <label>
          <span>Username</span>
          <Field type="text" name="name" />
          <FormError name="name" />
        </label>

        <label>
          <span>Email</span>
          <Field type="email" name="email" />
          <FormError name="email" />
        </label>

        <label>
          <span>Password</span>
          <Field type="password" name="password" />
          <FormError name="password" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
