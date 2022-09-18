import React from "react";

import Container from "../components/Container";
import { CircleButton } from "../components/Button";
import { InputArea, InputProfile } from "../components/Input";
import { ProfileCard } from "../components/Card";

const AddData = () => {
  return (
    <section className="profile pt-32 pb-20">
      <Container
        content={
          <div className="flex flex-row justify-center">
            <div className="max-w-3xl">
              <ProfileCard
                content={
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2 flex flex-row justify-between items-center">
                      <p className="font-bold text-2xl pt-5 pr-5 text-gray-800">
                        Tambah Data Pendonor
                      </p>
                      <CircleButton
                        content={<p className="text-4xl text-white">+</p>}
                      />
                    </div>
                    <div>
                      <InputProfile label="Name" /*value="Zulaikha"*/ />
                    </div>
                    <div>
                      <InputProfile label="Tanggal Lahir" /*value="xxx"*/ />
                    </div>
                    <div>
                      <InputProfile
                        label="Email" /*value="zulaikha@mail.com"*/
                      />
                    </div>
                    <div>
                      <InputProfile
                        label="Pekerjaan"
                        /*value="xx xx xxxx"*/
                      />
                    </div>
                    <div>
                      <InputProfile label="No. HP" /*value="08xxxxxxxxxx"*/ />
                    </div>
                    <div>
                      <InputProfile label="Golongan Darah" /*value="A"*/ />
                    </div>
                    <div className="sm:col-span-2">
                      <InputArea
                        label="Alamat"
                        /*value="Jalan xxx Nomor xxx, Kec. xxx, Kab. xxx, provinsi"*/
                      />
                    </div>
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

export default AddData;
