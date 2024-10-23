import React, { useState } from "react";
import ServiceDropdown from "./ServiceDropdown";
import { BackButton, ConfirmButton } from "./Button";
import ButtonSwitch from "./buttonSwitch";
import { useDispatch, useSelector } from "react-redux";
import {
  setBackup,
  setMonitoring,
  setServerManage,
} from "../../reduxToolKit/service/slices";

const ServiceSoldAddOn = ({ handleBack, handleNext, postData }) => {
  const dispatch = useDispatch();
  const backup = useSelector((state) => state.app?.backup);
  const serverManage = useSelector((state) => state.app?.serverManage);
  const monitoring = useSelector((state) => state.app?.monitoring);

  const handleBackupChange = (newValue) => {
    dispatch(setBackup(newValue));
  };

  const handleServermanageChange = (newValue) => {
    dispatch(setServerManage(newValue));
  };

  const handleMonitoringChange = (newValue) => {
    dispatch(setMonitoring(newValue));
  };

  const handleSubmit = () => {
    // Call the postData function passed from the parent component
    postData();
    //   console.log('press', handleSubmit)
    handleNext(); // You can also trigger handleNext if needed after submission
  };

  return (
    <div className="mx-8 border-2 rounded border-[#113A6E] h-auto p-6 bg-white w-[50rem]">
      <h2 className="font-bold text-lg mb-6 underline underline-offset-[0.7rem] decoration-[#113A6E] ">
        Select Add-ons
      </h2>
      <ButtonSwitch
        label="Private Network"
        onChange={handleBackupChange}
        value={backup}
      />
      <ButtonSwitch
        label="Server Management"
        onChange={handleServermanageChange}
        value={serverManage}
      />
      <ButtonSwitch
        label="Monitoring"
        onChange={handleMonitoringChange}
        value={monitoring}
      />
      {/* <ServiceDropdown
        label="Backup Space"
        options={backupOptions}
        value={backup}
        onChange={handleBackupChange}
        labelClassName="text-sm"
      /> */}
      {/* 
      <ServiceDropdown
        label="Server Management"
        options={servermanageOptions}
        value={servermanage}
        onChange={handleServermanageChange}
        labelClassName="text-sm"
      /> */}

      {/* <ServiceDropdown
        label="Monitoring"
        options={monitoringOptions}
        value={monitoring}
        onChange={handleMonitoringChange}
        labelClassName="text-sm"
      /> */}

      {/* <ServiceDropdown
        label="SSL"
        options={sslOptions}
        value={ssl}
        onChange={handleSSLChange}
        labelClassName="text-sm"
      /> */}

      <div className="flex justify-between mt-[1rem]">
        <BackButton onBack={handleBack} disabled={false} />
        <ConfirmButton onConfirm={handleSubmit} isLastStep={false} />
      </div>
    </div>
  );
};

export default ServiceSoldAddOn;
