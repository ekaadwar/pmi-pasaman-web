import React from "react";
import { CircleSm } from "./Circle";

export const PrimaryButton = ({ content = <div /> }) => {
  return (
    <div className="flex flex-col py-2 px-4 w-full rounded-md items-center justify-center bg-red-800 active:bg-red-600 cursor-pointer shadow-lg shadow-stone-500/50 hover:shadow-red-500/50">
      {content}
    </div>
  );
};

export const CircleButton = ({ content = <div /> }) => {
  return (
    <CircleSm
      content={
        <div className="flex h-full w-full items-center justify-center bg-red-800 active:bg-red-600">
          {content}
        </div>
      }
    />
  );
};
