/* eslint-disable no-undef */
import http from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const authSignUp = (formData) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const form = new URLSearchParams()
    form.append('nama', formData.name)
    form.append('noHp', formData.noHp)
    form.append('email', formData.email)
    form.append('password', formData.password)

    try {
      const { data } = await http().post(`${URL}/auth/signup`, form.toString())
      dispatch({
        type: 'AUTH_REGISTER',
        payload: data.message,
      })

      formData.navigate.push('/signin')
      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(data.message)
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(error.response.data.message)
    }
  }
}

export const authSignin = (dataForm) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const form = new URLSearchParams()

    form.append('email', dataForm.email)
    form.append('password', dataForm.password)

    try {
      const { data } = await http().post(`${URL}/auth/signin`, form.toString())
      dispatch({
        type: 'AUTH_LOGIN',
        payload: {
          token: data.results.token,
          userId: data.results.userId,
          msg: data.message,
          photo: data.results.photo,
        },
      })
      dataForm.navigate.push('/profile')

      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(data.message)
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(
        error.response.data.message
          ? error.response.data.message
          : error.message
      )
    }
  }
}

export const forgotPassword = (email) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })

    const form = new URLSearchParams()
    form.append('email', email)

    try {
      const { data } = await http().put(
        `${URL}/auth/forgotpassword`,
        form.toString()
      )
      dispatch({
        type: 'AUTH_FORGOT_PASS',
        payload: data.message,
      })
      window.alert(data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (error) {
      window.alert(error.response.data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
}

export const updatePassword = (param) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const formData = new URLSearchParams()
    formData.append('password', param.password)
    try {
      const { data } = await http().patch(
        `${URL}/auth/resetpassword/${param.token}`,
        formData.toString()
      )
      dispatch({
        type: 'USER_UPDATE',
        payload: data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
      param.history.push('/signin')
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.message,
      })
      window.alert(err.response.data.message)

      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
}

export const authOn = () => ({
  type: 'AUTH_ON',
})

export const authOff = () => ({
  type: 'AUTH_OFF',
})

export const authLogout = () => {
  return (dispatch) => {
    dispatch({ type: 'AUTH_CLEAR' })
    dispatch({ type: 'DATA_CLEAR' })
    dispatch({ type: 'DONOR_CLEAR' })
    dispatch({ type: 'EXPENDITURE_CLEAR' })
    dispatch({ type: 'PROFILE_CLEAR' })
  }
}
