import React from 'react'
import Header from '../sections/Header'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Footer from '../sections/Footer'

const PrivateRoute = ({ element, auth, priv = true }) => {
  if (priv !== false) {
    if (auth.token !== null) {
      return (
        <>
          <Header />
          {element}
          <Footer />
        </>
      )
    } else {
      return <Redirect to="/signin" />
    }
  } else {
    return element
  }
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(PrivateRoute)
