import React from "react";
import Container from "../components/Container";
import { AuthSection } from "../components/Section";
import { AuthHeader } from "../components/Text";
import { InputAuth } from "../components/Input";
import { PrimaryButton } from "../components/Button";

const SignUp = () => {
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
                      <AuthHeader text="Daftar" />
                    </div>
                    <InputAuth
                      label="Nama :"
                      placeholder="Masukan nama lengkap Anda"
                    />
                    <InputAuth
                      label="HP :"
                      placeholder="Masukan nomor handphone Anda"
                    />
                    <InputAuth
                      label="Email :"
                      placeholder="Masukan email Anda"
                    />
                    <InputAuth
                      label="Password :"
                      placeholder="Masukan password Anda"
                    />
                    <InputAuth
                      label="Ulangi Password :"
                      placeholder="Ulangi password Anda"
                    />
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

export default SignUp;
