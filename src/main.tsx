import React from 'react'
import ErrorPage from "./error-page.tsx";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Page, { loader as pageLoader} from './routes/page.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {errorElement: <ErrorPage/>,
         children: [
          {
            path: ":gameName/:pageName",
            element: <Page />,
            loader: pageLoader,
          }
         ]}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



/*
import React from "react";
import ReactDOM from "react-dom/client";
import EditContact, { action as editAction } from "./routes/edit";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { errorElement: <ErrorPage/>,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: (
              <div>
                not very schwifty
                :(
              </div>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

*/