import React from "react";
import { useRoutes } from "react-router";
import Layout from "../Layout/Layout";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import UserLayout from "../Layout/userLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Setting from "../components/Setting";
const Route = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <PublicRoute>
              {" "}
              <Login />{" "}
            </PublicRoute>
          ),
        },

        {
          path: "/register",
          element: (
            <PublicRoute>
              {" "}
              <Register />
            </PublicRoute>
          ),
        },
      ],
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <UserLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
      ],
    },
  ]);
};

export default Route;
