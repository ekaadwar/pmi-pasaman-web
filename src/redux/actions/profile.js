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
