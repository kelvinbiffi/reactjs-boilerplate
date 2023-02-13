import { Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const isLogged = localStorage.getItem('LOGGED_USER');

  if (isLogged) {
    return <Navigate to={'/'} replace />;
  }

  const login = () => {
    localStorage.setItem('LOGGED_USER', 'true');
    document.location = '/';
  };

  return (
    <Grid2
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      minHeight={160}
    >
      <Button variant="contained" onClick={login}>
        Log In
      </Button>
    </Grid2>
  );
};
