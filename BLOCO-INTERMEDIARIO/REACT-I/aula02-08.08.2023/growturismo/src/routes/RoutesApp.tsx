import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Planos from '../pages/Planos';
import QuemSomos from '../pages/QuemSomos';
import Servicos from '../pages/Servicos';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/planos',
		element: <Planos />,
	},
	{
		path: '/quem-somos',
		element: <QuemSomos />,
	},
	{
		path: '/servicos',
		element: <Servicos />,
	},
]);

function RoutesApp() {
	return <RouterProvider router={router} />;
}

export default RoutesApp;
