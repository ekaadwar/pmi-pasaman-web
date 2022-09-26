/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getData =
  (
    token = null,
    // params = {},
    targetPage = ""
  ) =>
  async (dispatch) => {
    let initialUrl;

    if (targetPage !== "") {
      initialUrl = `${targetPage}&limit=20`;
    } else {
      initialUrl = `${URL}/users?limit=20`;
    }

    let url = initialUrl;

    // const paramKeys = Object.keys(params);
    // const paramValues = Object.values(params);
    // const paramLength = paramKeys.length;

    // if (paramLength > 0) {
    //   if (targetPage === "") {
    //     url += "?";
    //   }

    //   for (let i = 0; i < paramLength; i++) {
    //     if (i > 0) {
    //       url += "&";
    //     }
    //     if (paramKeys[i] === "sort") {
    //       const sortArray = paramValues[i].split("-");
    //       paramKeys[i] = `sort[${sortArray[0]}]`;
    //       paramValues[i] = sortArray[1];
    //     }
    //     url += `${paramKeys[i]}=${paramValues[i]}`;
    //   }
    // }

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
