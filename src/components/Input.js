import React from "react";

export const InputAuth = ({
  label = "",
  placeholder = "",
  type = "text",
  onChange = () => {},
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <p>{label}</p>
      <input
        className="px-3 py-2 rounded-md border border-gray-300 bg-white"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export const InputProfile = ({
  label = "",
  placeholder = "",
  type = "text",
  value = "",
  onChange = () => {},
  onKeyDown = () => {},
}) => {
  return (
    <div className="flex flex-col space-y-0">
      <p className="text-gray-700">{label}</p>
      <input
        className="py-2 border-b border-gray-700 bg-white focus:outline-none "
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export const InputArea = ({
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="flex flex-col space-y-0">
      <p className="text-gray-700">{label}</p>
      <textarea
        className="py-2 border-b border-gray-700 bg-white focus:outline-none"
        placeholder={placeholder}
        rows="2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
