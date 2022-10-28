import { all, call, put, takeLatest } from "typed-redux-saga";
import {
  ActionTypes,
  fetchFailure,
  fetchSuccess
} from "./actions";
import { getTags } from "./api";

function* fetchTags() {
  try {
    const response = yield* call(getTags);
    yield put(fetchSuccess({ tags: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: 'Something went wrong' }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e); 
  }
}

function* watchFetchTags() {
  yield all([takeLatest(ActionTypes.FETCH, fetchTags)]);
}

const tagSagas = [watchFetchTags];

export default tagSagas;
