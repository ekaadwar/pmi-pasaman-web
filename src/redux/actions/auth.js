import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const authSignUp = (formData) => {
  return async (dispatch) => {
    const form = new URLSearchParams();

    form.append("nama", formData.name);
    form.append("noHp", formData.noHp);
    form.append("email", formData.email);
    form.append("password", formData.password);

    try {
      const { data } = await http().post(`${URL}/auth/signup`, form.toString());
      dispatch({
        type: "AUTH_REGISTER",
        payload: data.message,
      });

      formData.navigate("/signin");
      window.alert(data.message);
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };
};
