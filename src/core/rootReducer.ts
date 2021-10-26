import { combineReducers } from "redux";
import { serialReducer } from "./reducers";

export const rootReducer = combineReducers({
  serial: serialReducer,
});
