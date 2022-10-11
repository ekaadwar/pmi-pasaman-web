import React from "react";
import { connect } from "react-redux";

import Container from "../components/Container";
import { authOff } from "../redux/actions/auth";
import { ActionButtonGray as Button } from "../components/Button";
import { CircleButton } from "../components/Button";
import { CircleMd } from "../components/Circle";
import { FiEdit2 as Edit } from "react-icons/fi";
import { getDetails, updateUser } from "../redux/actions/data";
import { getProfile, updateProfile } from "../redux/actions/profile";
import { InputArea, InputProfile } from "../components/Input";
import {
  ProfileCardFullHeight as MainCard,
  ProfileCard,
  PureCard,
} from "../components/Card";
import { zulaikha } from "../assets";
import { addDonor } from "../redux/actions/donor";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      token: "",
      location: "",
      isDonor: false,
    };
  }

  componentDidMount() {
    this.props.authOff();
    const id = this.props.match.params.id;
    console.log(id);
    this.setState({
      data: this.props.data.detailData,
      token: this.props.auth.token,
    });
  }

  getData = (id) => {
    this.props.getDetails(id, this.state.token).then(() => {
      this.setState({
        data: this.props.data.detailData,
      });
    });
  };

  submit = () => {
    const { token } = this.state;
    const id = this.props.match.params.id;
    const { path } = this.props.match;
    const prevData = this.props.data.detailData;
    const prevKeys = Object.keys(prevData);
    const prevValues = Object.values(prevData);
    const realKeys = Object.keys(this.state.data);
    const realValues = Object.values(this.state.data);
    const length = prevKeys.length;

    let keys = "";

    for (let i = 0; i < length; i++) {
      if (prevValues[i] !== realValues[i]) {
        if (keys !== "") {
          keys += ", ";
        }
        keys += `${prevKeys[i]}`;

        if (path === "/profile") {
          this.props
            .updateProfile(token, realKeys[i], realValues[i])
            .then(() => {
              this.props.getProfile(token).then(() => {
                console.log("getProfile");
              });
            });
        } else {
          this.props
            .updateUser(id, token, realKeys[i], realValues[i])
            .then(() => {
              this.getData(id);
            });
        }
      }
    }

    if (keys !== "") {
      window.alert(`${keys} have been updated`);
    }
  };

  getDate = (strDate) => {
    const type = typeof strDate;
    if (type === "string") {
      const date = strDate.slice(0, 10).split("-");
      let month;

      switch (Number(date[1])) {
        case 1:
          month = "Januari";
          break;
        case 2:
          month = "Februari";
          break;
        case 3:
          month = "Maret";
          break;
        case 4:
          month = "April";
          break;
        case 5:
          month = "Mey";
          break;
        case 6:
          month = "Juni";
          break;
        case 7:
          month = "Juli";
          break;
        case 8:
          month = "Agustus";
          break;
        case 9:
          month = "September";
          break;
        case 10:
          month = "Oktober";
          break;
        case 11:
          month = "November";
          break;
        case 12:
          month = "Desember";
          break;
        default:
          console.log("default");
      }

      const schedule = `${date[2]} ${month} ${date[0]}`;

      return schedule;
    }
  };

  visibilityOn = () => {
    this.setState({ isDonor: true });
  };

  visibilityOff = () => {
    this.setState({ isDonor: false });
  };

  donor = (event) => {
    if (event.keyCode === 13) {
      const donorData = {
        id: this.state.data.id,
        location: this.state.location,
      };
      if (this.state.location === "") {
        window.alert("Anda belum mengisi lokasi kegiatan donor darah.");
      } else {
        this.props.addDonor(donorData, this.state.token);
        this.visibilityOff();
      }
    }
  };

  render() {
    const profile = this.state.data;
    const date = this.getDate(profile.jadwal_donor);
    return (
      <section className="profile min-h-screen pt-32 pb-20">
        <Container
          content={
            <div className="flex justify-center">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-2 md:gap-10 max-w-md w-full sm:max-w-none">
                <div className="h-full">
                  <MainCard
                    content={
                      <div className="h-full flex flex-col">
                        <div className="flex-1 flex flex-col items-center space-y-2">
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
                              <CircleButton content={<Edit color="white" />} />
                            </div>
                          </div>
                          <p className="font-bold text-xl pt-5">
                            {profile.nama}
                          </p>
                          <p className="text-sm text-gray-500">
                            {profile.email}
                          </p>
                          {profile.umur && <p>{profile.umur} Tahun</p>}
                        </div>

                        <div className="w-full text-sm">
                          <div className="flex flex-row justify-between">
                            <p>Golongan Darah :</p>
                            <p className="font-bold uppercase">
                              {profile.gol_darah}
                            </p>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p>Total Donor :</p>
                            <p className="font-bold uppercase">
                              {profile.jumlah_donor}
                            </p>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p>Jadwal Donor :</p>
                            <p className="font-bold Capitalize">{date}</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-stretch space-y-1 pt-4">
                          <Button
                            onClick={this.visibilityOn}
                            content={<p>Donor</p>}
                          />
                          <Button
                            onClick={() =>
                              this.props.history.push(
                                `/history/${this.state.data.id}`
                              )
                            }
                            content={<p>Riwayat Donor</p>}
                          />
                        </div>
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
                          <CircleButton
                            onClick={this.submit}
                            content={<Edit color="white" />}
                          />
                        </div>

                        <div>
                          <InputProfile
                            label="Name"
                            value={profile.nama ? profile.nama : ""}
                            placeholder="Masukan nama Anda"
                            onChange={(event) =>
                              this.setState((prevState) => ({
                                data: {
                                  ...prevState.data,
                                  nama: event.target.value,
                                },
                              }))
                            }
                          />
                        </div>

                        <div>
                          <InputProfile
                            label="Tanggal Lahir"
                            type="date"
                            value={
                              profile.tanggal_lahir ? profile.tanggal_lahir : ""
                            }
                            // value={"2018-07-22"}
                            onChange={(event) =>
                              this.setState((prevState) => ({
                                data: {
                                  ...prevState.data,
                                  tanggal_lahir: event.target.value,
                                },
                              }))
                            }
                          />
                        </div>

                        <div>
                          <InputProfile
                            label="Email"
                            value={profile.email ? profile.email : ""}
                            onChange={(event) =>
                              this.setState((prevState) => ({
                                data: {
                                  ...prevState.data,
                                  email: event.target.value,
                                },
                              }))
                            }
                          />
                        </div>

                        <div>
                          <InputProfile
                            label="Pekerjaan"
                            value={profile.pekerjaan ? profile.pekerjaan : ""}
                            onChange={(event) =>
                              this.setState((prevState) => ({
                                data: {
                                  ...prevState.data,
                                  pekerjaan: event.target.value,
                                },
                              }))
                            }
                          />
                        </div>

                        <div>
                          <InputProfile
                            label="No. HP"
                            value={profile.no_hp}
                            onChange={(event) =>
                              this.setState((prevState) => ({
                                data: {
                                  ...prevState.data,
                                  no_hp: event.target.value,
                                },
                              }))
                            }
                          />
                        </div>

                        <div>
                          <InputProfile
                            label="Golongan Darah"
                            value={profile.gol_darah ? profile.gol_darah : ""}
                            onChange={(event) =>
                              this.setState((prevState) => ({
                                data: {
                                  ...prevState.data,
                                  gol_darah: event.target.value,
                                },
                              }))
                            }
                          />
                        </div>

                        <div className="lg:col-span-2">
                          <InputArea
                            label="Alamat"
                            value={profile.alamat ? profile.alamat : ""}
                            onChange={(event) =>
                              this.setState((prevState) => ({
                                data: {
                                  ...prevState.data,
                                  alamat: event.target.value,
                                },
                              }))
                            }
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          }
        />

        {this.state.isDonor && (
          <div className="fixed z-50 top-0 w-full h-full flex items-center justify-center">
            <div
              onClick={this.visibilityOff}
              className="absolute transparent-black-80 h-screen w-full"
            />
            <div className="z-50">
              <PureCard
                content={
                  <div>
                    <p className="text-gray-700 text-sm">Lokasi Kegiatan:</p>
                    <input
                      className="py-2 focus:outline-none border-b border-gray-500"
                      placeholder="silakan ketik disini"
                      onKeyDown={this.donor}
                      value={this.state.location}
                      onChange={(event) =>
                        this.setState({ location: event.target.value })
                      }
                    />
                  </div>
                }
              />
            </div>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  data: state.data,
  profile: state.profile,
});

const mapDispatchToProps = {
  addDonor,
  authOff,
  getDetails,
  getProfile,
  updateProfile,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
