import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { connect } from "react-redux";
import { authOff } from "../redux/actions/auth";
import { getData } from "../redux/actions/data";

const DataFunc = (props) => {
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    props.getData(props.auth.token).then(() => {
      setData(props.data.data);
      setPageInfo(props.data.pageInfo);
    }, []);
  });

  return (
    <section className="pt-32 pb-20">
      <Container
        content={
          <div className="mb-12">
            <SectionHeader text="Data Peserta Donor Darah" />
          </div>
        }
      />

      <Container
        content={
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center my-12 space-x-2">
            <div className="flex flex-row justify-center items-center space-x-2">
              <NavButton text="All" />
              <NavButton text="A" />
              <NavButton text="B" />
              <NavButton text="AB" />
              <NavButton text="O" />
            </div>
            <div className="flex-1 flex h-10 items-center">
              <input
                placeholder="Cari ..."
                className="h-10 w-full focus:outline-none px-5 border border-red-800 border-r-0 rounded-l-lg placeholder:text-red-400"
              />
              <button className="h-10 w-20 flex items-center justify-center bg-red-900 active:bg-red-700 rounded-r-lg">
                <Search color="white" size={24} />
              </button>
            </div>
          </div>
        }
      />

      <div className="overflow-x-auto">
        <table className="data-table mx-auto">
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
          {data.map((row, idx) => (
            <tbody key={idx}>
              <tr>
                <CheckRow />
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
                    <ActionButton
                      value={row.id}
                      content={<Search size={20} />}
                      //   onClick={this.getDetail}
                    />
                    <ActionButton content={<Delete size={20} />} />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
          <tbody>
            <tr>
              <td />
              <Footer colspan={8} />
            </tr>
          </tbody>
        </table>
      </div>

      <Container
        content={
          <div className="flex flex-row items-center justify-center py-4">
            <button
              className="text-gray-800 cursor-default"
              value={pageInfo.prevPage}
              //   onClick={this.changePage}
            >
              <Back size={24} />
            </button>
            <p>{pageInfo.currentPage}</p>
            <button
              className="text-red-800 active:text-red-900"
              value={pageInfo.nextPage}
              //   onClick={changePage}
            >
              <Forward size={24} />
            </button>
          </div>
        }
      />

      {/* <Container
        content={
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:space-x-2 space-y-1 sm:space-y-0">
            <ActionButton content={"Unduh Data"} />
            <ActionButton content={"Unggah Data"} />
            <Link to="/data/add">
              <ActionButton content={"Tambah Data"} />
            </Link>
          </div>
        }
      /> */}
    </section>
  );
};

const mapDispatchToProps = {
  authOff,
  getData,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  data: state.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(DataFunc);
