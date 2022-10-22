import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from '../components/Container'
import { AuthSection } from '../components/Section'
import { AuthHeader } from '../components/Text'
import { authOn, authSignUp } from '../redux/actions/auth'
import { InputAuth } from '../components/Input'
import { PrimaryButton } from '../components/Button'
import { ErrAlert } from '../components/Alert'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      noHp: '',
      email: '',
      password: '',
      repassword: '',
      errAlert: '',
    }
  }

  closeAlert = () => {
    this.setState({ errAlert: '' })
  }

  changeValue = (event, setState) => {
    this.setState(setState)
  }

  submit = () => {
    const data = {
      name: this.state.name,
      noHp: this.state.noHp,
      email: this.state.email,
      password: this.state.password,
      repassword: this.state.repassword,
      navigate: this.props.history,
    }

    if (
      data.name &&
      data.noHp &&
      data.email &&
      data.password &&
      data.repassword
    ) {
      if (data.noHp < 0) {
        this.setState({ errAlert: 'Maaf nomor HP yang Anda masukan salah' })
      } else {
        if (data.noHp.toString().length < 10) {
          this.setState({ errAlert: 'Maaf nomor HP yang Anda masukan salah' })
        } else {
          if (data.password.length < 6) {
            this.setState({ errAlert: 'Maaf, password minimal harus 6 digit' })
          } else {
            if (data.password !== data.repassword) {
              this.setState({
                errAlert: 'Maaf, password yang telah Anda masukan tidak sama',
              })
            } else {
              this.setState({ errAlert: '' })
              this.props.authSignUp(data)
            }
          }
        }
      }
    } else {
      this.setState({ errAlert: 'Mohon untuk mengisi semua kolom isian.' })
    }
  }

  render() {
    return (
      <section className="flex flex-col min-h-screen">
        <AuthSection
          signup
          content={
            <Container
              content={
                <div className="flex flex-row justify-center md:justify-end h-full ">
                  <div className="flex flex-col justify-center md:w-1/2 py-10 px-5 lg:px-10 space-y-5">
                    <div className="text-center">
                      <AuthHeader text="Daftar" />
                    </div>
                    <InputAuth
                      label="Nama :"
                      placeholder="Masukan nama lengkap Anda"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <InputAuth
                      label="HP :"
                      placeholder="Masukan nomor handphone Anda"
                      type="number"
                      value={this.state.noHp}
                      onChange={(e) => this.setState({ noHp: e.target.value })}
                    />
                    <InputAuth
                      label="Email :"
                      placeholder="Masukan email Anda"
                      type="email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <InputAuth
                      label="Password :"
                      placeholder="Masukan password Anda"
                      type="password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <InputAuth
                      label="Ulangi Password :"
                      placeholder="Ulangi password Anda"
                      type="password"
                      value={this.state.repassword}
                      onChange={(e) =>
                        this.setState({ repassword: e.target.value })
                      }
                    />
                    <PrimaryButton
                      content={<p className="text-white font-bold">Kirim</p>}
                      onClick={this.submit}
                    />
                    {this.state.errAlert && (
                      <ErrAlert
                        text={this.state.errAlert}
                        onClick={this.closeAlert}
                      />
                    )}
                  </div>
                </div>
              }
            />
          }
        />
      </section>
    )
  }
}

const mapDispatchToProps = { authSignUp, authOn }

export default connect(null, mapDispatchToProps)(SignUp)
