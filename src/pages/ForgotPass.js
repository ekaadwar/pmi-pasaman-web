import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { SectionHeader } from '../components/Text'
import { authOn } from '../redux/actions/auth'
import { logoPmi } from '../assets'

class ForgotPass extends React.Component {
  componentDidMount() {
    this.props.authOn()
  }
  render() {
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
          />
          <button className="bg-red-900 rounded-r-lg active:bg-red-700 h-16">
            Kirim
          </button>
        </div>
        <p className="text-center">
          Kami akan segera mengirim link ke alamat email Anda.
        </p>
      </section>
    )
  }
}

const mapDispatchToProps = { authOn }

export default connect(null, mapDispatchToProps)(ForgotPass)
