/* eslint-disable no-undef */
import http from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getHistory =
  (token = null, id = null, url = null) =>
  async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    let defaultUrl
    if (id) {
      defaultUrl = `${URL}/donor/${id}`
    } else if (url) {
      defaultUrl = url
    } else {
      defaultUrl = `${URL}/donor`
    }
    try {
      const { data } = await http(token).get(defaultUrl)
      dispatch({
        type: 'HISTORY_GET',
        payload: {
          results: data.results,
          pageInfo: data.pageInfo,
          message: data.message,
        },
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (err) {
      window.alert(err.response.data.message)
      dispatch({
        type: 'ERR_HISTORY_GET',
        payload: err.response.data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

export const getMyHistory =
  (token = null) =>
  async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const { data } = await http(token).get(`${URL}/donor/my_history`)
      dispatch({
        type: 'HISTORY_GET',
        payload: data,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (err) {
      window.alert(err.response.data.message)
      dispatch({
        type: 'ERR_HISTORY_GET',
        payload: err.response.data.message,
      })
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

export const addDonor = (formData, token) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const form = new URLSearchParams()

    form.append('id', formData.id)
    form.append('location', formData.location)

    const { data } = await http(token).post(`${URL}/donor`, form.toString())
    dispatch({
      type: 'DONOR_ADD',
      payload: data.message,
    })
    window.alert(data.message)
    dispatch({ type: 'SET_LOADING', payload: false })
  } catch (err) {
    window.alert(err.response.data.message)
    dispatch({
      type: 'ERR_DONOR',
      payload: err.response.data.message,
    })
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

export const deleteHistDonor = (id, token) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const { data } = await http(token).patch(`${URL}/donor/delete/${id}`)
      dispatch({
        type: 'HIST_DONOR_DELETE',
        payload: data.message,
      })
      window.alert(data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (err) {
      dispatch({
        type: 'ERR_DONOR',
        payload: err.response.data.message,
      })
      window.alert(err.response.data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
}
