import React from "react";
import { Button } from "@mui/material";

export const BackButton = ({ onBack, disabled }) => {
  return (
    <Button
      variant="contained"
      onClick={onBack}
      disabled={disabled} // Disable back button when at the first step
      sx={{
        marginRight: "1rem",
        backgroundColor: "#F9D753",
        color: "#fff",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#F9D753",
        },
      }}
    >
      Back
    </Button>
  );
};

export const ConfirmButton = ({ onConfirm, isLastStep, disabled }) => {
  return (
    <Button
      variant="contained"
      onClick={onConfirm}
      disabled={disabled}
      sx={{
        backgroundColor: disabled ? "#b0b0b0" : "#113A6E",
        color: "#fff",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#113A6E",
        },
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {isLastStep ? "Finish" : "Confirm"} {/* Changes text for the last step */}
    </Button>
  );
};

export const HomeButton = ({ onClick, isLastStep, disabled }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{
        backgroundColor: disabled ? "#b0b0b0" : "#113A6E",
        color: "#fff",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#113A6E",
        },
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {/* {isLastStep ? "Finish" : "Confirm"} Changes text for the last step */}
      Home
    </Button>
  );
};
