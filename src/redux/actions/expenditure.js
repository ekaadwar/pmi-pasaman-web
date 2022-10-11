import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const addExpenditure =
  (formData, token, history) => async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const form = new URLSearchParams();

      form.append("bloodGroup", formData.bloodGroup);
      form.append("amount", formData.amount);
      form.append("receiver", formData.receiver);

      const { data } = await http(token).post(
        `${URL}/expenditure`,
        form.toString()
      );
      dispatch({
        type: "EXPENDITURE_MSG",
        payload: data.message,
      });
      window.alert(data.message);
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "EXPENDITURE_MSG",
        payload: err.response.data.message,
      });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

export const getExpenditure =
  (token = null) =>
  async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await http(token).get(`${URL}/expenditure`);
      dispatch({
        type: "EXPENDITURE_GET",
        payload: data,
      });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "ERR_EXPENDITURE_GET",
        payload: err.response.data.message,
      });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

export const deleteExpenditure = (id, token) => {
  return async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await http(token).patch(
        `${URL}/expenditure/delete/${id}`
      );
      dispatch({
        type: "EXPENDITURE_MSG",
        payload: data.message,
      });
      window.alert(data.message);
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      dispatch({
        type: "EXPENDITURE_MSG",
        payload: err.response.data.message,
      });
      window.alert(err.response.data.message);
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
};
