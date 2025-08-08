import { createContext, useContext } from "react";
import type { credential } from "../services/loginservices";

export const loginfunction = createContext<
  | {
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      handleSubmit: () => void;
      credentials: credential;
    }
  | undefined
>(undefined);

export function useLogin() {
  return useContext(loginfunction);
}
