import { AppBar, Toolbar, Box, Link } from '@mui/material';
import { PropsWithChildren, ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from './routes.const';

export const Header = ({ children }: PropsWithChildren): ReactElement => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Box sx={{ flexGrow: 1, gap: 5, display: { xs: 'none', md: 'flex' } }}>
        {routes.map((page) => (
          <Link
            component={RouterLink}
            key={page.path}
            to={page.path}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.name}
          </Link>
        ))}
        {children}
      </Box>
    </Toolbar>
  </AppBar>
);
