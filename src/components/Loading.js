import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="transparent-full z-50 fixed top-0 h-full w-full flex items-center justify-center">
      <ReactLoading type="cylon" color="#995A1B" height={100} width={100} />
    </div>
  );
};

export default Loading;
