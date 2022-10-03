import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProfile = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/users/profile`);
    dispatch({
      type: "PROFILE_GET",
      payload: data.results,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "ERROR_GET_PROFILE",
      payload: err.response.data.message,
    });
  }
};

export const updateProfile = (token, key, value, file = null) => {
  return async (dispatch) => {
    console.log(`token : ${token}`);
    console.log("key :");
    console.log(key);
    console.log("value :");
    console.log(value);

    const formData = new FormData();
    if (key !== null) {
      formData.append(key, value);
    }

    if (file !== null) {
      formData.append("photo", file);
      console.log(formData);
    }

    try {
      const { data } = await http(token).patch(`${URL}/users`, formData);
      dispatch({
        type: "PROFILE_UPDATE",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ERR_PROFILE_UPDATE",
        payload: error.response.data.message,
      });
    }
  };
};
