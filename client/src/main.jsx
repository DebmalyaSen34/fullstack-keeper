import React from "react";
import Home from "./components/Home";
import { createRoot } from "react-dom/client";
import NewBlog from "./newBlog/NewBlog";
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
    path: "/New",
    element: <NewBlog />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
