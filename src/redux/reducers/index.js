import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import auth from "./auth";

const persistAuth = {
  storage,
  key: "auth",
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
});

export default reducer;
