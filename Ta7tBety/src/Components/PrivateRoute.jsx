import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../Hooks/useUser";

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/Signin" replace />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
