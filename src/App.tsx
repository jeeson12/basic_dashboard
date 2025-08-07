
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Dashdata from "./pages/dashpages/dashdata.tsx";
import Projects from "./pages/dashpages/projects.tsx";
import Employees from "./pages/dashpages/employees.tsx";
import Home from "./pages/dashpages/Home.tsx";
import { LoginProvider } from "./services/loginservices.tsx";
import { AuthProvider } from "./services/protectedroute.tsx";

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
