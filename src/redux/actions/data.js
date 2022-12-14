/* eslint-disable no-undef */
import http from '../../helpers/http'
import { typeDeConverter } from '../../helpers/bloodConverter'

const { REACT_APP_BACKEND_URL: URL } = process.env

// ---------- create ----------
// ---------- create ----------
// ---------- create ----------

export const addUser = (formData, token, history) => {
  return async (dispatch) => {
    const form = new URLSearchParams()

    form.append('nama', formData.nama)
    form.append('email', formData.email)
    form.append('no_hp', formData.noHp)
    form.append('password', formData.password)
    form.append('alamat', formData.alamat)
    form.append('tanggalLahir', formData.tanggalLahir)
    form.append('pekerjaan', formData.pekerjaan)
    form.append('jenis_kelamin', formData.gender)
    form.append('gol_darah', formData.golDarah)

    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const { data } = await http(token).post(`${URL}/users`, form.toString())
      dispatch({
        type: 'DATA_ADD',
        payload: data.message,
      })

      history.push('/data')
      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(data.message)
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false })
      window.alert(error.response.data.message)
    }
  }
}

// ---------- read ----------
// ---------- read ----------
// ---------- read ----------

export const getData =
  (token = null, targetPage = '', params = {}) =>
  async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    let initialUrl

    if (targetPage !== '') {
      initialUrl = `${targetPage}&limit=20`
    } else {
      initialUrl = `${URL}/users?limit=20`
    }

    let url = initialUrl

    const paramKeys = Object.keys(params)
    const paramValues = Object.values(params)
    const paramLength = paramKeys.length

    if (paramLength > 0) {
      for (let i = 0; i < paramLength; i++) {
        if (paramKeys[i] === 'sort') {
          const sort = paramValues[i].split('-')
          url += `&sort[${sort[0]}]=${sort[1]}`
        } else if (paramKeys[i] === 'blood') {
          const value = typeDeConverter(paramValues[i])
          url += `&${paramKeys[i]}=${value}`
        } else {
          url += `&${paramKeys[i]}=${paramValues[i]}`
        }
      }
    }
    try {
      const { data } = await http(token).get(url)

      dispatch({
        type: 'DATA_GET',
        payload: data,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (err) {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

export const getDetails = (id, token, history = null) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const { data } = await http(token).get(`${URL}/users/${id}`)
      dispatch({
        type: 'DETAIL_DATA_GET',
        payload: {
          detail: data.results,
          msg: data.message,
        },
      })
      dispatch({ type: 'SET_LOADING', payload: false })
      if (history) {
        history.push(`/data/${id}`)
      }
    } catch (err) {
      window.alert(err.response.data.message)
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
}

// ---------- update ----------
// ---------- update ----------
// ---------- update ----------

export const updateUser = (id, token, key, value, file = null) => {
  return async (dispatch) => {
    const formData = new FormData()
    if (key !== null) {
      formData.append(key, value)
    }

    if (file !== null) {
      formData.append('photo', file)
    }

    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const { data } = await http(token).patch(`${URL}/users/${id}`, formData)
      dispatch({
        type: 'USER_UPDATE',
        payload: data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (error) {
      window.alert(error.response.data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
}

// ---------- delete ----------
// ---------- delete ----------
// ---------- delete ----------

export const deleteUser = (id, token) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const { data } = await http(token).delete(`${URL}/users/${id}`)
      dispatch({
        type: 'USER_DELETE',
        payload: data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (error) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.message,
      })
      window.alert(err.response.data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
}
