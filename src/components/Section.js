import React from "react";

export const HomeSection = ({ content = <div /> }) => {
  return (
    <section className="h-screen pt-20 overflow-hidden">{content}</section>
  );
};

export const HomeJumbotron = ({ content = <div /> }) => {
  return (
    <section className="jumbotron h-screen pt-20 overflow-hidden">
      {content}
    </section>
  );
};
