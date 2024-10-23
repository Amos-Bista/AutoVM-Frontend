import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceSoldPage from "./clinet/pages/serviceSoldPage";
import plan from "../src/common/components/plan";
import { ModalRoot } from "./common/modalProvider/modalRoot";
import { Box } from "@mui/material";
import NavBar from "./common/components/navbar";

// Define components directly in the App.jsx for simplicity
const Home = () => <h1>Welcome to the Home Page</h1>;

// Define your routes in a JSON-like structure
const routes = [
  {
    path: "/",
    component: plan,
  },
  {
    path: "/shop/:id",
    component: ServiceSoldPage,
  },
];

const App = () => {
  return (
    <Box>
      <NavBar />
      {/* <Router> */}
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
