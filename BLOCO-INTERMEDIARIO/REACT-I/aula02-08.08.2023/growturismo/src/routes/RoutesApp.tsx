import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Planos from '../pages/Planos';
import QuemSomos from '../pages/QuemSomos';
import Servicos from '../pages/Servicos';
import DefaultLayout from '../config/layout/DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    )
  },
  {
    path: '/planos',
    element: (
      <DefaultLayout>
        <Planos />
      </DefaultLayout>
    )
  },
  {
    path: '/quem-somos',
    element: (
      <DefaultLayout>
        <QuemSomos />
      </DefaultLayout>
    )
  },
  {
    path: '/servicos',
    element: (
      <DefaultLayout>
        <Servicos />
      </DefaultLayout>
    )
  }
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
