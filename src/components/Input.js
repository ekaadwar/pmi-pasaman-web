import React from "react";

export const InputAuth = ({ label = "", placeholder = "", value = "" }) => {
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

export const InputProfile = ({ label = "", placeholder = "", value = "" }) => {
  return (
    <div className="flex flex-col space-y-0">
      <p className="text-gray-700">{label}</p>
      <input
        placeholder={placeholder}
        // value={value}
        className="px-3 py-2 border-b border-gray-700 bg-white focus:outline-none "
      />
    </div>
  );
};

export const InputArea = ({ label = "", placeholder = "", value = "" }) => {
  return (
    <div className="flex flex-col space-y-0">
      <p className="text-gray-700">{label}</p>
      <textarea
        placeholder={placeholder}
        // value={value}
        rows="2"
        className="px-3 py-2 border-b border-gray-700 bg-white focus:outline-none "
      />
    </div>
  );
};
