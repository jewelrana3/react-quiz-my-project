import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function PrivateRoute({ element, ...rest }) {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
}
