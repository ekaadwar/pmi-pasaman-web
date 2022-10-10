const initStateGlobal = {
  isLoading: false,
};

export const globalReducer = (state = initStateGlobal, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
