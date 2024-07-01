import React, { StrictMode } from "react";
import Home from "./components/Home";
import GetBlogs from "./getBlogs/getBlogs";
import { createRoot } from "react-dom/client";
import NewBlog from "./newBlog/NewBlog";
import DetailsRestaurants from "./Restaurants/DetailsRestaurants";
import Login from "./Login/Login";
import Restaurants from "./Restaurants/Restaurants";
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
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/restaurants/:id",
    element: <DetailsRestaurants />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);