import React from "react";
import Container from "../components/Container";
import { logoPmi } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md shadow-stone-500/40">
      <Container
        content={
          <div className="flex flex-row justify-between items-center h-16">
            <Link to="#">
              <div className="w-10 h-10">
                <img src={logoPmi} alt="logo PMI Pasaman" />
              </div>
            </Link>

            <div className="flex flex-row justify-center space-x-8">
              <Link to="#">Tentang Kami</Link>
              <Link to="#">Stok Darah</Link>
              <Link to="#">Pelayanan</Link>
            </div>
            <div className="flex flex-row justify-center space-x-8">
              <Link to="#">Daftar</Link>
              <p>|</p>
              <Link to="#">Masuk</Link>
            </div>
          </div>
        }
      />
    </header>
  );
};

export default Header;
