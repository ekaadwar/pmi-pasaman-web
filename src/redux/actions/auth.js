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
      window.alert(error.message)
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
