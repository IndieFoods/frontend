import { createStore, combineReducers } from "redux";

import { authReducer } from "./Reducers/auth.reducer";
import { userReducer } from "./Reducers/user.reducer";
import { chefReducer } from "./Reducers/chef.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ authReducer, userReducer, chefReducer }),
  );

  return store;
};