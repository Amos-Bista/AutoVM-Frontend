import React from "react";

const ServiceTextField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  readOnly,
}) => {
  return (
    <div className="flex items-center mb-4">
      <label className="text-sm font-bold w-[15rem] pr-4">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        className="border border-[#113A6E] p-3 w-full rounded-md"
      />
    </div>
  );
};

export default ServiceTextField;
