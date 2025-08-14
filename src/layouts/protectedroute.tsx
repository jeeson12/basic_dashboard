
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const token =localStorage.getItem("authtoken")
  if(token==null){
    return <Navigate to="/login" />
  }
  
 
  return children;
};
