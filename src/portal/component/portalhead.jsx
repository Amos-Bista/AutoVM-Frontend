import { Box, Typography } from "@mui/material";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Portalhead = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "30rem", md: "67rem" }, // Responsive width
        // padding: { xs: "1rem", sm: "2rem" }, // Add padding for smaller screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" }, // Stack items vertically on smaller screens
        }}
      >
        <Box sx={{ paddingX: { xs: "1rem", sm: "2rem" } }}>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.56rem" }, // Responsive font size
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              color: "white",
            }}
          >
            Manage your projects
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size for subtitle
              color: "#B4B9BF",
              marginTop: "0.5rem",
            }}
          >
            Track your project, tasks & team activity
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "10rem",
            gap: "1rem",
            marginTop: "1rem",
            // padding: { xs: "1rem", md: "0" },
            justifyContent: { xs: "center", md: "flex-end" }, // Center content on small screens
            alignItems: "center",
            height: "3rem",
          }}
        >
          <Box
            sx={{
              // padding: "8px",
              backgroundColor: "#14191F",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "2rem",
              height: "2rem",
              border: "1px solid #182637",
              borderRadius: "2px",
            }}
          >
            <FiSearch size={15} />
          </Box>
          <Box
            sx={{
              // padding: "8px",
              backgroundColor: "#14191F",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: "2rem",
              height: "2rem",
              border: "1px solid #182637",
              borderRadius: "2px",
            }}
          >
            <FaCalendarAlt size={15} />
          </Box>
          <Box
            component="img"
            src="/userimg.jpg"
            alt="User Image"
            sx={{
              // width: { xs: "100%", sm: "50%", md: "25%" }, // Adjust the width based on screen size
              height: "3.5rem", // Maintain aspect ratio
              width: "3.5rem",
              borderRadius: "8rem", // Optional: Add rounded corners
              objectFit: "cover", // Ensure the image fills its container while preserving aspect ratio
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Portalhead;
