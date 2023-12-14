import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, NotFound, Pokedex, Pokemon } from '../pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/detalhe/:id',
		element: <Pokemon />,
	},
	{
		path: '/pokedex',
		element: <Pokedex />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

function AppRoutes() {
	return <RouterProvider router={router} />;
}

export default AppRoutes;
