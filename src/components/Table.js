import React from "react";

export const FirstHeader = ({ text = "" }) => {
  return <th className="h-16 bg-red-800 text-white rounded-tl-md">{text}</th>;
};

export const Header = ({ text = "" }) => {
  return <th className="h-16 bg-red-800 text-white">{text}</th>;
};

export const LastHeader = ({ text = "" }) => {
  return <th className="h-16 bg-red-800 text-white rounded-tr-md">{text}</th>;
};

export const TableData = ({ isEven = false, column = "", text = "" }) => {
  return isEven ? (
    <td className="h-12 text-center bg-red-100 border-y border-red-300">
      {column === "name" ? (
        <p className="text-left">{text}</p>
      ) : (
        <p className="text-center">{text}</p>
      )}
    </td>
  ) : (
    <td className="h-12">
      {column === "name" ? (
        <p className="text-left">{text}</p>
      ) : (
        <p className="text-center">{text}</p>
      )}
    </td>
  );
};

export const CheckTableRow = ({ checked = false }) => {
  return (
    <td className="h-12 flex items-center justify-center">
      <button className="flex flex-row border border-gray-400 items-center justify-center h-4 w-4 rounded-sm">
        {checked === true && <div className="h-3 w-3 bg-red-800 rounded-sm" />}
      </button>
    </td>
  );
};

export const Footer = ({ colspan = 0 }) => {
  return <td colspan={colspan} className="h-4 bg-red-800 rounded-b-md" />;
};
