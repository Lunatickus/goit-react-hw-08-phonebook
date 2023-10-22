import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>

        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
