import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
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
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
