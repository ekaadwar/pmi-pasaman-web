/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getData =
  (token = null, targetPage = "") =>
  async (dispatch) => {
    let initialUrl;

    if (targetPage !== "") {
      initialUrl = `${targetPage}&limit=20`;
    } else {
      initialUrl = `${URL}/users?limit=20`;
    }

    let url = initialUrl;

    try {
      const { data } = await http(token).get(url);
      dispatch({
        type: "DATA_GET",
        payload: data,
      });
    } catch (err) {
      window.alert(err.response.data.message);
    }
  };

export const getDetails = (id, token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/users/${id}`);
      dispatch({
        type: "DETAIL_DATA_GET",
        payload: {
          detail: data.results,
          msg: data.message,
        },
      });
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "ERR_DETAIL_DATA_GET",
        payload: err.response.data.message,
      });
    }
  };
};
