import { createContext, useContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";
import { loginData } from "../data/loginData";
import { useNavigate } from "react-router-dom";

export type credential = {
  userName: string;
  passWord: string | number;
  isloggedin: boolean;
};

const loginfunction = createContext<
  | {
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      handleSubmit: () => void;
      credentials: credential;
    }
  | undefined
>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<credential>({
    userName: "",
    passWord: "",
    isloggedin: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("entered");
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (): void => {
    console.log(loginData.username);
    console.log(credentials.userName);
    console.log(loginData.password);
    console.log(credentials.passWord);
    if (
      loginData.username === credentials.userName &&
      loginData.password === credentials.passWord
    ) {
      setCredentials((prev) => ({ ...prev, isloggedin: true }));
      console.log("login successfull");

      navigate("/dashboard");
    }
  };

  return (
    <loginfunction.Provider value={{ handleChange, handleSubmit, credentials }}>
      {children}
    </loginfunction.Provider>
  );
};

export const loginSetup = () => useContext(loginfunction);
