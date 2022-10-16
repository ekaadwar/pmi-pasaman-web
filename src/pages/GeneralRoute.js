import React from 'react'
import Header from '../sections/Header'
import { connect } from 'react-redux'
import Footer from '../sections/Footer'

const PrivateRoute = ({ element }) => {
  return (
    <>
      <Header />
      {element}
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(PrivateRoute)
