import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import auth from "./auth";
import data from "./data";
import donor from "./donor";
import expenditure from "./expenditure";
import profile from "./profile";
import stock from "./stock";

const persistAuth = {
  storage,
  key: "auth",
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  profile,
  data,
  donor,
  expenditure,
  stock,
});

export default reducer;
