
import { loginSetup } from "./loginservices";
import  type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const login = loginSetup();

  if (!login || !login.credentials || !login.credentials.isloggedin) {
    return <Navigate to="/login" />;
  }
  return children ;
};


