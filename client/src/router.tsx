import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATHS } from './data/enums';
import { Container } from './view/components';
import { Home, Sign_In, Sign_Up, Users } from './view/pages';

export const router = createBrowserRouter([
  { path: ROUTER_PATHS.HOME, element: <Container children={<Home />} /> },
  { path: ROUTER_PATHS.USERS, element: <Container children={<Users />} /> },
  { path: ROUTER_PATHS.SIGN_IN, element: <Container children={<Sign_In />} /> },
  { path: ROUTER_PATHS.SIGN_UP, element: <Container children={<Sign_Up />} /> },
]);
