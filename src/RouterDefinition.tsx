import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { LoginPage } from './modules/auth/Login.page';
import { ProtectedRoute } from './modules/auth/ProtectedRoute';
import { RegisterPage } from './modules/auth/Register.page';
import { HomePage } from './modules/home/Home.page';
import { UserPage } from './modules/user/User.page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<HomePage />} />
        <Route path="user">
          <Route index element={<UserPage />} />
        </Route>
      </Route>
    </>,
  ),
);
