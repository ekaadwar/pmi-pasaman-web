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

export const NavButton = ({ active = false, text = "" }) => {
  return (
    <button className="bg-red-400 focus:bg-red-800 text-white h-10 w-20 flex flex-row items-center justify-center rounded-lg">
      {text}
    </button>
  );
};

export const ActionButton = ({ content = <div /> }) => {
  return (
    <button className="button-action flex flex-row items-center justify-center bg-red-800 active:bg-red-900 text-white h-8 px-1 rounded-md">
      {content}
    </button>
  );
};
