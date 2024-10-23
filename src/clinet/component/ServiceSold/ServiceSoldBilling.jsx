import React, { useState } from "react";
import TextFieldBtn from "./TextFieldBtn";
import { BackButton, ConfirmButton } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setSoldservicebillingperiod,
  setSoldservicebillingperiodvalue,
} from "../../../common/reduxToolKit/service/slices";
import { useNavigate } from "react-router-dom";

const ServiceSoldBilling = ({ handleNext, handleBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const soldservicebillingperiod = useSelector(
    (state) => state.app?.soldservicebillingperiod
  );
  const soldCPU = useSelector((state) => state.app?.soldCPU);
  console.log("soldCPU", soldCPU);
  const soldRAM = useSelector((state) => state.app?.soldRAM);
  const soldstorage = useSelector((state) => state.app?.soldstorage);
  const soldsnapshot = useSelector((state) => state.app?.soldsnapshot);

  const billingOptions = [
    { id: 1, label: "1 Month", value: 1, period: "Monthly" },
    { id: 2, label: "3 Month", value: 3, period: "Three" },
    { id: 3, label: "6 Month", value: 6, period: "Six" },
    { id: 4, label: "12 Month", value: 12, period: "twelve" },
  ];

  const handleBillingSelection = (option) => {
    dispatch(setSoldservicebillingperiodvalue(option.period));
    dispatch(setSoldservicebillingperiod(option.value)); // Dispatch selected billing period value
  };

  const handleHome = () => {
    // Call the postData function passed from the parent component
    //   console.log('press', handleSubmit)
    // handleNext(); // You can also trigger handleNext if needed after submission
    navigate("/");
  };

  return (
    <div className=" px-[2rem] py-[2rem] border-double border-2 rounded-md border-[#113A6E] shadow-2xl bg-white w-[53rem]">
      <div className="flex text-xl ">
        <div className=" w-[12.5rem]">
          <p className="pb-1 text-xs">CPU</p>
          <div className="flex gap-1">
            <h3>{soldCPU}</h3>
            <h3>Core CPU</h3>
          </div>
        </div>
        <div className=" w-[12.5rem] ">
          <p className="pb-1 text-xs ">RAM</p>
          <div className="flex gap-1">
            <h3>{soldRAM}</h3>
            <h3>MB RAM</h3>
          </div>
        </div>
        <div className=" w-[12.5rem] ">
          <p className="pb-1 text-xs ml-[0.3rem]">Storage</p>
          <div className="flex gap-1">
            <h3>{soldstorage}</h3>
            <h3>GB SSD</h3>
          </div>
        </div>
        <div className="">
          <p className="pb-1 text-xs fle">Snapshot</p>
          <div className="flex gap-1">
            <h3>{soldsnapshot}</h3>
            <h3>Snapshot</h3>

            {/* <h3>{soldsnapshotvalue}</h3> */}
          </div>
        </div>
      </div>

      <h2 className="font-bold text-lg  underline underline-offset-[0.7rem] decoration-[#113A6E] mt-[2rem]">
        Select Billing Cycle
      </h2>
      <div className="flex justify-between mt-[3rem]">
        {billingOptions.map((option) => (
          <TextFieldBtn
            key={option.id}
            label={option.label}
            checked={soldservicebillingperiod === option.value}
            onChange={() => handleBillingSelection(option)}
          />
        ))}
      </div>

      {/* Buttons to navigate within the step */}
      <div className="flex justify-between mt-[2rem]">
        <BackButton onBack={handleHome} disabled={false} />
        <ConfirmButton
          onConfirm={handleNext}
          isLastStep={false}
          disabled={!soldservicebillingperiod}
        />
      </div>
    </div>
  );
};

export default ServiceSoldBilling;
