import React from "react";
import { CircleSm } from "./Circle";

export const PrimaryButton = ({ content = <div />, onClick = () => {} }) => {
  return (
    <div
      className="flex flex-col py-2 px-4 w-full rounded-md items-center justify-center bg-red-900 active:bg-red-600 cursor-pointer shadow-lg shadow-stone-500/50 hover:shadow-red-500/50"
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export const CircleButton = ({ content = <div />, onClick = () => {} }) => {
  return (
    <CircleSm
      content={
        <button
          className="flex h-full w-full items-center justify-center bg-red-900 active:bg-red-600"
          onClick={onClick}
        >
          {content}
        </button>
      }
    />
  );
};

export const NavButton = ({ active = false, text = "" }) => {
  return (
    <button className="bg-red-400 focus:bg-red-900 text-white h-10 w-20 flex flex-row items-center justify-center rounded-lg">
      {text}
    </button>
  );
};

export const ActionButton = ({
  content = <div />,
  value = "",
  onClick = () => {},
}) => {
  return (
    <button
      className="button-action flex flex-row items-center justify-center bg-red-900 active:bg-red-700 text-white h-8 px-1 w-full sm:w-auto rounded-md"
      value={value}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export const ActionButtonGray = ({
  content = <div />,
  value = "",
  onClick = () => {},
}) => {
  return (
    <button
      className="button-action flex flex-row items-center justify-center bg-gray-300 active:bg-gray-500 h-8 px-3 w-full sm:w-auto rounded-md text-sm"
      value={value}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
