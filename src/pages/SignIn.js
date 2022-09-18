import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { AuthSection } from "../components/Section";
import { AuthHeader } from "../components/Text";
import { InputAuth } from "../components/Input";
import { PrimaryButton } from "../components/Button";

const SignIn = () => {
  return (
    <AuthSection
      content={
        <Container
          content={
            <div className="flex flex-row justify-center md:justify-end h-full ">
              <div className="flex flex-col justify-center md:w-1/2 py-10 px-5 lg:px-10 space-y-5">
                <div className="text-center">
                  <AuthHeader text="Masuk" />
                </div>

                <InputAuth
                  label="Username :"
                  placeholder="Masukan email/no.HP Anda"
                />
                <InputAuth
                  label="Password :"
                  placeholder="Masukan password Anda"
                />
                <div>
                  <Link to="/forgot-pass">
                    <p>Anda lupa password?</p>
                  </Link>
                </div>

                <Link to="/profile" className="block">
                  <PrimaryButton
                    content={<p className="text-white font-bold">Kirim</p>}
                  />
                </Link>
              </div>
            </div>
          }
        />
      }
    />
  );
};

export default SignIn;
