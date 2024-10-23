import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import ButtonSwitch from "./buttonSwitch";

const ServiceDropdown = ({
  label,
  options,
  value,
  onChange,
  labelClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/close state

  // Handle when an option is selected
  const handleSelectChange = (event) => {
    onChange(event); // Call the parent's onChange function
    setIsOpen(false); // Close the dropdown after selection
  };

  // Toggle dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle between open and closed
  };

  return (
    <div className="relative flex items-center w-full mb-4">
      {/* Apply custom class to label */}
      <label className={`font-bold w-[20rem] pr-4 ${labelClassName}`}>
        {label}
      </label>
      <div className="relative w-full">
        <select
          className="p-3 border border-[#113A6E] rounded-md w-full outline-none focus:border-[#113A6E] active:border-[#113A6E] appearance-none pr-10"
          value={value}
          onChange={handleSelectChange}
          onClick={toggleDropdown} // Open/close dropdown on click
        >
          <option value="" disabled></option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>{" "}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-xl text-[#113A6E] transition-transform duration-300 ease-in-out">
          {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}{" "}
          {/* Always ensure the correct icon */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDropdown;
