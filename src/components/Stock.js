import React, { useEffect, useState } from "react";
import Container from "./Container";
import BloodBox from "../components/BloodBox";
import {
  FirstHeader,
  Footer,
  Header,
  LastHeader,
  TableData,
} from "../components/Table";
import { ActionButton, ActionButtonGray } from "../components/Button";
import { connect } from "react-redux";
import Modal from "./Modal";
import { getStock } from "../redux/actions/stock";

const Stock = ({ stock, auth, getStock }) => {
  const [input, setInput] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (stock.data.length > 0) {
      setData(stock.data);
    } else {
      getStockData();
    }
    // setData(stock.data);
  }, []);

  const getStockData = () => {
    getStock().then(() => {
      setData(stock.data);
      console.log(stock.data);
    });
  };

  const changeInput = (event, id, input) => {
    if (event.target.value >= 0) {
      let newArray = [...data];
      if (input === "income") {
        newArray[id].masuk = Number(event.target.value);
      }
      if (input === "expenditure") {
        newArray[id].keluar = Number(event.target.value);
      }
      setData(newArray);
    } else {
      console.log("no negative data");
    }
  };

  const onSubmit = (event) => {
    if (event.keyCode === 13) {
      submit();
    }
  };

  const submit = () => {
    let alert = false;
    data.map((items) => {
      const range = items.masuk - items.keluar;
      if (range < 0) {
        alert = true;
      }
      return alert;
    });
    console.log(`alert : ${alert}`);
    console.log(data);
    setInput(false);
  };

  const cancel = () => {
    console.log(stock);
    setData(stock.data);
    setInput(false);
  };

  return (
    <div className="mb-20 space-y-20">
      <Container
        content={
          <div className="flex justify-center h-full text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 justify-center gap-5 max-w-2xl w-full">
              {data.map((item, idx) => (
                <div key={idx} className="flex justify-center">
                  <BloodBox type={item.gol_darah} amount={item.total} />
                </div>
              ))}
            </div>
          </div>
        }
      />

      <div>
        <div className="overflow-x-auto">
          <table className="data-table mx-3 sm:mx-10 xl:mx-auto">
            <thead>
              <tr>
                <FirstHeader text="No" />
                <Header text="Gol. Darah" />
                <Header text="Pemasukan" />
                <Header text="Pengeluaran" />
                <LastHeader text="Total" />
              </tr>
            </thead>

            {data.length > 0 &&
              data.map((row, idx) => (
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

        <Container
          content={
            <div className="flex justify-end mt-5">
              {auth.token && (auth.userId === 1 || auth.userId === 2) && (
                <ActionButton
                  onClick={() => setInput(true)}
                  content={"Tambah Data"}
                />
              )}
            </div>
          }
        />
      </div>

      {input && (
        <Modal
          setOpenModal={setInput}
          content={
            <div className="flex flex-col space-y-10">
              <p className="text-center font-bold text-xl">Update Stock Data</p>
              {data.map((items, idx) => (
                <div key={idx} className="flex flex-col space-y-0">
                  <p className="text-gray-700">
                    Golongan Darah {items.gol_darah}
                  </p>
                  <div className="flew flew-row space-x-10">
                    <input
                      className="py-2 border-b border-gray-700 bg-white focus:outline-none "
                      placeholder={"Masuk"}
                      type={"number"}
                      value={items.masuk}
                      onChange={(event) => changeInput(event, idx, "income")}
                      onKeyDown={onSubmit}
                    />
                    <input
                      className="py-2 border-b border-gray-700 bg-white focus:outline-none "
                      placeholder={"Keluar"}
                      type={"number"}
                      value={items.keluar}
                      onChange={(event) =>
                        changeInput(event, idx, "expenditure")
                      }
                      onKeyDown={onSubmit}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <ActionButtonGray onClick={cancel} content={"Batal"} />
                <ActionButton onClick={submit} content={"Tambah Data"} />
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  stock: state.stock,
});

const mapDispatchToProps = {
  getStock,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
