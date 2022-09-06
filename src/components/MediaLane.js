import React from "react";

const MediaLane = ({ media = "", icon = <div /> }) => {
  return (
    <div className="flex flex-row items-center space-x-5">
      <p>{media}</p>
      {icon}
    </div>
  );
};

export default MediaLane;
