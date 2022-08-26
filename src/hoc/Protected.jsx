import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Protected;
