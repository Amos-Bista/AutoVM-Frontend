import { Box, Stack, Typography, Collapse } from "@mui/material";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdDesignServices, MdSettings } from "react-icons/md";
import { TbFileReport } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const sidebarData = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <AiFillHome size={20} />,
  },
  {
    title: "Services",
    path: "/admin/service",
    icon: <MdDesignServices size={19} />,
    subItems: [
      {
        title: "Unit",
        path: "/admin/service",
      },
      {
        title: "Bundle",
        path: "/admin/service",
      },
      {
        title: "Schemes",
        path: "/admin/service",
      },
    ],
  },
  {
    title: "Users",
    path: "/admin/user",
    icon: <FaUser size={19} />,
    subItems: [
      {
        title: "Customers",
        path: "/admin/user",
      },
      {
        title: "Staff",
        path: "/admin/user",
      },
    ],
  },
  {
    title: "Reports",
    path: "/admin/report",
    icon: <TbFileReport size={20} />,
  },
  {
    title: "Settings",
    path: "/admin/setting",
    icon: <MdSettings size={20} />,
    subItems: [
      {
        title: "Account Settings",
        path: "/admin/setting",
      },
      {
        title: "Privacy Settings",
        path: "/admin/setting",
      },
    ],
  },
];

const Portalsidebar = () => {
  const [openIndex, setOpenIndex] = useState(-1); // Start with no submenus open
  const navigate = useNavigate();
  const handleToggle = (index, hasSubItems) => {
    if (hasSubItems) {
      // Toggle submenu only if there are subItems
      setOpenIndex(openIndex === index ? -1 : index);
    } else {
      // Navigate to the path if no subItems
      navigate(sidebarData[index].path);
    }
  };

  return (
    <Box
      sx={{
        width: "16rem",
        backgroundColor: "#14191F",
        paddingY: "2.6rem",
        color: "#B4B9BF",
      }}
    >
      <Stack spacing={6}>
        <Box
          sx={{
            display: "flex",
            marginX: "auto",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a href="/">
            <img
              src="/dataspacelogo1.png"
              alt="Dataspace Logo"
              className="h-11"
            />
          </a>
        </Box>

        <Box>
          {sidebarData.map((item, index) => (
            <Box key={index}>
              <Box
                component="a"
                href={item.path}
                sx={{
                  marginX: "2.5rem",
                  paddingY: "0.6rem",
                  paddingLeft: "0.9rem",
                  width: "10.5rem",
                  borderRadius: "0.6rem",
                  display: "flex",
                  gap: "0.6rem",
                  color: "#B4B9BF",
                  alignItems: "center",
                  transition: "background-color 0.3s, color 0.3s",
                  "&:hover": {
                    backgroundColor: "#182637",
                    color: "skyblue",
                    transform: "scale(1.06)",
                  },
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(index, !!item.subItems, item.path);
                }}
              >
                <Box
                  sx={{
                    padding: "0",
                    width: "22px",
                    height: "22px",
                    transition: "transform 0.3s",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography sx={{ fontSize: "14px", paddingTop: "1px" }}>
                  {item.title}
                </Typography>
              </Box>

              {item.subItems && (
                <Collapse in={openIndex === index} unmountOnExit>
                  <Box sx={{ paddingLeft: "3rem" }}>
                    {item.subItems.map((subItem, subIndex) => (
                      <Box
                        key={subIndex}
                        component="a"
                        href={subItem.path}
                        sx={{
                          display: "block",
                          marginBottom: "0.4rem",
                          color: "#B4B9BF",
                          transition: "color 0.3s",
                          "&:hover": {
                            color: "skyblue",
                            // transform: "scale(1.06)",
                          },
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(subItem.path);
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "13px",
                            marginLeft: "2.4rem",
                          }}
                        >
                          {subItem.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Portalsidebar;
