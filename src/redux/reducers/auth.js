const initialState = {
  onAuth: false,
  token: null,
  userId: "",
  msg: "",
  photo: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_TOGGLE": {
      return {
        ...state,
        onAuth: !state.onAuth,
      };
    }
    case "AUTH_LOGIN": {
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        msg: action.payload.message,
        photo: action.payload.photo,
      };
    }
    case "AUTH_LOGIN_FAILED": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case "AUTH_REGISTER": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case "AUTH_LOGOUT": {
      return {
        ...state,
        token: null,
        userId: "",
        msg: "",
      };
    }
    case "AUTH_ON": {
      return {
        ...state,
        onAuth: true,
      };
    }
    case "AUTH_OFF": {
      return {
        ...state,
        onAuth: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
