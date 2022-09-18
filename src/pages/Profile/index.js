// import React, { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import { CircleButton } from "../../components/Button";
import { CircleMd } from "../../components/Circle";
// import { donorHistory } from "../../dummy";
import { FiEdit2 as Edit } from "react-icons/fi";
import { InputArea, InputProfile } from "../../components/Input";
import { ProfileCard } from "../../components/Card";
import { zulaikha } from "../../assets";
// import DonorHistory from "../../components/DonorHistory";

const Profile = () => {
  // const [leftData, setLeftData] = useState([]);
  // const [rightData, setRightData] = useState([]);

  // useEffect(() => {
  //   getData(donorHistory);
  // }, []);

  // const getData = (array) => {
  //   const length = array.length;
  //   const difference = length - 8;
  //   if (difference > 0) {
  //     for (let i = 0; i < difference; i++) {
  //       array.splice(0, 1);
  //     }
  //   }
  //   let data1 = [];
  //   let data2 = [];

  //   if (length <= 4) {
  //     for (let i = 0; i < length; i++) {
  //       data1[i] = array[i];
  //     }
  //   } else {
  //     for (let i = 0; i < 4; i++) {
  //       data1[i] = array[i];
  //     }
  //     let j = 0;
  //     for (let i = 4; i < length; i++) {
  //       data2[j] = array[i];
  //       j += 1;
  //     }
  //   }

  //   console.log("data1");
  //   console.log(data1);
  //   console.log("data2");
  //   console.log(data2);
  //   setLeftData(data1);
  //   setRightData(data2);
  // };

  return (
    <section className="profile min-h-screen pt-32 pb-20">
      <Container
        content={
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-2 md:gap-10 max-w-md w-full sm:max-w-none">
              <div>
                <ProfileCard
                  content={
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative">
                        <CircleMd
                          content={
                            <img
                              src={zulaikha}
                              alt="Smile Woman"
                              className="w-full"
                            />
                          }
                        />
                        <div className="absolute -bottom-2 -right-2">
                          <Link to="#">
                            <CircleButton content={<Edit color="white" />} />
                          </Link>
                        </div>
                      </div>
                      <p className="font-bold text-xl pt-5">Zulaikha</p>
                      <p className="text-sm text-gray-500">zulaikha@mail.com</p>
                      <p>25 Tahun</p>
                      <p className="font-bold text-xl">A</p>
                    </div>
                  }
                />
              </div>

              <div className="lg:col-span-2">
                <ProfileCard
                  content={
                    <div className="grid grid-cols-1 gap-5">
                      <div className="lg:col-span-2 flex flex-row justify-between items-center">
                        <p className="font-bold text-2xl pt-5 text-gray-600">
                          Detail
                        </p>
                        <CircleButton content={<Edit color="white" />} />
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

                      <div className="lg:col-span-2">
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

            {/* <div className="flex flex-col items-center mt-20 space-y-5">
              <div className="flex flex-row justify-center items-start w-full max-w-2xl">
                <div
                  className={`flex-1 space-y-4 px-6 ${
                    rightData.length > 0 && "border-r-2 border-white"
                  }`}
                >
                  {leftData.map((item, idx) => (
                    <div key={idx} className={``}>
                      <DonorHistory
                        id={item.id}
                        date={item.date}
                        status={item.status}
                      />
                    </div>
                  ))}
                </div>

                {rightData.length > 0 && (
                  <div className="flex-1 space-y-4 px-6">
                    {rightData.map((item, idx) => (
                      <div key={idx}>
                        <DonorHistory
                          id={item.id}
                          date={item.date}
                          status={item.status}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="py-2 px-3 bg-gray-200 cursor-pointer active:bg-gray-400 rounded-md shadow-md shadow-black">
                <p className="text-sm">Lihat semua riwayat donor</p>
              </div>
            </div> */}
          </div>
        }
      />
    </section>
  );
};

export default Profile;
