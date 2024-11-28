import { createBrowserRouter } from 'react-router-dom';
import { MAIN_ROUTES, JOIN_ROUTES } from './routes';
import Layout from '../Layout';
import AgreementPage from '../../pages/AgreementPage';
const routesConfig = [
  {
    path: MAIN_ROUTES.main,
    element: <></>,
    requiresAuth: false,
  },
  {
    path: JOIN_ROUTES.agreement, // 회원가입 경로 추가
    element: <AgreementPage />,
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
