import { call, delay, put, takeLatest } from "typed-redux-saga";
import {
  ActionTypes,
  fetchFailure,
  fetchSuccess
} from "./actions";
import { getComments } from "./api";
import { FetchCommentsRequest } from "./types";

function* fetchComments(action: FetchCommentsRequest) {
  try {
    yield delay(500); // To emulate network
    const postId = action.payload.postId;
    const params = {'_embed': 'tags'};
    const response = yield* call(getComments, postId, params);
    yield put(fetchSuccess({ comments: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: 'Something went wrong' }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e); 
  }
}

function* watchFetchComments() {
  yield takeLatest(ActionTypes.FETCH, fetchComments);
}

const commentsSagas = [watchFetchComments];

export default commentsSagas;
