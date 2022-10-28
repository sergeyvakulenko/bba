import { all, call, put, takeLatest } from "typed-redux-saga";
import {
  ActionTypes,
  fetchFailure,
  fetchSuccess
} from "./actions";
import { getComments } from "./api";
import { FetchCommentsRequest } from "./types";

function* fetchComments(action: FetchCommentsRequest) {
  try {
    const postId = action.payload.postId;
    const response = yield* call(getComments, postId);
    yield put(fetchSuccess({ comments: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: 'Something went wrong' }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e); 
  }
}

function* watchFetchComments() {
  console.log(1);
  yield all([takeLatest(ActionTypes.FETCH, fetchComments)]);
}

const commentsSagas = [watchFetchComments];

export default commentsSagas;
