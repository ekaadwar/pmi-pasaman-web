import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import auth from "./auth";
import data from "./data";
import donor from "./donor";
import profile from "./profile";

const persistAuth = {
  storage,
  key: "auth",
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  profile,
  data,
  donor,
});

export default reducer;
