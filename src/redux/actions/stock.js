/* eslint-disable no-undef */
import http from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

// ----- read -----

export const getStock = () => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  try {
    const { data } = await http().get(`${URL}/stock`)
    dispatch({
      type: 'STOCK_GET',
      payload: data,
    })
    dispatch({ type: 'SET_LOADING', payload: false })
  } catch (err) {
    window.alert(err.response.data.message)
    dispatch({
      type: 'ERR_STOCK_GET',
      payload: err.response.data.message,
    })
    dispatch({ type: 'SET_LOADING', payload: false })
  }
}

// ----- update -----

export const updateStock =
  (data, token = null) =>
  async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const form = new URLSearchParams()
    for (let i = 0; i < 4; i++) {
      form.append('bloodGroup', data.bloodGroup[i])
      form.append('income', data.income[i])
      form.append('expenditure', data.expenditure[i])
    }

    try {
      const { data } = await http(token).patch(`${URL}/stock`, form)
      dispatch({
        type: 'STOCK_UPDATE',
        payload: data.message,
      })
      window.alert(data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (err) {
      dispatch({
        type: 'STOCK_ERR',
        payload: err.response.data.message,
      })
      window.alert(err.response.data.message)
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }
