import React from "react";

const DonorHistory = ({ id = 0, date = "", status = "" }) => {
  let color = "";
  if (status === "selesai") {
    color = "bg-green-800";
  } else if (status === "menunggu") {
    color = "bg-yellow-800";
  } else {
    color = "bg-red-700";
  }
  return (
    <div className="text-white">
      <p className="text-shadow text-sm">Jadwal Donor {id}</p>
      <div className="flex flex-row justify-between items-center space-x-3">
        <div className="flex-1 py-2 border-b-2">
          <p className="text-shadow">{date}</p>
        </div>
        <div className={`${color} py-1 px-2 rounded-md`}>
          <p className="text-xs">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default DonorHistory;
