import React from "react";

export const PageSection = ({ content = <div /> }) => {
  return <section className="min-height h-screen pt-20">{content}</section>;
};

export const PageJumbotron = ({ content = <div /> }) => {
  return (
    <section className="jumbotron min-height h-screen pt-20">{content}</section>
  );
};

export const AuthSection = ({ content = <div /> }) => {
  return <section className="pt-32 pb-20 px-10">{content}</section>;
};
