import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { AuthSection } from "../components/Section";
import { AuthHeader } from "../components/Text";
import { InputAuth } from "../components/Input";
import { PrimaryButton } from "../components/Button";

const SignIn = () => {
  return (
    <section className="authPage">
      <Container
        content={
          <div className="flex flex-row justify-end h-full">
            <div className="w-1/2">
              <AuthSection
                content={
                  <div className="space-y-8">
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
                      <Link to="#">
                        <p>Anda lupa password?</p>
                      </Link>
                    </div>

                    <Link to="/profile" className="block">
                      <PrimaryButton
                        content={<p className="text-white font-bold">Kirim</p>}
                      />
                    </Link>
                  </div>
                }
              />
            </div>
          </div>
        }
      />
    </section>
  );
};

export default SignIn;
