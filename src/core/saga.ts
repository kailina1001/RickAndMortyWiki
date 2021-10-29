import { all } from "redux-saga/effects";
import { serialSaga } from "./sagas";

/* import { authSaga } from "./sagas";
import { postsSaga } from "./sagas/postsSaga"; */

export function* rootSaga() {
  try {
    yield all([serialSaga()]);
  } catch (e) {}
}
