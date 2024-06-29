import React, { StrictMode } from "react";
import Home from "./components/Home";
import GetBlogs from "./getBlogs/getBlogs";
import { createRoot } from "react-dom/client";
import NewBlog from "./newBlog/NewBlog";
import Login from "./Login/Login";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Yours",
    element: <GetBlogs />,
  },
  {
    path: "/New",
    element: <NewBlog />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);