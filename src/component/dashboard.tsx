import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { Hamburgerdata } from "../data/sidebardata";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/logincontext";


const Dashboard = () => {
  const {logout}=useLogin()
  const navigate = useNavigate();
  const [ishamburgerbtn, sethamburger] = useState<boolean>(false);
  const Hamburger = (): void => {
    sethamburger((prev) => !prev);
    console.log("button clicked");
  };

  const sidebaestyle =
    "p-3 hover:bg-gray-300 cursor-pointer flex justify-items-center items-center rounded-xl";
  return (
    <div className="bg-black min-h-screen flex  ">
      <div
        className={`bg-white  ${
          ishamburgerbtn ? "w-1/7 p-5 " : "w-1/20"
        }  min-h-screen flex flex-col justify-between items-center `}
      >
        <div className="flex items-center gap-1 p-4 ">
          <button onClick={Hamburger}>
            {ishamburgerbtn ? <X /> : <Menu />}
          </button>
          {ishamburgerbtn && <h1 className="text-lg font-bold">DASHBOARD</h1>}
        </div>
        
        <div className="text-base font-medium pb-40 ">
          <ul>
            {Hamburgerdata.map((data, index) => (
              <div key={index}>
                <li
                  className={sidebaestyle}
                  onClick={() => {
                    navigate(data.path);
                  }}
                >
                  {data.icon}
                  {ishamburgerbtn && <p>{data.label}</p>}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex pb-2 ">
          <button className={sidebaestyle}
          onClick={logout}>
            <LogOut />
            {ishamburgerbtn && <p>logout</p>}
          </button>
        </div>
      </div>
      <div
        className={`bg-gray-50 ${
          ishamburgerbtn ? "w-6/7 pr-5" : "w-19/20"
        }  min-h-screen `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
