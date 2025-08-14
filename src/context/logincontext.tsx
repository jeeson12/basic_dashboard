import { createContext, useContext, type ReactElement } from "react";

import type { credential } from "../services/loginservices";

export const loginfunction = createContext<
  | {
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      handleSubmit: () => void;
      credentials: credential;
      loader: () => ReactElement | null;
      logout: () => void;
    }
  | undefined
>(undefined);

export function useLogin() {
  const context = useContext(loginfunction);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
}
