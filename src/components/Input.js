import React from "react";

const Input = ({ label = "", placeholder = "", value = "" }) => {
  return (
    <div className="flex flex-col space-y-4">
      <p>{label}</p>
      <input
        placeholder={placeholder}
        value={value}
        className="px-3 py-2 rounded-md border border-gray-300 bg-white"
      />
    </div>
  );
};

export default Input;
