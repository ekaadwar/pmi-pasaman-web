import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { SectionHeader } from '../components/Text'
import { logoPmi } from '../assets'
import { forgotPassword } from '../redux/actions/auth'

const ForgotPass = ({ forgotPassword }) => {
  const [alert, setAlert] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const changePassword = (event) => {
    setForgotEmail(event.target.value)
  }
  const onSubmit = (event) => {
    if (event.keyCode === 13) {
      submit()
    }
  }

  const submit = () => {
    if (!forgotEmail) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000)
    } else {
      forgotPassword(forgotEmail)
      setForgotEmail('')
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
      <SectionHeader text="Anda lupa password?" />
      <p className="text-center">
        Jangan khawatir, kami akan menemukannya kembali.
      </p>

      <div className="grid sm:grid-cols-3 w-full max-w-lg sm:space-x-2 space-y-4 sm:space-y-0">
        <input
          className="focus:outline-none text-gray-700 sm:col-span-2 px-2 h-16  rounded-l-lg"
          placeholder="Masukan email Anda"
          value={forgotEmail}
          onChange={changePassword}
          onKeyDown={onSubmit}
        />
        <button
          onClick={submit}
          className="bg-red-900 rounded-r-lg active:bg-red-700 h-16"
        >
          Kirim
        </button>
      </div>
      {alert && <p className="text-red-500">kolom input tidak boleh kosong</p>}
      <p className="text-center">
        Kami akan segera mengirim link ke alamat email Anda.
      </p>
    </section>
  )
}

const mapDispatchToProps = {
  forgotPassword,
}

export default connect(null, mapDispatchToProps)(ForgotPass)
