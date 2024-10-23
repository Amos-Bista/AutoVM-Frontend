import React from "react";
import {
  Radio,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const OperatingSystemCard = ({
  os,
  logo,
  price,
  options,
  selected,
  onChange,
  onVersionChange,
}) => {
  return (
    <div className="border border-[#113A6E] rounded-lg p-[1rem] w-[22.5rem]  ">
      <div className="flex gap-[1rem]">
        <Radio
          checked={selected}
          onChange={onChange}
          sx={{
            height: "1rem",
            color: "#000",
            "& .MuiSvgIcon-root": {
              fontSize: 32, // Change the size of the radio button
            },
          }}
        />
        <div className="flex-col justify-center ">
          <div className="flex justify-center gap-[1rem]  mb-[1rem]">
            <img
              src={logo}
              alt={`${os} logo`}
              className="h-[6.8rem] pb-2 flex justify-center"
            />
            <h2 className="text-xl font-semibold text-center pt-[2.8rem]">
              {os}
            </h2>
          </div>

          <div className="mt-4 text-lg font-semibold text-center">
            {/* {price ? `$ ${price}` : "Included"} */}
          </div>
        </div>
      </div>
      <FormControl
        fullWidth
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#113A6E",
            borderWidth: "2px",
          },
        }}
      >
        {/* <InputLabel id={`${os}-version-label`}>{os} Version</InputLabel> */}
        <Select
          sx={{
            width: "20rem",
            marginX: "auto",
            display: "flex",
            justifyContent: "center",
          }}
          labelId={`${os}-version-label`}
          id={`${os}-version`}
          defaultValue={null} // Set the default value here
          onChange={(event) => onVersionChange(event.target.value)} // Pass selected version back to parent
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default OperatingSystemCard;
