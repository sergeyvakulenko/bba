import { call, delay, put, takeEvery, takeLatest } from "typed-redux-saga";
import {
  ActionTypes,
  createFailure,
  createSuccess,
  fetchFailure,
  fetchSuccess,
} from "./actions";
import { createComment, getComments } from "./api";
import { CreateCommentRequest, FetchCommentsRequest } from "./types";

function* fetchComments(action: FetchCommentsRequest) {
  try {
    yield delay(500); // To emulate network
    const postId = action.payload.postId;
    const params = { _embed: "tags" };
    const response = yield* call(getComments, postId, params);
    yield put(fetchSuccess({ comments: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: "Something went wrong" }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e);
  }
}

function* create(action: CreateCommentRequest) {
  try {
    yield delay(500); // To emulate network
    const {
      payload: { comment },
    } = action;
    const response = yield* call(createComment, comment);
    yield put(createSuccess({ comment: response.data }));
  } catch (e) {
    yield put(createFailure({ error: "Something went wrong" }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e);
  }
}

function* watchFetchComments() {
  yield takeLatest(ActionTypes.FETCH, fetchComments);
}

function* watchCreateComment() {
  yield takeEvery(ActionTypes.CREATE, create);
}

const commentsSagas = [watchFetchComments, watchCreateComment];

export default commentsSagas;
