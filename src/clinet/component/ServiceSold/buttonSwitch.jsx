import { FormControlLabel, Switch } from "@mui/material";
import React from "react";

const ButtonSwitch = ({ label, onChange, value }) => {
  const handleChange = (event) => {
    const newValue = event.target.checked; // Get the checked state of the switch
    onChange(newValue); // Call the provided onChange function with the new value
  };
  console.log("main button comp", value);
  return (
    <div className="flex justify-between">
      <label className={`font-bold w-[20rem] pr-4 text-sm`}>{label}</label>
      <div className="flex justify-center">
        <h1 className="pt-2 mr-10 font-semibold text-l">No</h1>
        <FormControlLabel
          control={
            <Switch
              // size={10}
              // sx={{height: '2rem'}}
              checked={value} // Current state for the switch
              onChange={handleChange} // Correctly calls handleChange
              inputProps={{ "aria-label": `Toggle ${label}` }} // Improved accessibility
            />
          }
          // label={value ? "Yes" : "No"} // Display Yes or No
          labelPlacement="end"
        />{" "}
        <h1 className="pt-2 font-semibold text-l">Yes</h1>
      </div>
    </div>
  );
};

export default ButtonSwitch;
