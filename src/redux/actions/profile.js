/* eslint-disable no-undef */
import http from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getProfile = (token) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const { data } = await http(token).get(`${URL}/users/profile`)
    dispatch({
      type: 'PROFILE_GET',
      payload: data.results,
    })
    dispatch({ type: 'SET_LOADING', payload: false })
  } catch (err) {
    console.log(err)
    dispatch({
      type: 'ERROR_GET_PROFILE',
      payload: err.response.data.message,
    })
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export const updateProfile = (token, key, value, file = null) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const formData = new FormData()
    if (key !== null) {
      formData.append(key, value)
    }

    if (file !== null) {
      formData.append('photo', file)
    }

    try {
      const { data } = await http(token).patch(`${URL}/users`, formData)
      dispatch({
        type: 'PROFILE_UPDATE',
        payload: data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (error) {
      dispatch({
        type: 'ERR_PROFILE_UPDATE',
        payload: error.response.data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
}

export const updatePassword = (token, dataUpdate) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const formData = new URLSearchParams()
    formData.append('password', dataUpdate.password)
    formData.append('newPassword', dataUpdate.newPassword)
    formData.append('rePassword', dataUpdate.newPassword)

    try {
      const { data } = await http(token).post(
        `${URL}/users/update_password`,
        formData.toString()
      )
      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(data.message)
      dataUpdate.history.push('/confirm-pass')
    } catch (error) {
      console.log(error)

      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(error?.response.data.message)
    }
  }
}

export const confirmPassword = (dataConfirm) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const form = new URLSearchParams()
    form.append('pin', dataConfirm.pin)

    try {
      const { data } = await http(dataConfirm.token).patch(
        `${URL}/users/update_password`,
        form.toString()
      )
      dispatch({ type: 'SET_LOADING', payload: false })

      window.alert(data.message)

      dataConfirm.history.push('/profile')
    } catch (error) {
      console.log(error)

      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(error?.response.data.message)
    }
  }
}
