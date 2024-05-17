import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const NotAuthGuard = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return <Navigate to={"/"} />;
  } else {
    return <>{children}</>;
  }
};

export default NotAuthGuard;
