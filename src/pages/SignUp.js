import React from "react";
import Container from "../components/Container";
import { AuthSection } from "../components/Section";
import { AuthHeader } from "../components/Text";
import Input from "../components/Input";
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
                    <Input
                      label="Nama :"
                      placeholder="Masukan nama lengkap Anda"
                    />
                    <Input
                      label="HP :"
                      placeholder="Masukan nomor handphone Anda"
                    />
                    <Input label="Email :" placeholder="Masukan email Anda" />
                    <Input
                      label="Password :"
                      placeholder="Masukan password Anda"
                    />
                    <Input
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
