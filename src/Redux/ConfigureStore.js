import { createStore, combineReducers } from "redux";

import { authReducer } from "./Reducers/auth.reducer";
import { userReducer } from "./Reducers/user.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ authReducer, userReducer }),
  );

  return store;
};