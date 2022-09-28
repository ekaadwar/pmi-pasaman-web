const initialState = {
  data: [],
  pageInfo: {},
  detailData: {},
  msg: "",
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
    case "DETAIL_DATA_GET": {
      return {
        ...state,
        detailData: action.payload.detail,
        msg: action.payload.msg,
      };
    }
    case "ERR_DETAIL_DATA_GET": {
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

export default data;
