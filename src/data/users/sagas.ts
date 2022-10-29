import { call, delay, put, takeLatest } from "typed-redux-saga";
import {
  ActionTypes,
  fetchFailure,
  fetchSuccess
} from "./actions";
import { getUsers } from "./api";

function* fetchUsers() {
  try {
    yield delay(500); // To emulate network
    const response = yield* call(getUsers);
    yield put(fetchSuccess({ users: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: 'Something went wrong' }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e); 
  }
}

function* watchFetchUsers() {
  yield takeLatest(ActionTypes.FETCH, fetchUsers);
}

const userSagas = [watchFetchUsers];

export default userSagas;
