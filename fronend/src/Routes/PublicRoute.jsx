import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  console.log(isAuthenticated);

  return children;
};

export default PublicRoute;
