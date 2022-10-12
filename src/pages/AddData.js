import React from 'react'

import Container from '../components/Container'
import { addUser } from '../redux/actions/data'
import { CircleButton } from '../components/Button'
import { InputArea, InputProfile } from '../components/Input'
import { ProfileCard } from '../components/Card'
import { connect } from 'react-redux'

class AddData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nama: '',
      password: '',
      noHp: '',
      email: '',
      umur: '',
      gender: '',
      golDarah: '',
      pekerjaan: '',
      alamat: '',
    }
  }

  submit = () => {
    const token = this.props.auth.token
    const history = this.props.history
    this.props.addUser(this.state, token, history)
  }
  render() {
    return (
      <section className="profile pt-32 pb-20">
        <Container
          content={
            <div className="flex flex-row justify-center">
              <div className="max-w-3xl">
                <ProfileCard
                  content={
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="sm:col-span-2 flex flex-row justify-between items-center">
                        <p className="font-bold text-2xl pt-5 pr-5 text-gray-800">
                          Tambah Data Pendonor
                        </p>
                        <CircleButton
                          onClick={this.submit}
                          content={<p className="text-4xl text-white">+</p>}
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="Nama :"
                          value={this.state.nama}
                          onChange={(e) =>
                            this.setState({ nama: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="Umur"
                          value={this.state.umur}
                          type="number"
                          onChange={(e) =>
                            this.setState({ umur: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="No. HP"
                          value={this.state.noHp}
                          type="number"
                          onChange={(e) =>
                            this.setState({ noHp: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="Jenis Kelamin"
                          value={this.state.gender}
                          onChange={(e) =>
                            this.setState({ gender: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="Email"
                          value={this.state.email}
                          type="email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="Golongan Darah"
                          value={this.state.golDarah}
                          onChange={(e) =>
                            this.setState({ golDarah: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="Password"
                          value={this.state.password}
                          type="password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <InputProfile
                          label="Pekerjaan"
                          value={this.state.pekerjaan}
                          onChange={(e) =>
                            this.setState({ pekerjaan: e.target.value })
                          }
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <InputArea
                          label="Alamat"
                          value={this.state.alamat}
                          onChange={(e) =>
                            this.setState({ alamat: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  }
                />
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
  data: state.data,
})

const mapDispatchToProps = {
  addUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddData)
