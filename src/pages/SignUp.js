import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Container from '../components/Container'
import { AuthSection } from '../components/Section'
import { AuthHeader } from '../components/Text'
import { authOn, authSignUp } from '../redux/actions/auth'
import { InputAuth } from '../components/Input'
import { PrimaryButton } from '../components/Button'

const SignUp = (props) => {
  const [name, setName] = useState('')
  const [noHp, setNoHp] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repassword, setRePassword] = React.useState('')

  const navigate = useHistory()

  useEffect(() => {
    props.authOn()
  }, [])

  const submit = () => {
    const data = {
      name,
      noHp,
      email,
      password,
      repassword,
      navigate,
    }
    props.authSignUp(data)
  }

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputAuth
                    label="HP :"
                    placeholder="Masukan nomor handphone Anda"
                    type="number"
                    onChange={(e) => setNoHp(e.target.value)}
                  />
                  <InputAuth
                    label="Email :"
                    placeholder="Masukan email Anda"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputAuth
                    label="Password :"
                    placeholder="Masukan password Anda"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputAuth
                    label="Ulangi Password :"
                    placeholder="Ulangi password Anda"
                    type="password"
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                  <PrimaryButton
                    content={<p className="text-white font-bold">Kirim</p>}
                    onClick={submit}
                  />
                </div>
              </div>
            }
          />
        }
      />
    </section>
  )
}

const mapDispatchToProps = { authSignUp, authOn }

export default connect(null, mapDispatchToProps)(SignUp)
