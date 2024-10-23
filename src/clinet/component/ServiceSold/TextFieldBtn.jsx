import React from "react";
import { Radio, FormControlLabel, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CustomRadioButton = styled(Box)(({ theme }) => ({
  border: "1px solid #113A6E",
  borderRadius: "8px",
  padding: "0.5rem 1rem",
  width: "10rem",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
}));

const TextFieldBtn = ({ label, checked, onChange }) => {
  return (
    <CustomRadioButton sx={{ width: "11.5rem" }}>
      <FormControlLabel
        label={
          <Typography
            sx={{ fontWeight: "bold", color: "#000", fontSize: "1.1rem" }}
          >
            {label}
          </Typography>
        }
        control={
          <Radio
            checked={checked}
            onChange={onChange}
            value={label}
            name="radio-button-demo"
            inputProps={{ "aria-label": label }}
            sx={{
              color: "#000",
              "& .MuiSvgIcon-root": {
                fontSize: 24, // Change the size of the radio button
              },
            }}
          />
        }
      />
    </CustomRadioButton>
  );
};

export default TextFieldBtn;
