import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { StyledEngineProvider } from '@mui/material/styles'
//import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Formation } from "./pages/Formation";
import { Skills } from "./pages/Skills";
import { Blog } from "./pages/Blog";
//import { Layout } from "./App";
import App from './App.jsx'
// Import our custom CSS
// import './scss/styles.scss'
//import * as bootstrap from 'bootstrap'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //element: <Layout />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/formation",
        element: <Formation />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
);
