import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        p: 1,
        gap: 1,
      }}
    >
      <Typography variant="subtitle1" component="p">
        {user.email}
      </Typography>
      <Button
        onClick={() => dispatch(logOut())}
        variant="outlined"
        endIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </Box>
  );
};
