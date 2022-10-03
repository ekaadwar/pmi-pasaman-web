import React from "react";
import Container from "./Container";
import BloodBox from "../components/BloodBox";
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from "../components/Table";

const Stock = ({ stock = [] }) => {
  return (
    <div className="mb-20 space-y-20">
      <Container
        content={
          <div className="flex justify-center h-full text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 justify-center gap-5 max-w-2xl w-full">
              {stock.map((item, idx) => (
                <div key={idx} className="flex justify-center">
                  <BloodBox type={item.gol_darah} amount={item.total} />
                </div>
              ))}
            </div>
          </div>
        }
      />

      <table className="data-table mx-auto">
        <thead>
          <tr>
            <FirstHeader text="No" />
            <Header text="Gol. Darah" />
            <Header text="Pemasukan" />
            <Header text="Pengeluaran" />
            <LastHeader text="Total" />
          </tr>
        </thead>

        {stock.length > 0 &&
          stock.map((row, idx) => (
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
  );
};

export default Stock;
