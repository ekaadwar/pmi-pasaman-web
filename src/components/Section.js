import React from "react";

export const PageSection = ({ content = <div /> }) => {
  return (
    <section className="h-screen pt-20 overflow-hidden">{content}</section>
  );
};

export const PageJumbotron = ({ content = <div /> }) => {
  return (
    <section className="jumbotron h-screen pt-20 overflow-hidden">
      {content}
    </section>
  );
};

export const AuthSection = ({ content = <div /> }) => {
  return <section className="pt-40 pb-20 px-10">{content}</section>;
};
