const initialState = {
  history: [],
  msg: "",
};

const donor = (state = initialState, action) => {
  switch (action.type) {
    case "HISTORY_GET": {
      return {
        ...state,
        history: action.payload.results,
        msg: action.payload.message,
      };
    }
    case "ERR_HISTORY_GET": {
      return {
        ...state,
        history: [],
        msg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default donor;
