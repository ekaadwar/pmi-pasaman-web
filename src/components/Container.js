import React from "react";

const Container = ({ content = <div /> }) => {
  return <div className="container mx-auto px-10">{content}</div>;
};

export default Container;
