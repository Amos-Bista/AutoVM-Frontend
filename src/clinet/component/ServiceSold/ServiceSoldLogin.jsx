import React, { useState, useEffect } from "react";
import { BackButton, ConfirmButton } from "./Button";
import ServiceTextField from "./ServiceTextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmPassword,
  setHostname,
  setPassword,
} from "../../../common/reduxToolKit/service/slices";

const ServiceSoldLogin = ({ handleNext, handleBack }) => {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const username = useSelector((state) => state.app?.username);
  const hostname = useSelector((state) => state.app?.hostname);
  const password = useSelector((state) => state.app?.password);
  const confirmPassword = useSelector((state) => state.app?.confirmPassword);

  useEffect(() => {
    if (hostname && password && confirmPassword) {
      setIsButtonDisabled(false); // Enable the button if all fields are filled
    } else {
      setIsButtonDisabled(true); // Disable the button if any field is empty
    }
  }, [hostname, password, confirmPassword]);

  const handleConfirm = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    handleNext(); // Move to the next step
  };

  return (
    <div className="p-[2rem] border-2 rounded border-[#113A6E] h-auto  bg-white w-[53rem]">
      <h2 className="font-bold text-lg mb-6 underline underline-offset-[0.7rem] decoration-[#113A6E]">
        Insert Login & Password
      </h2>
      <div className="flex items-center mb-4">
        <label className="text-sm font-bold w-[15rem] pr-4">User Name</label>
        <input
          type="text"
          value={username}
          readOnly
          className="w-full p-3 font-bold border-none"
        />
      </div>
      <ServiceTextField
        label="Host Name"
        value={hostname}
        onChange={(e) => dispatch(setHostname(e.target.value))}
      />
      <ServiceTextField
        label="Password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        type="password"
      />
      <ServiceTextField
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
        type="password"
      />
      <div className="flex justify-between mt-[1rem]">
        <BackButton onBack={handleBack} disabled={false} />
        <ConfirmButton
          onConfirm={handleConfirm}
          disabled={isButtonDisabled}
          isLastStep={false}
        />
      </div>
    </div>
  );
};

export default ServiceSoldLogin;
