import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <h1>Error 404 - Not Found</h1>,
	},
]);

function AppRoutes() {
	return <RouterProvider router={routes} />;
}

export default AppRoutes;
