import { Box } from "@mui/material";
import React from "react";

const UserPortalDashboard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        width: "100%",
      }}
    >
      <Box
        sx={{ paddingX: "3rem", paddingY: "2rem", flexGrow: 1, color: "white" }}
      >
        <h1>Client Dashboard</h1>
      </Box>
    </Box>
  );
};

export default UserPortalDashboard;
