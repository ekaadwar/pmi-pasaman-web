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
