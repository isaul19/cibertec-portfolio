import { RouterProvider } from "react-router-dom";

import { router } from "./routes/AppRoute";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/index.css";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer theme="colored" />
    </>
  );
};
