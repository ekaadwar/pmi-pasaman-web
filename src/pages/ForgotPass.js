import React from "react";
import { SectionHeader } from "../components/Text";

const ForgotPass = () => {
  return (
    <section className="forgotpass-page flex flex-col justify-center items-center h-screen text-white space-y-5 px-5 py-20">
      <SectionHeader text="Anda lupa password?" />
      <p className="text-center">
        Jangan khawatir, kami akan menemukannya kembali.
      </p>
      <div className="grid sm:grid-cols-3 w-full max-w-lg sm:space-x-2 space-y-4 sm:space-y-0">
        <input
          className="focus:outline-none text-gray-700 sm:col-span-2 px-2 h-16  rounded-l-lg"
          placeholder="Masukan email Anda"
        />
        <button className="bg-red-900 rounded-l-lg active:bg-red-700 h-16">
          Kirim
        </button>
      </div>
      <p className="text-center">
        Kami akan segera mengirim link ke alamat email Anda.
      </p>
    </section>
  );
};

export default ForgotPass;
