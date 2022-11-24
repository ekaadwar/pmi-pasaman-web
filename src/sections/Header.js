import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import {
  RiUser3Fill as Profile,
  RiShutDownLine as SignOut,
} from 'react-icons/ri'

import Container from '../components/Container'
import { authLogout } from '../redux/actions/auth'
import { logoPmi } from '../assets'
import { connect } from 'react-redux'
import { CircleSm } from '../components/Circle'

import { useHistory } from 'react-router-dom'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()

  const logout = () => {
    props.authLogout()
    history.push('/')
  }

  const resLogout = () => {
    logout()
    setIsOpen(false)
  }

  return (
    <header className="fixed z-50 w-full bg-white shadow-md shadow-stone-500/40">
      <Container
        content={
          <div className="flex flex-row justify-between items-center h-20">
            <Link to="/">
              <div className="w-10 h-10">
                <img src={logoPmi} alt="logo PMI Pasaman" />
              </div>
            </Link>

            <div className="lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={() => setIsOpen(!isOpen)}
                color="rgb(127 29 29)"
                size={20}
              />
            </div>

            <div className="hidden lg:flex flex-row justify-center space-x-8">
              <Link to="/about">Tentang Kami</Link>
              <Link to="/stock">Stok Darah</Link>
              <Link to="#">Pelayanan</Link>
              {(props.auth.userId === 1 || props.auth.userId === 2) && (
                <Link to="/data" onClick={() => setIsOpen(false)}>
                  Data
                </Link>
              )}
            </div>

            {props.auth.token === null ? (
              <div className="hidden lg:flex flex-row justify-center space-x-8">
                <Link to="signup">Daftar</Link>
                <p>|</p>
                <Link to="signin">Masuk</Link>
              </div>
            ) : (
              <div className="hidden lg:flex flex-row items-center space-x-4">
                <button onClick={logout}>
                  <SignOut size={20} />
                </button>
                <Link to="/profile">
                  <CircleSm
                    content={
                      props.auth.photo ? (
                        <img src={props.auth.photo} alt="my profile" />
                      ) : (
                        <div className="flex items-center justify-center h-full w-full bg-red-800">
                          <Profile color="white" size={20} />
                        </div>
                      )
                    }
                  />
                </Link>
              </div>
            )}
          </div>
        }
      />

      {isOpen && (
        <div
          id="toggleMenu"
          className=" block lg:hidden bg-gradient-to-b from-white pb-20"
        >
          <Container
            content={
              <div className="container mx-auto px-4 lg:px-10 flex flex-col my-5 space-y-5 items-end pr-3">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link to="#" onClick={() => setIsOpen(false)}>
                  Tentang Kami
                </Link>
                <Link to="/stock" onClick={() => setIsOpen(false)}>
                  Stok Darah
                </Link>
                <Link to="#" onClick={() => setIsOpen(false)}>
                  Pelayan
                </Link>
                <Link to="/data" onClick={() => setIsOpen(false)}>
                  Data
                </Link>

                {!props.auth.token ? (
                  <div className="flex flex-row space-x-3 font-bold">
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      Masuk
                    </Link>
                    <p>|</p>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      Daftar
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-row space-x-3 font-bold">
                    <button onClick={resLogout}>Keluar</button>
                    <p>|</p>
                    <Link to="/profile" onClick={() => setIsOpen(false)}>
                      My Profile
                    </Link>
                  </div>
                )}
              </div>
            }
          />
        </div>
      )}
    </header>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = { authLogout }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
