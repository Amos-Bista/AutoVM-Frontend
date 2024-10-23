import { Box } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Portalsidebar from "../portalsidebar";
import PortalDashboard from "../../pages/dashboard";
import Serviceportal from "../../pages/serviceportal";
import Userportal from "../../pages/userportal";
import Reportportal from "../../pages/reportportal";
import Settingportal from "../../pages/settingportal";
const PortalSection = () => {
  console.log("Rendering PortalSection"); // Add this line

  return (
    <Box
      sx={{
        height: "100vh",
        // backgroundColor: "black",
        display: "flex",
        width: "100%",
      }}
    >
      <Portalsidebar />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/*" element={<PortalDashboard />} />
          <Route path="/service" element={<Serviceportal />} />
          <Route path="/user" element={<Userportal />} />
          <Route path="/report" element={<Reportportal />} />
          <Route path="/setting" element={<Settingportal />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default PortalSection;
