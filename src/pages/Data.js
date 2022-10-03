import React from "react";
// import qs from "querystring";
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

import qs from "query-string";
import { SectionHeader } from "../components/Text";
import { connect } from "react-redux";
import { authOff } from "../redux/actions/auth";
import { getData, getDetails } from "../redux/actions/data";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageInfo: {},
      nextPage: `${URL}/items?page=2`,
      prevPage: null,
      token: "",
      params: {},
    };
  }

  componentDidMount() {
    this.props.authOff();
    const { token } = this.props.auth;
    let params = {};
    console.log("mounting");
    if (this.props.location.search) {
      params = this.parseQuery(this.props.location.search);
      console.log(params);
    }
    this.props.getData(token, "", params).then(() => {
      this.setState({
        data: this.props.data.data,
        pageInfo: this.props.data.pageInfo,
        token: this.props.auth.token,
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { token } = this.props.auth;
    const { params } = this.state;

    if (prevProps.location.search !== this.props.location.search) {
      this.props.getData(token, "", params).then(() => {
        this.setState({
          items: this.props.data.data,
          pageInfo: this.props.data.pageInfo,
          params,
        });
      });
    }
  }

  parseQuery = (str) => {
    return qs.parse(str.slice("1"));
  };

  getDetail = (event) => {
    const id = event.currentTarget.value;
    this.props.getDetails(id, this.props.auth.token, this.props.history);
  };

  changePage = (event) => {
    this.props.getData(this.props.auth.token, event.currentTarget.value);
  };

  onSearch = (event) => {
    if (event.keyCode === 13) {
      this.search();
    }
  };

  search = () => {
    const { params } = this.state;
    let url = this.getUrl(params);
    this.props.history.push(url);
  };

  getUrl = (params = {}) => {
    let url = "/data";

    let paramKeys = Object.keys(params);
    const paramLength = paramKeys.length;

    if (paramLength > 0) {
      url += "?";
      let paramValues = Object.values(params);
      for (let i = 0; i < paramLength; i++) {
        if (i > 0) {
          url += "&";
        }
        if (paramKeys[i] === "sort") {
          const splitSort = paramValues[i].split("-");
          paramKeys[i] = `sort[${splitSort[0]}]`;
          paramValues[i] = splitSort[1];
        }
        url += `${paramKeys[i]}=${paramValues[i]}`;
      }
    }

    return url;
  };

  render() {
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
                  className="h-10 w-full focus:outline-none px-5 border border-red-800 border-r-0 rounded-l-lg placeholder:text-red-400"
                  placeholder="Cari ..."
                  value={
                    this.state.params.search ? this.state.params.search : ""
                  }
                  onChange={(event) =>
                    this.setState((prevState) => ({
                      params: {
                        ...prevState.params,
                        search: event.target.value,
                      },
                    }))
                  }
                  onKeyDown={this.onSearch}
                />
                <button
                  className="h-10 w-20 flex items-center justify-center bg-red-900 active:bg-red-700 rounded-r-lg"
                  onClick={() => this.search()}
                >
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
            {this.props.data.data.map((row, idx) => (
              <tbody key={idx}>
                <tr>
                  <CheckRow />
                  {Object.values(row).map((item, id) => (
                    <TableData
                      key={id}
                      column={Object.keys(row)[id]}
                      isEven={idx % 2 === 0 && true}
                      text={
                        Object.keys(row)[id] === "id"
                          ? (this.props.data.pageInfo.currentPage - 1) * 20 +
                            (idx + 1)
                          : item
                      }
                    />
                  ))}
                  <td>
                    <div className="flex flex-row w-full space-x-2 items-center justify-center">
                      <ActionButton
                        value={row.id}
                        content={<Search size={20} />}
                        onClick={this.getDetail}
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
                value={this.state.pageInfo.prevPage}
                onClick={this.changePage}
              >
                <Back size={24} />
              </button>
              <p>{this.props.data.pageInfo.currentPage}</p>
              <button
                className="text-red-800 active:text-red-900"
                value={this.state.pageInfo.nextPage}
                onClick={this.changePage}
              >
                <Forward size={24} />
              </button>
            </div>
          }
        />

        <Container
          content={
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:space-x-2 space-y-1 sm:space-y-0">
              <ActionButton content={"Unduh Data"} />
              <ActionButton content={"Unggah Data"} />
              <Link to="/data/add">
                <ActionButton content={"Tambah Data"} />
              </Link>
            </div>
          }
        />
      </section>
    );
  }
}

const mapDispatchToProps = {
  authOff,
  getData,
  getDetails,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  data: state.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);
