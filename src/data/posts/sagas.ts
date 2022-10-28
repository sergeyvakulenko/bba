import { call, put, takeLatest } from "typed-redux-saga";
import { commentsActions } from "../comments";
import {
  ActionTypes,
  fetchFailure,
  fetchSuccess
} from "./actions";
import { getPosts } from "./api";
import { SetActivePostId } from "./types";

function* fetchPosts() {
  try {
    const response = yield* call(getPosts);
    yield put(fetchSuccess({ posts: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: 'Something went wrong' }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e); 
  }
}

function* setActivePostId(action: SetActivePostId) {
    yield put(commentsActions.fetch(action.payload));
}

function* watchFetchPosts() {
  yield takeLatest(ActionTypes.FETCH, fetchPosts);
}

function* watchSetActivePostId() {
  yield takeLatest(ActionTypes.SET_ACTIVE_ID, setActivePostId);
}

const postSagas = [watchFetchPosts, watchSetActivePostId];

export default postSagas;
