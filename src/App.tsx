import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./component/dashboard.tsx";
import Dashdata from "./pages/dashboard/dashboard.tsx";
import Projects from "./pages/projects/projects.tsx";
import Employees from "./pages/employees/employees.tsx";
import Home from "./pages/home/Home.tsx";
import { LoginProvider } from "./services/loginservices.tsx";
import { AuthProvider } from "./context/protectedroute.tsx";

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
              </Route>
            </Routes>
          </LoginProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
