import React from "react";
import Container from "../components/Container";
import { logoName } from "../assets";
import { SectionHeader } from "../components/Text";
import List from "../components/List";
import { loveCombine1, loveCombine2 } from "../assets";
import { PageSection, PageJumbotron } from "../components/Section";
import BloodBox from "../components/BloodBox";
import { bloodStock } from "../dummy";
import { PrimaryButton } from "../components/Button";

const Home = () => {
  return (
    <section className="">
      <PageJumbotron
        content={
          <Container
            content={
              <div className="flex flex-col justify-center sm:w-1/2 h-full space-y-12">
                <div className="max-w-xs">
                  <img src={logoName} alt="logo PMI Pasaman" />
                </div>

                <p className="xl:w-1/2 text-white font-bold">
                  Pelayanan yang dilaksanakan oleh Palang Merah Indonesia sesuai
                  amanat Undang-Undang No.1 Tahun 2018 tentang Kepalangmerahan
                </p>
              </div>
            }
          />
        }
      />
      <PageSection
        content={
          <Container
            content={
              <div className="grid md:grid-cols-2 h-full">
                <div className="flex flex-col h-full justify-center space-y-10">
                  <div>
                    <SectionHeader text="Visi dan Misi" />
                    <SectionHeader text="Palang Merah Indonesia" />
                  </div>
                  <div>
                    <p className="font-bold mb-5">Visi :</p>
                    <p>
                      Terwujudnya PMI yang profesional dan berintegritas serta
                      bergerak bersama masyarakat
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-5">Misi :</p>
                    <List
                      list={[
                        "Memelihara reputasi organisasi PMI di tingkat Nasional dan Internasional",
                        "Menjadi organisasi kemanusiaan terdepan yang memberikan layanan berkualitas kepada masyarakat sesuai dengan prinsip-prinsip dasar Gerakan Palang Merah dan Bulan Sabit Merah",
                      ]}
                    />
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center h-full">
                  <div className="w-3/4">
                    <img src={loveCombine1} alt="love" />
                  </div>
                </div>
              </div>
            }
          />
        }
      />

      <div className="bg-gray-200">
        <Container
          content={
            <div className="h-full py-20 text-center">
              <SectionHeader text="Jumlah Darah yang Tersedia" />
              <div className="grid grid-cols-2 sm:grid-cols-4 justify-center pt-10 gap-5">
                {bloodStock.map((item, idx) => (
                  <div key={idx} className="flex justify-center">
                    <BloodBox type={item.type} amount={item.amount} />
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>

      <Container
        content={
          <div className="grid md:grid-cols-2 h-full py-20">
            <div className="hidden md:flex items-center justify-center h-full">
              <div className="w-3/4">
                <img src={loveCombine2} alt="love" />
              </div>
            </div>

            <div className="flex flex-col h-full justify-center space-y-10">
              <div>
                <SectionHeader text="Ayo ikut berkontribusi sebagai pendonor" />
              </div>
              <div className="w-1/2 self-end">
                <PrimaryButton
                  content={
                    <p className="text-xl text-white font-bold">Daftar</p>
                  }
                />
              </div>
            </div>
          </div>
        }
      />
    </section>
  );
};

export default Home;
