import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function PublicRoute({ element, ...rest }) {
  const { currentUser } = useAuth();
  return !currentUser ? (
    <Navigate to="/" />
  ) : (
    <Route {...rest} element={element} />
  );
}
