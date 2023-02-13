import { Button } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../../components/header/Header.component';

export const ProtectedRoute = () => {
  const isLogged = localStorage.getItem('LOGGED_USER');

  if (!isLogged) {
    return <Navigate to={'/login'} replace />;
  }

  const logout = () => {
    localStorage.removeItem('LOGGED_USER');
    document.location = '/login';
  };

  return (
    <>
      <Header>
        <Button color="secondary" onClick={logout}>
          Logout
        </Button>
      </Header>
      <Outlet />
    </>
  );
};
