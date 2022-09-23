// import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import auth from "./reducers/auth";
import {
  persistStore,
  // persistReducer
} from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";
// import rootReducer from './reducers'

// export default configureStore({
//   reducer: { auth },
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = {
//   auth: persistReducer(persistConfig, auth),
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = () => {
  // const store = createStore(
  //   rootReducer,
  //   composeEnhancers(applyMiddleware(thunk))
  // );
  const store = configureStore({
    reducer: rootReducer,
    // composeEnhancers,
  });

  const persistor = persistStore(store);
  return { store, persistor };
};

export default store;
