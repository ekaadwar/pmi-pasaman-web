import React from "react";

const BloodBox = ({ type = "", amount = 0 }) => {
  return (
    <div className="flex flex-col w-32 h-32 rounded-md bg-red-800 items-center justify-center space-y-3 active:bg-red-600 cursor-pointer shadow-lg shadow-stone-500/50 hover:shadow-red-500/50">
      <p className="text-5xl text-white font-bold">{type}</p>
      <p className="text-white">{amount} kantong</p>
    </div>
  );
};

export default BloodBox;
