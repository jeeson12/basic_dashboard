import { useState } from "react";
import type { ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { loginfunction } from "../context/logincontext";
import instance from "./axiosInstance";

export type credential = {
  Email: string;
  passWord: string | number;
  isloggedin: boolean;
};

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<credential>({
    Email: "",
    passWord: "",
    isloggedin: false,
  });
  const [loading, SetLoading] = useState(false);
  // const [tokenvalue,SetTokenvalue]=useState(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("entered");
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const { Email, passWord } = credentials;

  const handleSubmit = async (): Promise<void> => {
    SetLoading(true);
    try {
      const res = await instance.post<{ token: string }>(
        "authentication/login",
        {
          email: Email,
          password: passWord,
        }
      );

      if (res.data.token) {
        setCredentials((prev) => ({ ...prev, isloggedin: true }));
        console.log("login successfull");
        localStorage.setItem("authtoken", res.data.token);
        // SetTokenvalue(res.data.token)

        navigate("/dashboard");
      }
    } catch (error) {
      console.log("login failed", error);
    } finally {
      SetLoading(false);
    }
  };

  // const invalid=()=>{
  //   if (tokenvalue)
  // }

  const loader = (): ReactElement | null => {
    if (loading) {
      return (
        <div className="flex gap-5 justify-center items-center min-h-screen">
          <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="animate-pulse text-2xl">loading</div>
        </div>
      );
    }
    return null;
  };

  const logout = (): void => {
    localStorage.removeItem("authtoken");
    navigate("/login");
  };

  return (
    <loginfunction.Provider
      value={{ handleChange, handleSubmit, credentials, loader, logout }}
    >
      {children}
    </loginfunction.Provider>
  );
};
