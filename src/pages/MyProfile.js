import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
} from "../components/Card";
import { zulaikha } from "../assets";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      token: "",
    };
  }

  componentDidMount() {
    this.props.authOff();
    const { path } = this.props.match;
    console.log(path);
    this.getData();
  }

  getData = () => {
    this.props.getProfile(this.props.auth.token).then((res) => {
      this.setState({
        data: this.props.profile.data,
        token: this.props.auth.token,
      });
    });
  };

  submit = () => {
    const { token } = this.state;
    const prevData = this.props.profile.data;
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

        this.props.updateProfile(token, realKeys[i], realValues[i]).then(() => {
          this.getData();
        });
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
                          <Link to={`/myhistory`} className="w-full">
                            <Button content={<p>Riwayat Donor</p>} />
                          </Link>
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
  authOff,
  getDetails,
  getProfile,
  updateProfile,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
