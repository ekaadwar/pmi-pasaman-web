import React, { useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { logoPmi } from "../assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed z-50 w-full bg-white shadow-md shadow-stone-500/40">
      <Container
        content={
          <div className="flex flex-row justify-between items-center h-20">
            <Link to="/">
              <div className="w-10 h-10">
                <img src={logoPmi} alt="logo PMI Pasaman" />
              </div>
            </Link>

            <div
              className="lg:hidden"
              // onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger
                toggled={isOpen}
                toggle={() => setIsOpen(!isOpen)}
                color="rgb(127 29 29)"
                size={20}
              />
            </div>

            <div className="hidden lg:flex flex-row justify-center space-x-8">
              <Link to="#">Tentang Kami</Link>
              <Link to="#">Stok Darah</Link>
              <Link to="#">Pelayanan</Link>
            </div>

            <div className="hidden lg:flex flex-row justify-center space-x-8">
              <Link to="signup">Daftar</Link>
              <p>|</p>
              <Link to="signin">Masuk</Link>
            </div>
          </div>
        }
      />

      {isOpen && (
        <div
          id="toggleMenu"
          className=" block lg:hidden bg-gradient-to-b from-white pb-20"
        >
          <Container
            content={
              <div className="container mx-auto px-4 lg:px-10 flex flex-col my-5 space-y-5 items-end pr-3">
                <Link
                  to={(location) => {
                    return { ...location, pathname: "/" };
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link to="#" onClick={() => setIsOpen(false)}>
                  Tentang Kami
                </Link>
                <Link to="#" onClick={() => setIsOpen(false)}>
                  Stok Darah
                </Link>
                <Link to="#" onClick={() => setIsOpen(false)}>
                  Pelayan
                </Link>

                <div className="flex flex-row space-x-3 font-bold">
                  <Link to="/signin" onClick={() => setIsOpen(false)}>
                    Signin
                  </Link>
                  <p>|</p>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      )}
    </header>
  );
};

export default Header;
