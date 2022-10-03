import React from "react";
import Container from "../components/Container";
import { ActionButton } from "../components/Button";
import { MdDeleteOutline as Delete } from "react-icons/md";
import { GiEmptyHourglass as Empty } from "react-icons/gi";
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from "../components/Table";
import { BiCaretLeft as Back, BiCaretRight as Forward } from "react-icons/bi";

const Donor = ({ history = [] }) => {
  console.log(history);
  return (
    <div>
      {history.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="data-table mx-auto">
              <thead>
                <tr>
                  <FirstHeader text="No" />
                  <Header text="Nama" />
                  <Header text="Gol. Darah" />
                  <Header text="Lokasi" />
                  <LastHeader text="Tanggal" />
                  <th></th>
                </tr>
              </thead>

              {history.map((row, idx) => (
                <tbody key={idx}>
                  <tr>
                    {Object.values(row).map((item, id) => (
                      <TableData
                        key={id}
                        column={Object.keys(row)[id]}
                        isEven={idx % 2 === 0 && true}
                        text={Object.keys(row)[id] === "id" ? idx + 1 : item}
                      />
                    ))}
                    <td>
                      <div className="flex flex-row w-full space-x-2 items-center justify-center">
                        <ActionButton content={<Delete size={20} />} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}

              <tbody>
                <tr>
                  <Footer colspan={5} />
                </tr>
              </tbody>
            </table>
          </div>

          <Container
            content={
              <div className="flex flex-row items-center justify-center py-4">
                <button className="text-gray-800 cursor-default">
                  <Back size={24} />
                </button>
                <p>1</p>
                <button className="text-red-800 active:text-red-900">
                  <Forward size={24} />
                </button>
              </div>
            }
          />
        </div>
      ) : (
        <div className="flex flex-col items-center pb-10 space-y-5">
          <Empty size={200} color="#AAAAAA" />
          <p>Data belum tersedia.</p>
        </div>
      )}
    </div>
  );
};

export default Donor;
