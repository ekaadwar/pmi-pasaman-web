import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { logoPmi } from "../assets";

export const AuthHeader = ({ signup = false }) => {
  return (
    <header className="fixed z-50 top-0 right-0 w-full md:w-1/2 pr-5 lg:pr-10 bg-white">
      <Container
        content={
          <div className="flex flex-row justify-between items-center h-20">
            <Link to="/">
              <div className="w-10 h-10">
                <img src={logoPmi} alt="logo PMI Pasaman" />
              </div>
            </Link>

            {signup ? (
              <Link to="/signin">Masuk</Link>
            ) : (
              <Link to="/signup">Daftar</Link>
            )}
          </div>
        }
      />
    </header>
  );
};

export const ForgotPassHeader = () => {
  return (
    <header className="fixed z-50 w-full bg-white shadow-md shadow-stone-500/40">
      Forgot Pass Header
    </header>
  );
};
