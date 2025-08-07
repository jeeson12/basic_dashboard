import  { useState } from "react";
import { Menu, X, Sheet, IdCardLanyard, FolderGit2, Home } from "lucide-react";

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [ishamburgerbtn, sethamburger] = useState<boolean>(false);
  const Hamburger = (): void => {
    sethamburger((prev) => !prev);
    console.log("button clicked");
  };

  return (
    <div className="bg-black min-h-screen flex  ">
      <div
        className={`bg-white ${
          ishamburgerbtn ? "w-1/5" : "w-1/20"
        }  min-h-screen flex-col items-center justify-items-center`}
      >
        <div className="flex items-center gap-1 p-4 ">
          <button onClick={Hamburger}>
            {ishamburgerbtn ? <X /> : <Menu />}
          </button>
          {ishamburgerbtn && <h1 className="text-lg font-bold">DASHBOARD</h1>}
        </div>
        <br />
        <div className="text-base font-medium pt-7 ">
          <ul>
            <li
              className="p-3 hover:bg-gray-300 cursor-pointer flex justify-items-center items-center"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <Home />
              {ishamburgerbtn && <p>Home</p>}
            </li>
            <li
              className="p-3  hover:bg-gray-300 cursor-pointer flex justify-items-center items-center"
              onClick={() => {
                navigate("/dashboard/dashdata");
              }}
            >
              <Sheet />
              {ishamburgerbtn && <p>dashdata</p>}
            </li>
            <li
              className="p-3 hover:bg-gray-300 cursor-pointer flex justify-items-center items-center"
              onClick={() => {
                navigate("/dashboard/employees");
              }}
            >
              <IdCardLanyard />
              {ishamburgerbtn && <p>Employees</p>}
            </li>
            <li
              className="p-3  hover:bg-gray-300 cursor-pointer flex justify-items-center items-center"
              onClick={() => {
                navigate("/dashboard/projects");
              }}
            >
              <FolderGit2 />
              {ishamburgerbtn && <p>projects</p>}
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`bg-gray-100 ${
          ishamburgerbtn ? "w-4/5" : "w-19/20"
        }  min-h-screen `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
{
  /*  */
}
