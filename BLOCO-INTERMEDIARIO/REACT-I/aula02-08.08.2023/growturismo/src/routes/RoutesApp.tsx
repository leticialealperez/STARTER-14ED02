import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaultLayout';
import Contato from '../pages/Contato';
import Home from '../pages/Home';
import Planos from '../pages/Planos';
import QuemSomos from '../pages/QuemSomos';
import Servicos from '../pages/Servicos';

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
  },
  {
    path: '/contato',
    element: (
      <DefaultLayout>
        <Contato />
      </DefaultLayout>
    )
  }
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
