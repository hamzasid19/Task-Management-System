import React from "react";
import { Navigate, useRoutes } from "react-router";
import Layout from "../Layout/Layout";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import UserLayout from "../Layout/userLayout";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
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
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <UserLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);
};

export default Route;
