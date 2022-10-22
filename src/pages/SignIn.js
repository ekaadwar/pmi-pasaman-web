import React, { Component } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { AuthSection } from '../components/Section'
import { AuthHeader } from '../components/Text'
import { InputAuth } from '../components/Input'
import { PrimaryButton } from '../components/Button'
import { connect } from 'react-redux'
import { authSignin, authOn } from '../redux/actions/auth'

import { ErrAlert } from '../components/Alert'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
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
      email: this.state.email,
      password: this.state.password,
      navigate: this.props.history,
    }

    if (data.email && data.password) {
      this.setState({ errAlert: '' })
      this.props.authSignin(data)
    } else {
      this.setState({ errAlert: 'Mohon untuk mengisi semua kolom isian.' })
    }
  }

  render() {
    return (
      <section className="flex flex-col min-h-screen">
        <AuthSection
          content={
            <Container
              content={
                <div className="flex flex-row justify-center md:justify-end h-full ">
                  <div className="flex flex-col justify-center md:w-1/2 py-10 px-5 lg:px-10 space-y-5">
                    <div className="text-center">
                      <AuthHeader text="Masuk" />
                    </div>
                    <InputAuth
                      label="Username :"
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
                    <div>
                      <Link to="/forgot-pass">
                        <p>Anda lupa password?</p>
                      </Link>
                    </div>
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

const mapDispatchToProps = {
  authSignin,
  authOn,
}

export default connect(null, mapDispatchToProps)(SignIn)
