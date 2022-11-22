import React from 'react'
import { AuthHeader } from '../components/Text'
import { InputReset as Input } from '../components/Input'
import { PrimaryButton } from '../components/Button'
import { ErrAlert } from '../components/Alert'
import { connect } from 'react-redux'
import { confirmPassword } from '../redux/actions/profile'

class ConfirmPass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pin: '',
      valPin: '',
      errMessage: '',
      errVisibility: false,
    }
  }

  changePin = (e) => {
    const value = e.target.value
    this.setState({ pin: value })
    if (!value) {
      this.setState({ valPin: 'PIN tidak boleh kosong' })
    } else {
      this.setState({ valPin: '' })
    }
  }

  submit = () => {
    if (!this.state.pin) {
      this.setState({
        errMessage: 'Kolom isian tidak boleh kosong',
        errVisibility: true,
      })
    } else {
      const { pin } = this.state
      const { token } = this.props.auth
      const data = {
        token,
        pin,
        history: this.props.history,
      }
      this.props.confirmPassword(data)
    }
  }

  render() {
    return (
      <section className="profile min-h-screen pt-32 pb-20">
        <div className="w-full max-w-xs space-y-5 mx-auto">
          <div className="text-center text-white">
            <AuthHeader text="Masukan PIN" />
          </div>

          <div className="w-full">
            <Input
              label="PIN :"
              type="password"
              placeholder="Masukan PIN Anda"
              value={this.pin}
              onChange={this.changePin}
            />
            <p className="text-red-700 text-shadow text-sm">
              {this.state.valPin}
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
  confirmPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPass)
