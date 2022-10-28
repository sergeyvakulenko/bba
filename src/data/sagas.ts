import { all, fork } from "redux-saga/effects";
import postsSagas from "./posts/sagas";
import commentsSagas from "./comments/sagas";
import tagsSagas from "./tags/sagas";

export function* rootSaga() {
  yield all(
    [
      ...postsSagas,
      ...commentsSagas,
      ...tagsSagas,
    ].map((t) => fork(t))
  );
}
