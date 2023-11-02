import React from "react";
import HomePage from "../pages/HomePage";
import { rootPath } from "./paths";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";

import NotFoundPage from "../pages/NotFoundPage";

const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: rootPath,
          element: <HomePage />,
        },

        // Add "Page Not Found" route
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
};

export const AppRoutes: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router()} />
    </div>
  );
};

export default AppRoutes;
