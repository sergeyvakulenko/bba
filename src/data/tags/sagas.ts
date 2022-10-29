import { call, delay, put, takeEvery, takeLatest } from "typed-redux-saga";
import {
  ActionTypes,
  createFailure,
  createSuccess,
  fetchFailure,
  fetchSuccess
} from "./actions";
import { getTags, createTag } from "./api";
import { CreateTagRequest } from "./types";

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

function* create(action: CreateTagRequest) {
  try {
    yield delay(500); // To emulate network
    const { payload: { value, commentId } } = action;
    const response = yield* call(createTag, { value, commentId });
    yield put(createSuccess({ tag: response.data }));
  } catch (e) {
    yield put(createFailure({ error: 'Something went wrong' }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e); 
  }
}

function* watchCreateTag() {
  yield takeEvery(ActionTypes.CREATE, create);
}

function* watchFetchTags() {
  yield takeLatest(ActionTypes.FETCH, fetchTags);
}

const tagSagas = [watchFetchTags, watchCreateTag];

export default tagSagas;
