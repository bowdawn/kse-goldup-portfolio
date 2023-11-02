import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  element: React.ReactNode;
  redirect: string;
  condition: boolean | null;
};

const RedirectRoute: React.FC<PrivateRouteProps> = ({
  element,
  condition,
  redirect,
}) => {
  return condition ? <>{element}</> : <Navigate to={redirect} replace />;
};

export default RedirectRoute;
