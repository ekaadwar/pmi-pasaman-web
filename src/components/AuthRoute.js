import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AuthRoute = ({ element, auth, priv = true }) => {
  if (priv !== false) {
    if (auth.token !== null) {
      return <Redirect to="/profile" />
    } else {
      return element
    }
  } else {
    return element
  }
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(AuthRoute)
