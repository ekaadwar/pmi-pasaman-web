import React from 'react'
import { AuthHeader } from '../components/Text'
import { InputReset as Input } from '../components/Input'
import { PrimaryButton } from '../components/Button'
import { ErrAlert } from '../components/Alert'
import { connect } from 'react-redux'
import { updatePassword } from '../redux/actions/profile'

class UpdatePass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      newPassword: '',
      rePassword: '',
      valPassword: '',
      valNewPassword: '',
      valRePassword: '',
      errMessage: '',
      errVisibility: false,
    }
  }

  changePassword = (e) => {
    const value = e.target.value
    this.setState({ password: value })
    if (!value) {
      this.setState({ valPassword: 'Password tidak boleh kosong' })
    } else {
      this.setState({ valPassword: '' })
    }
  }

  changeNewPassword = (e) => {
    const value = e.target.value
    this.setState({ newPassword: value })
    if (!value) {
      this.setState({ valNewPassword: 'Password tidak boleh kosong' })
    } else {
      this.setState({ valNewPassword: '' })
    }
  }

  changeRePassword = (e) => {
    const value = e.target.value
    this.setState({ rePassword: value })
    if (!value) {
      this.setState({ valRePassword: 'Password tidak boleh kosong' })
    } else {
      if (value !== this.state.newPassword) {
        this.setState({
          valRePassword: 'Password tidak sama',
          errMessage: 'Password tidak sama',
        })
      } else {
        this.setState({ valRePassword: '', errMessage: '' })
      }
    }
  }

  submit = () => {
    if (
      !this.state.password ||
      !this.state.newPassword ||
      !this.state.rePassword
    ) {
      this.setState({
        errMessage: 'Kolom isian tidak boleh kosong',
        errVisibility: true,
      })
    } else {
      if (!this.state.errMessage) {
        const { password, rePassword, newPassword } = this.state
        const { token } = this.props.auth
        const data = {
          password,
          newPassword,
          rePassword,
          history: this.props.history,
        }
        console.log(this.props.history)

        // console.log(data)
        this.props.updatePassword(token, data)
      } else {
        this.setState({ errVisibility: true })
      }
    }
  }

  render() {
    return (
      <section className="profile min-h-screen pt-32 pb-20">
        <div className="w-full max-w-xs space-y-5 mx-auto">
          <div className="text-center text-white">
            <AuthHeader text="Ganti Password" />
          </div>

          <div className="w-full">
            <Input
              label="Password :"
              type="password"
              placeholder="Masukan password lama Anda"
              value={this.password}
              onChange={this.changePassword}
            />
            <p className="text-red-700 text-shadow text-sm">
              {this.state.valPassword}
            </p>
          </div>

          <div className="w-full">
            <Input
              label="Password Baru :"
              type="password"
              placeholder="Masukan password baru Anda"
              value={this.newPassword}
              onChange={this.changeNewPassword}
            />
            <p className="text-red-700 text-shadow text-sm">
              {this.state.valNewPassword}
            </p>
          </div>

          <div>
            <Input
              label="Ulangi Password :"
              type="password"
              placeholder="Ulangi password baru Anda"
              value={this.rePassword}
              onChange={this.changeRePassword}
            />
            <p className="text-red-700 text-shadow text-sm">
              {this.state.valRePassword}
            </p>
          </div>

          <PrimaryButton
            content={<p className="text-white font-bold">Kirim</p>}
            onClick={this.submit}
          />

          {this.state.errVisibility && (
            <ErrAlert
              text={this.state.errMessage}
              onClick={() => this.setState({ errVisibility: false })}
            />
          )}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  updatePassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePass)
