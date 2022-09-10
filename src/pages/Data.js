import React from "react";
import { MdDeleteOutline as Delete } from "react-icons/md";
import {
  BiCaretLeft as Back,
  BiCaretRight as Forward,
  BiSearchAlt as Search,
} from "react-icons/bi";
import { ActionButton, NavButton } from "../components/Button";
import Container from "../components/Container";
import {
  CheckTableRow as CheckRow,
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from "../components/Table";
import { SectionHeader } from "../components/Text";
import { donorParticipant } from "../dummy";

const Data = () => {
  return (
    <section className="pt-40 pb-20">
      <Container
        content={
          <div>
            <SectionHeader text="Data Peserta Donor Darah" />
            <div className="flex flex-row items-center space-x-2">
              <div className="flex felx-row items-center space-x-2">
                <NavButton text="All" />
                <NavButton text="A" />
                <NavButton text="B" />
                <NavButton text="AB" />
                <NavButton text="O" />
              </div>
              <div className="flex-1 flex h-10 items-center">
                <input
                  placeholder="Cari ..."
                  className="h-full w-full focus:outline-none px-5 border border-red-800 border-r-0 rounded-l-lg placeholder:text-red-400"
                />
                <button className="h-full w-20 flex items-center justify-center bg-red-800 active:bg-red-900 rounded-r-lg">
                  <Search color="white" size={24} />
                </button>
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr>
                  <th>
                    <ActionButton content={<Delete size={20} />} />
                  </th>
                  <FirstHeader text="No" />
                  <Header text="Name" />
                  <Header text="Alamat" />
                  <Header text="Pekerjaan" />
                  <Header text="Usia" />
                  <Header text="No. HP" />
                  <Header text="Gender" />
                  <LastHeader text="Gol.Darah" />
                  <th></th>
                </tr>
              </thead>
              {donorParticipant.map((row, idx) => (
                <tbody key={idx}>
                  <tr>
                    <CheckRow />
                    {Object.values(row).map((item, id) => (
                      // Object.keys(row)[id] === "id" ? (
                      //   <TableData
                      //     isEven={idx % 2 === 0 && true}
                      //     text={idx + 1}
                      //   />
                      // ) : (
                      //   <TableData isEven={idx % 2 === 0 && true} text={item} />
                      // )
                      <TableData
                        column={Object.keys(row)[id]}
                        isEven={idx % 2 === 0 && true}
                        text={Object.keys(row)[id] === "id" ? idx + 1 : item}
                      />
                    ))}
                    <td>
                      <div className="flex flex-row w-full space-x-2 items-center justify-center">
                        <ActionButton content={<Search size={20} />} />
                        <ActionButton content={<Delete size={20} />} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
              <tbody>
                <td />
                <Footer colspan={8} />
              </tbody>
            </table>

            <div className="flex flex-row bg-red-100 items-center justify-center">
              <button className="text-gray-800 cursor-default">
                <Back size={24} />
              </button>

              <p>1</p>

              <button className="text-red-800 active:text-red-900">
                <Forward size={24} />
              </button>
            </div>
          </div>
        }
      />
    </section>
  );
};

export default Data;
