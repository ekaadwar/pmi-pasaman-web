/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getStock =
  (token = null) =>
  async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await http(token).get(`${URL}/stock`);
      dispatch({
        type: "STOCK_GET",
        payload: data,
      });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "ERR_STOCK_GET",
        payload: err.response.data.message,
      });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
