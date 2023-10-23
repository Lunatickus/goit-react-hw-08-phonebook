import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';

const LoginPage = () => {
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
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
