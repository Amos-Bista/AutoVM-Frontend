import React, { useState } from "react";
import ServiceDropdown from "./ServiceDropdown";
import { BackButton, ConfirmButton } from "./Button";
import regionOptions from "../../assests/dynamic/regionOptions.json"; // Import the JSON file
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRegion } from "../../reduxToolKit/service/slices";

const ServiceSoldRegion = ({ handleBack, handleNext }) => {
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.app?.selectedRegion);
  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value; // Get the selected label from the event
    dispatch(setSelectedRegion(selectedRegion)); // Dispatch the region value
  };

  return (
    <div className="px-[2rem] py-[2rem] border-double border-2 rounded-md border-[#113A6E]  p-6 bg-white w-[53rem] ">
      <div className="">
        <ServiceDropdown
          label="Select Region"
          options={regionOptions} // Use the imported JSON data
          value={selectedRegion}
          onChange={handleRegionChange}
          labelClassName="text-lg"
          className="py-[10rem]"
        />
      </div>
      <div className="flex justify-between mt-[1rem]">
        <BackButton onBack={handleBack} disabled={false} />
        <ConfirmButton
          onConfirm={handleNext}
          isLastStep={false}
          disabled={!selectedRegion}
        />
      </div>
    </div>
  );
};

export default ServiceSoldRegion;
