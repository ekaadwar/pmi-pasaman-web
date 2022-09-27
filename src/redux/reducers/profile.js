const initialState = {
  data: {},
  msg: null,
  errMessage: null,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_GET": {
      return {
        ...state,
        data: action.payload,
        errMessage: null,
      };
    }
    case "ERROR_GET_PROFILE": {
      return {
        ...state,
        errMessage: action.payload,
      };
    }
    case "PROFILE_UPDATE": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default profile;