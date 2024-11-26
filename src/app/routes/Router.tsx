import { createBrowserRouter } from 'react-router-dom';
import { MAIN_ROUTES } from './routes';
import Layout from '../Layout';
const routesConfig = [
  {
    path: MAIN_ROUTES.main,
    element: <></>,
    requiresAuth: false,
  },
];

const router = createBrowserRouter(
  routesConfig.map(route => ({
    path: route.path,
    element: route.requiresAuth ? <Layout>{route.element}</Layout> : <Layout>{route.element}</Layout>,
  }))
);

export default router;
