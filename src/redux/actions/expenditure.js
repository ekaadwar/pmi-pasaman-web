import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const addExpenditure =
  (formData, token, history) => async (dispatch) => {
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
        type: "EXPENDITURE_ADD",
        payload: data.message,
      });
      window.alert(data.message);
      // history.push("/");
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "ERR_EXPENDITURE_ADD",
        payload: err.response.data.message,
      });
    }
  };

export const getExpenditure =
  (token = null) =>
  async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/expenditure`);
      dispatch({
        type: "EXPENDITURE_GET",
        payload: data,
      });
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "ERR_EXPENDITURE_GET",
        payload: err.response.data.message,
      });
    }
  };
