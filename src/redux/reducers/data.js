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
    case "DATA_ADD": {
      return {
        ...state,
        msg: action.payload,
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
    case "USER_ERROR": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case "USER_UPDATE": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case "USER_DELETE": {
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
