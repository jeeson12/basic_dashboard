import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./services/loginservices.tsx";
import { AuthProvider } from "./layouts/protectedroute.tsx";
import { lazy, Suspense } from "react";
const Login = lazy(() => import("./pages/login/index.tsx"));
const Dashboard = lazy(() => import("./component/dashboard.tsx"));
const Dashdata = lazy(() => import("./pages/dashboard/index.tsx"));
const Projects = lazy(() => import("./pages/projects/index.tsx"));
const Employees = lazy(() => import("./pages/employees/index.tsx"));
const Home = lazy(() => import("./pages/home/index.tsx"));
const HotelData = lazy(() => import("./pages/hotel.tsx/index.tsx"));
const NotFound = lazy(() => import("./pages/notfound/index.tsx"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
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
                <Route path="dashdata" element={<Dashdata/>}/>
                <Route path="employees" element={<Employees />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="hotel-data" element={<HotelData />}/>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </LoginProvider>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
