const initialState = {
  data: [],
  msg: "",
};

const stock = (state = initialState, action) => {
  switch (action.type) {
    case "STOCK_GET": {
      return {
        ...state,
        data: action.payload.results,
        msg: action.payload.message,
      };
    }
    case "ERR_STOCK_GET": {
      return {
        ...state,
        data: [],
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

export default stock;
