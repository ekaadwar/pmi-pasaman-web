/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getHistory =
  (token = null, id = null) =>
  async (dispatch) => {
    try {
      const { data } = await http(token).get(
        id ? `${URL}/donor/${id}` : `${URL}/donor`
      );
      dispatch({
        type: "HISTORY_GET",
        payload: data,
      });
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "ERR_HISTORY_GET",
        payload: err.response.data.message,
      });
    }
  };
