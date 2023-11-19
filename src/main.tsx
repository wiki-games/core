import React from "react";
import ErrorPage from "./error-page.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Page, { loader as pageLoader } from "./routes/page.tsx";
import SubmitPageForm from "./components/SubmitPageForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: ":gameName/:pageName",
            element: <Page />,
            loader: pageLoader,
          },
        ],
      },
    ],
  },
  { path: "/new", element: <SubmitPageForm /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
