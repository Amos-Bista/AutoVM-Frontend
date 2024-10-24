import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ServiceSoldPage from "./clinet/pages/serviceSoldPage";
import plan from "../src/common/components/plan";
import { ModalRoot } from "./common/modalProvider/modalRoot";
import { Box } from "@mui/material";
import NavBar from "./common/components/navbar";
import admin from "../src/portal/component/portalSection.jsx/page";
import LoginForm from "./pages/adminlogin";
import Home from "./common/pages/home";
import UserLandingSection from "./userportal/pages/userlandingsection/userlandingsection";
import UserLoginForm from "./pages/userlogin";

// Define components directly in the App.jsx for simplicity

// Define your routes in a JSON-like structure
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/shop/:id",
    component: ServiceSoldPage,
  },
  {
    path: "/admin/*",
    component: admin,
  },
  {
    path: "/user/*",
    component: UserLandingSection,
  },
  {
    path: "/adminlogin",
    component: LoginForm,
  },
  {
    path: "/userlogin",
    component: UserLoginForm,
  },
];

const App = () => {
  const location = useLocation();
  return (
    <Box>
      {/* <NavBar /> */}
      {/* <Router> */}
      {!(
        location.pathname === "/admin" ||
        location.pathname === "/user" ||
        location.pathname.startsWith("/admin/") ||
        location.pathname.startsWith("/user/")
      ) && <NavBar />}

      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      {/* </Router> */}
    </Box>
  );
};

export default App;
