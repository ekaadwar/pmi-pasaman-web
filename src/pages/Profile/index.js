import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import { authOff } from '../../redux/actions/auth'
import { CircleButton } from '../../components/Button'
import { CircleMd } from '../../components/Circle'
// import { donorHistory } from "../../dummy";
import { FiEdit2 as Edit } from 'react-icons/fi'
import { getProfile } from '../../redux/actions/profile'
import { InputArea, InputProfile } from '../../components/Input'
import { ProfileCard } from '../../components/Card'
import { zulaikha } from '../../assets'
// import DonorHistory from "../../components/DonorHistory";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      currentPhoto: null,
    }
  }

  componentDidMount() {
    this.props.authOff()
    console.log(this.props.match)
    this.props.getProfile(this.props.auth.token).then((res) => {
      this.setState({ data: this.props.profile.data })
    })
  }

  render() {
    const profile = this.state.data
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
                            value={profile.nama ? profile.nama : ''}
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
                              profile.tanggal_lahir ? profile.tanggal_lahir : ''
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
                            value={profile.email ? profile.email : ''}
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
                            value={profile.pekerjaan ? profile.pekerjaan : ''}
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
                            value={profile.no_hp ? profile.no_hp : ''}
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
                            value={profile.gol_darah ? profile.gol_darah : ''}
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
                            value={profile.alamat ? profile.alamat : ''}
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
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

const mapDispatchToProps = { authOff, getProfile }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
