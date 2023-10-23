import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';

const RegisterPage = () => {
  return (
    <Box
      sx={{
        boxShadow: 1,
        width: 400,
        mt: 15,
        p: 2,
        borderRadius: 1,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
