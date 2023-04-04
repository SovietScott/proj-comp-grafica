import React from 'react';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Espaco from './pages/Espaco';
import Equipe from './pages/Equipe';
import Atuacao from './pages/Atuacao';
import Contato from './pages/Contato';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/equipe",
    element: <Equipe/>
  },
  {
    path: "/atuacao",
    element: <Atuacao/>
  },
  {
    path: "/espaco",
    element: <Espaco/>
  },
  {
    path: "/contato",
    element: <Contato/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
