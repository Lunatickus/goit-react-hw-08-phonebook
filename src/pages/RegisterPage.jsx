import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';

const RegisterPage = () => {
  return (
    <Box
      sx={{
        boxShadow: 1,
        width: '100%',
        maxWidth: 400,
        height: 'auto',
        p: 2,
        borderRadius: 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
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
