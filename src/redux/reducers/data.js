const initialState = {
  data: [],
  pageInfo: {},
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_GET": {
      return {
        ...state,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
      };
    }
    case "DATA_GET_NEXT": {
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        pageInfo: action.payload.pageInfo,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default data;
