import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const schema = yup.object().shape({
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

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
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

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
