import React, { useState, useEffect } from "react";
import { BackButton, ConfirmButton } from "./Button";
import ServiceTextField from "./ServiceTextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmPassword,
  setHostname,
  setPassword,
} from "../../../common/reduxToolKit/service/slices";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const ServiceSoldLogin = ({ handleNext, handleBack }) => {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle password visibility

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
    // Initialize an array to hold error messages
    const errors = [];

    // Check password requirements
    if (password.length < 8) {
      errors.push("Password must be greater than 8 characters.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[@_]/.test(password)) {
      errors.push("Password must contain at least one symbol (@ or _).");
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    // If there are errors, show them to the user
    if (errors.length > 0) {
      alert(errors.join(" ")); // Join error messages with a space
      return; // Exit the function if there are errors
    }

    handleNext(); // Move to the next step if validations pass
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="p-[2rem] border-2 rounded border-[#113A6E] h-auto bg-white w-[53rem]">
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
      <div className="relative mb-4">
        <ServiceTextField
          label="Password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          type={showPassword ? "text" : "password"} // Toggle password visibility
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute text-gray-600 right-3 top-4 hover:text-gray-800"
        >
          {showPassword ? <IoEyeOff /> : <FaEye />}
        </button>
      </div>
      <div className="relative mb-4 aligin-middle">
        <ServiceTextField
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
          type={showConfirmPassword ? "text" : "password"} // Toggle password visibility
        />
        <button
          type="button"
          onClick={toggleConfirmPasswordVisibility}
          className="absolute text-gray-600 right-3 top-4 hover:text-gray-800"
        >
          {showConfirmPassword ? <IoEyeOff /> : <FaEye />}
        </button>
      </div>
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
