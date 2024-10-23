import React, { useEffect, useState } from "react";
import { BackButton, ConfirmButton } from "./Button";
import OperatingSystemCard from "./OperatingSystemCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedOS,
  setSelectedVersion,
  setSelectedVersionvalue,
  setUsername,
} from "../../../common/reduxToolKit/service/slices";

const operatingSystems = [
  {
    os: "Linux",
    logo: "https://pluspng.com/img-png/ubuntu-logo-png-ubuntu-icon-logo-png-transparent-amp-svg-vector-pluspng-2400x2390.png",
    price: null,
    options: ["Ubuntu 22.04", "CentOs 9", "Debian-12"],
  },
  {
    os: "Windows",
    logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2d83d34a-b844-4fda-8550-438365b03c70/d5cki5j-bc735099-7ef7-4389-8e7a-4e0151873a13.png",
    price: 9.0,
    options: ["Windows Server 2011", "Windows Server 2016"],
  },
];

export const templates = {
  "Ubuntu 22.04": "local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst",
  "Debian-12": "local:vztmpl/debian-12-standard_12.2-1_amd64.tar.zst",
  "CentOs 9": "local:vztmpl/centos-9-stream-default_20221109_amd64.tar.xz",
  "Windows Server 2016": 108,
  "Windows Server 2011": 108,
};

const ServiceSoldImage = ({ handleBack, handleNext }) => {
  const selectedOS = useSelector((state) => state.app?.selectedOS);
  const selectedVersion = useSelector((state) => state.app?.selectedVersion);
  const hostname = useSelector((state) => state.app?.hostname);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedOS === "Linux") {
      dispatch(setUsername("root"));
    } else if (selectedOS === "Windows") {
      dispatch(setUsername("Administrator"));
    }
  }, [selectedOS, dispatch]);

  const handleOSChange = (os) => {
    // console.log({ os });
    if (selectedOS !== os) {
      dispatch(setSelectedOS(os)); // Set selected OS name
      dispatch(setSelectedVersion(null)); // Reset selected version when OS is changed
    }
  };
  const handleVersionChange = (option) => {
    const template = templates[option]; // Get the corresponding template
    // console.log({ template });
    dispatch(setSelectedVersionvalue(option)); // Set the template as the version
    dispatch(setSelectedVersion(template)); // Set the template as the version
  };
  const handleNextStep = () => {
    const dataToSend = {
      os: selectedOS,
      version: selectedVersion,
      hostname,
    };
    handleNext(dataToSend);
  };

  return (
    <div className="px-[2rem] py-[2rem] w-[53rem] border-2 rounded border-[#113A6E] h-auto bg-white flex-col col-span-3 space-y-[2rem]">
      <h2 className="font-bold text-lg underline underline-offset-[0.7rem] decoration-[#113A6E]">
        Select Image
      </h2>
      <div className="flex justify-between">
        {operatingSystems.map((osData) => (
          <OperatingSystemCard
            key={osData.os}
            os={osData.os}
            logo={osData.logo}
            price={osData.price}
            options={osData.options}
            selected={selectedOS === osData.os} // Highlight selected OS
            onChange={() => handleOSChange(osData.os)} // Handle OS selection
            selectedVersion={selectedVersion} // Pass selected version
            onVersionChange={handleVersionChange} // Pass function reference for version change
            disabled={!!selectedVersion && selectedOS !== osData.os} // Disable if a version is selected for another OS
          />
        ))}
      </div>

      <div className="flex justify-between">
        <BackButton onBack={handleBack} disabled={false} />
        <ConfirmButton
          onConfirm={handleNextStep}
          disabled={!selectedOS || !selectedVersion} // Button is disabled if either OS or version is not selected
          isLastStep={false}
        />
      </div>
    </div>
  );
};

export default ServiceSoldImage;
