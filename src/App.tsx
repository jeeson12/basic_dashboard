import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/index.tsx";
import Dashboard from "./component/Dashboard.tsx";
import Dashdata from "./pages/dashboard/index.tsx";
import Projects from "./pages/projects/index.tsx";
import Employees from "./pages/employees/index.tsx";
import Home from "./pages/home/index.tsx";
import { LoginProvider } from "./services/loginservices.tsx";
import { AuthProvider } from "./layouts/protectedroute.tsx";
import HotelData from "./pages/hotel.tsx/index.tsx";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <LoginProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="dashboard"
                element={
                  <AuthProvider>
                    <Dashboard />
                  </AuthProvider>
                }
              >
                <Route index element={<Home />} />
                <Route path="dashdata" element={<Dashdata />}></Route>
                <Route path="employees" element={<Employees />}></Route>
                <Route path="projects" element={<Projects />}></Route>
                <Route path="HotelData" element={<HotelData />}></Route>
              </Route>
            </Routes>
          </LoginProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
