import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Login from "./pages/auth/Login";
import AuthLayout from "./pages/auth/AuthLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedLayouts from "./components/layout/ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "forget-password", Component: ForgetPassword },
      { path: "reset-password", Component: ResetPassword },
    ],
  },
  {
    Component: ProtectedLayouts,
    children: [
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [{ index: true, Component: Dashboard }],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
