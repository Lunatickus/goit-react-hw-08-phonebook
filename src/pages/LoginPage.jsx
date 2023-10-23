import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';

const LoginPage = () => {
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
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
