import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contato from '../../pages/Contato';
import Home from '../../pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/contato',
		element: <Contato />,
	},
]);

function RoutesApp() {
	return <RouterProvider router={router} />;
}

export default RoutesApp;
