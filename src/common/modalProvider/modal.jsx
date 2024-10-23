// src/modules/common/CustomModal.jsx
import React from "react";
import { Modal, Box } from "@mui/material";

const CustomModal = ({ showModal, customComponent, overflowY, hideModal }) => {
  return (
    <Modal
      open={showModal}
      onClose={hideModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          overflowY: overflowY || "auto",
          //   maxHeight: "auto",
          display: "flex",
          justifyContent: "center",
          width: "auto",
          height: "auto",
          bgcolor: "background.paper",
          borderRadius: "4px",
          boxShadow: 24,
          p: "2rem",
          position: "relative", // Ensure positioning is customizable if needed
          backdropFilter: "blur(20rem)", // Apply the blur effect
        }}
      >
        {customComponent}
      </Box>
    </Modal>
  );
};

export default CustomModal;
