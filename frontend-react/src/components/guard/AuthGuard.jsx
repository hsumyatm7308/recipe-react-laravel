import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthGuard = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/sign-in"} />;
  }
};

export default AuthGuard;
