import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import All from "../components/allapps.jsx";
import Error from "../components/error.jsx";
import Installed from "../components/installed.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Appinfo from "../components/appinfo.jsx";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/all", element: <All /> },
  { path: "/app/:id", element: <Appinfo /> },
  { path: "/installed", element: <Installed /> },
  { path: "*", element: <Error /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
