/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const addUser = (formData, token, history) => {
  return async (dispatch) => {
    const form = new URLSearchParams();

    form.append("nama", formData.nama);
    form.append("email", formData.email);
    form.append("no_hp", formData.no_hp);
    form.append("password", formData.password);
    form.append("alamat", formData.alamat);
    form.append("umur", formData.umur);
    form.append("pekerjaan", formData.pekerjaan);
    form.append("jenis_kelamin", formData.gender);
    form.append("golDarah", formData.gol_darah);

    try {
      const { data } = await http(token).post(`${URL}/users`, form.toString());
      dispatch({
        type: "DATA_ADD",
        payload: data.message,
      });

      history.push("/data");
      window.alert(data.message);
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };
};

export const getData =
  (token = null, targetPage = "", params = {}) =>
  async (dispatch) => {
    let initialUrl;

    if (targetPage !== "") {
      initialUrl = `${targetPage}&limit=20`;
    } else {
      initialUrl = `${URL}/users?limit=20`;
    }

    let url = initialUrl;

    const paramKeys = Object.keys(params);
    const paramValues = Object.values(params);
    const paramLength = paramKeys.length;

    if (paramLength > 0) {
      for (let i = 0; i < paramLength; i++) {
        url += `&${paramKeys[i]}=${paramValues[i]}`;
      }
    }

    try {
      const { data } = await http(token).get(url);
      dispatch({
        type: "DATA_GET",
        payload: data,
      });
    } catch (err) {
      window.alert(err.response.data.message);
      console.log("action");
      console.log(paramKeys);
    }
  };

export const getDetails = (id, token, history = null) => {
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
      if (history) {
        history.push(`/data/${id}`);
      }
    } catch (err) {
      window.alert(err.response.data.message);
      dispatch({
        type: "ERR_DETAIL_DATA_GET",
        payload: err.response.data.message,
      });
      console.log(err);
    }
  };
};

export const updateUser = (id, token, key, value, file = null) => {
  return async (dispatch) => {
    console.log(`id : ${id}, token : ${token}`);
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
      const { data } = await http(token).patch(`${URL}/users/${id}`, formData);
      dispatch({
        type: "USER_UPDATE",
        payload: data.message,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
