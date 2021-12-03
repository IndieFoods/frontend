import { createStore, combineReducers } from "redux";

import { authReducer } from "./Reducers/auth.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ authReducer }),
  );

  return store;
};