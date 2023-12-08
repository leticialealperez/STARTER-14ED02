import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aluno from "../pages/Aluno";
import { BoasVindas } from '../pages/BoasVindas';
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/aluno",
    element: <Aluno />,
  },
  {
    path: "/welcome",
    element: <BoasVindas />,
  },
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
