import React from "react";
import { SectionHeader } from "../components/Text";

const ForgotPass = () => {
  return (
    <section className="forgotpass-page flex flex-col justify-center items-center h-screen text-white space-y-5">
      <SectionHeader text="Anda lupa password?" />
      <p>Jangan khawatir, kami akan menemukannya kembali.</p>
      <div className="grid grid-cols-3 h-16 w-full max-w-lg space-x-2">
        <input
          className="focus:outline-none text-gray-700 col-span-2 px-2 h-full rounded-l-lg"
          placeholder="Masukan email Anda"
        />
        <button className="bg-red-900 rounded-r-lg active:bg-red-700">
          Kirim
        </button>
      </div>
      <p>Kami akan segera mengirim link ke alamat email Anda.</p>
    </section>
  );
};

export default ForgotPass;
