import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { AuthSection } from "../components/Section";
import { AuthHeader } from "../components/Text";
import Input from "../components/Input";
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

                    <Input
                      label="Username :"
                      placeholder="Masukan email/no.HP Anda"
                    />
                    <Input
                      label="Password :"
                      placeholder="Masukan password Anda"
                    />
                    <div>
                      <Link to="#">
                        <p>Anda lupa password?</p>
                      </Link>
                    </div>

                    <PrimaryButton
                      content={<p className="text-white font-bold">Kirim</p>}
                    />
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
