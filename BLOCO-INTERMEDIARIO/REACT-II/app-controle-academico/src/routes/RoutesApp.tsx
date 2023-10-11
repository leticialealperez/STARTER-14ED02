import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Login from '../pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/cadastro',
		element: <Cadastro />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

function RoutesApp() {
	return <RouterProvider router={router} />;
}

export default RoutesApp;
