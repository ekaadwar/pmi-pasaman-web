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

export const getMyHistory =
  (token = null) =>
  async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/donor/my_history`);
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

export const addDonor = (formData, token) => async (dispatch) => {
  try {
    const form = new URLSearchParams();

    form.append("id", formData.id);
    form.append("location", formData.location);

    const { data } = await http(token).post(`${URL}/donor`, form.toString());
    dispatch({
      type: "DONOR_ADD",
      payload: data.message,
    });
    window.alert(data.message);
  } catch (err) {
    window.alert(err.response.data.message);
    dispatch({
      type: "ERR_DONOR",
      payload: err.response.data.message,
    });
  }
};

export const deleteHistDonor = (id, token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).patch(`${URL}/donor/delete/${id}`);
      dispatch({
        type: "HIST_DONOR_DELETE",
        payload: data.message,
      });
      window.alert(data.message);
    } catch (err) {
      dispatch({
        type: "ERR_DONOR",
        payload: err.response.data.message,
      });
      window.alert(err.response.data.message);
    }
  };
};
