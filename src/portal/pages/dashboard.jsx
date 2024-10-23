import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Portalsidebar from "../component/portalsidebar";
import Portalhead from "../component/portalhead";
import Portalcard from "../component/portalcard";
import PortalTable from "../component/portalTable";

const PortalDashboard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        width: "100%",
      }}
    >
      <Box sx={{ paddingX: "3rem", paddingY: "2rem", flexGrow: 1 }}>
        <Portalhead />
        <Portalcard />
        <PortalTable />
      </Box>
    </Box>
  );
};

export default PortalDashboard;
