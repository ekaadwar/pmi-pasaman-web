import React from "react";
import { rotateRectangle, love1, rectangles } from "../assets";

const HomeImage = () => {
  return (
    <div className="relative">
      <img className="absolute" src={rotateRectangle} alt="rotate rectangle" />
      <div className="absolute">
        <img src={love1} alt="love" />
      </div>
      <div className="absolute">
        <img src={rectangles} alt="rectangles" />
      </div>
    </div>
  );
};

export default HomeImage;
