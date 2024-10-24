import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPortalsidebar from "../../components/userportalsidebar";
import PortalDashboard from "../../../portal/pages/dashboard";
import Unit from "../../../portal/pages/unit";
import Bundle from "../../../portal/pages/bundle";
import Schemes from "../../../portal/pages/schemes";
import Customer from "../../../portal/pages/customer";
import Staff from "../../../portal/pages/staff";
import Userportal from "../../../portal/pages/userportal";
import Reportportal from "../../../portal/pages/reportportal";
import Settingportal from "../../../portal/pages/settingportal";
import UserPortalDashboard from "../userDashboard";
import UserServiceList from "../userServiceList";
import UserServiceMonitoring from "../userServiceMonitoring";
import UserServiceListToSell from "../userServiceListToSell";
import UserTransactions from "../userTransactions";
import UserAccountSetting from "../userAccountSetting";
import UserPrivacySetting from "../userPrivacySetting";

const UserLandingSection = () => {
  console.log("Rendering PortalSection"); // Add this line

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        width: "100%",
        color: "white",
      }}
    >
      <UserPortalsidebar />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/*" element={<UserPortalDashboard />} />
          <Route path="/userservicelist" element={<UserServiceList />} />
          <Route
            path="/userservicemonitoring"
            element={<UserServiceMonitoring />}
          />
          <Route
            path="/userservicelisttosell"
            element={<UserServiceListToSell />}
          />
          <Route path="/usertransactions" element={<UserTransactions />} />
          <Route path="/useraccountsetting" element={<UserAccountSetting />} />
          <Route path="/userprivacysetting" element={<UserPrivacySetting />} />
          <Route path="/report" element={<Reportportal />} />
          <Route path="/setting" element={<Settingportal />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default UserLandingSection;
