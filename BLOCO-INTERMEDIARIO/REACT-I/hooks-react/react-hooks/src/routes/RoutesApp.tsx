import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

const RoutesApp: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default RoutesApp;
