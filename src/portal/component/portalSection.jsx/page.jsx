import { Box } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Portalsidebar from "../portalsidebar";
import Serviceportal from "../../pages/unit";
import Userportal from "../../pages/userportal";
import PortalDashboard from "../../pages/dashboard";
import Reportportal from "../../pages/reportportal";
import Settingportal from "../../pages/settingportal";
import Unit from "../../pages/unit";
import Bundle from "../../pages/bundle";
import Schemes from "../../pages/schemes";
import Customer from "../../pages/customer";
import Staff from "../../pages/staff";
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
          <Route path="/unit" element={<Unit />} />
          <Route path="/bundle" element={<Bundle />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/user" element={<Userportal />} />
          <Route path="/report" element={<Reportportal />} />
          <Route path="/setting" element={<Settingportal />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default PortalSection;
