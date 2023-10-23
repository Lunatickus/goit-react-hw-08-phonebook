import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { NavLink, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import Toolbar from '@mui/material/Toolbar';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  const [value, setValue] = useState('/login');

  useEffect(() => {
    if (isLoggedIn) return;
    if (pathname !== '/login' || pathname !== '/register') return;
    setValue(pathname);
  }, [isLoggedIn, pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: 'whitesmoke', color: '#00000099' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              alignItems: 'center',
              display: 'flex',
              p: 1,
              gap: 1,
            }}
          >
            <PhoneIcon fontSize="small" />
            Contacts
          </Typography>

          {!isLoggedIn && (
            <Box>
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  label="Register"
                  LinkComponent={NavLink}
                  to="/register"
                  value="/register"
                  icon={<AppRegistrationIcon />}
                  iconPosition="end"
                />
                <Tab
                  label="Log In"
                  value="/login"
                  LinkComponent={NavLink}
                  to="/login"
                  icon={<LoginIcon />}
                  iconPosition="end"
                />
              </Tabs>
            </Box>
          )}
          {isLoggedIn && <UserMenu />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
