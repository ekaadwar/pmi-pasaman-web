import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Container from "../../components/Container";
import { authOff } from "../../redux/actions/auth";
import { CircleButton } from "../../components/Button";
import { CircleMd } from "../../components/Circle";
// import { donorHistory } from "../../dummy";
import { FiEdit2 as Edit } from "react-icons/fi";
import { getProfile } from "../../redux/actions/profile";
import { InputArea, InputProfile } from "../../components/Input";
import { ProfileCard } from "../../components/Card";
import { zulaikha } from "../../assets";
// import DonorHistory from "../../components/DonorHistory";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      currentPhoto: null,
    };
  }

  componentDidMount() {
    this.props.authOff();
    console.log("prop");
    console.log(this.props);
    this.props.getProfile(this.props.auth.token).then((res) => {
      this.setState({ data: this.props.profile.data });
      // console.log(this.props.profile.data);
    });
  }

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

  render() {
    const profile = this.state.data;
    console.log(profile);
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
                        <p className="font-bold text-xl pt-5">{profile.nama}</p>
                        <p className="text-sm text-gray-500">{profile.email}</p>
                        <p>{profile.umur} Tahun</p>
                        <p className="font-bold text-xl uppercase">
                          {profile.gol_darah}
                        </p>
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
                            value={
                              profile.tanggal_lahir ? profile.tanggal_lahir : ""
                            }
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
                            value={profile.no_hp ? profile.no_hp : ""}
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
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = { authOff, getProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
