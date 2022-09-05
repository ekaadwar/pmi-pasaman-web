import React from "react";

export const PrimaryDot = ({ content = <div /> }) => {
  return (
    <div
      className={`flex justify-center items-center bg-red-600 w-5 h-5 rounded-full`}
    >
      {content}
    </div>
  );
};
