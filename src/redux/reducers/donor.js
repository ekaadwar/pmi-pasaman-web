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
    case "HIST_DONOR_DELETE": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case "ERR_DONOR": {
      return {
        ...state,
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
