import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { logoPmi } from '../assets'
import { AuthHeader } from '../components/Text'
import { InputReset as Input } from '../components/Input'
import { PrimaryButton } from '../components/Button'
import { ErrAlert } from '../components/Alert'

const ResetPass = (props) => {
  const [password, setPassword] = useState('')
  const [valPassword, setValPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [valRePassword, setValRePassword] = useState('')
  const [alert, setAlert] = useState(false)

  const changePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    if (!value) {
      setValPassword('Password tidak boleh kosong')
    } else {
      setValPassword('')
    }
  }

  const changeRePassword = (e) => {
    const value = e.target.value
    setRePassword(value)
    if (value) {
      if (value !== password) {
        setValRePassword('Password tidak sama')
      } else {
        setValRePassword('')
      }
    } else {
      setValRePassword('Password tidak boleh kosong')
    }
  }

  const submit = () => {
    if (password && rePassword) {
      if (valPassword || valRePassword) {
        setAlert(true)
      } else {
        const data = {
          token: props.match.params.token,
          password,
        }
        console.log(data)
      }
    } else {
      setValPassword('Password tidak boleh kosong')
      setValRePassword('Password tidak boleh kosong')
      setAlert(true)
    }
  }

  return (
    <section className="forgotpass-page flex flex-col justify-center items-center h-screen text-white space-y-5 px-5">
      <header className="fixed top-0 z-50 w-full">
        <Container
          content={
            <div className="flex flex-row items-center h-20">
              <Link to="/">
                <div className="w-10 h-10">
                  <img src={logoPmi} alt="logo PMI Pasaman" />
                </div>
              </Link>
            </div>
          }
        />
      </header>

      <div className="w-full max-w-xs space-y-5">
        <div className="text-center">
          <AuthHeader text="Reset Password" />
        </div>

        <div className="w-full">
          <Input
            label="Password Baru :"
            type="password"
            value={password}
            onChange={changePassword}
          />
          <p className="text-red-700 text-shadow text-sm">{valPassword}</p>
        </div>

        <div>
          <Input
            label="Ulangi Password :"
            type="password"
            value={rePassword}
            onChange={changeRePassword}
          />
          <p className="text-red-700 text-shadow text-sm">{valRePassword}</p>
        </div>

        <PrimaryButton
          content={<p className="text-white font-bold">Kirim</p>}
          onClick={submit}
        />

        {alert && (
          <ErrAlert
            text={valPassword ? valPassword : valRePassword}
            onClick={() => setAlert(false)}
          />
        )}
      </div>
    </section>
  )
}

export default connect()(ResetPass)
