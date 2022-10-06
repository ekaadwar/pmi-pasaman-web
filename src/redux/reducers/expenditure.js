const initialState = {
  data: [],
  msg: "",
};

const expenditure = (state = initialState, action) => {
  switch (action.type) {
    case "EXPENDITURE_GET": {
      return {
        ...state,
        data: action.payload.results,
        msg: action.payload.message,
      };
    }
    case "ERR_EXPENDITURE_GET": {
      return {
        ...state,
        data: [],
        msg: action.payload,
      };
    }
    case "EXPENDITURE_ADD": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case "ERR_EXPENDITURE_ADD": {
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

export default expenditure;
