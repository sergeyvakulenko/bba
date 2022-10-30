import { call, delay, put, select, takeLatest } from "typed-redux-saga";
import { postsSelectors } from ".";
import { IParams } from "../api";
import { commentsActions } from "../comments";
import { ActionTypes, fetchFailure, fetchSuccess } from "./actions";
import { getPosts } from "./api";
import { SetActivePostId } from "./types";

function* processFetchParams() {
  const search = yield* select(postsSelectors.getSearch);
  const authorId = yield* select(postsSelectors.getAuthorId);
  const params: IParams = {};

  if (search) {
    params.q = search;
  }

  if (authorId) {
    params["user.id"] = authorId;
  }

  return params;
}

function* fetchPosts() {
  try {
    yield delay(500); // To emulate network
    const params = yield* processFetchParams();
    const response = yield* call(getPosts, params);
    yield put(fetchSuccess({ posts: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: "Something went wrong" }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e);
  }
}

function* setActivePostId(action: SetActivePostId) {
  const {
    payload: { postId },
  } = action;
  if (!!postId) {
    yield put(commentsActions.fetch({ postId }));
  }
}

function* watchFetchPosts() {
  yield takeLatest(
    [
      ActionTypes.FETCH,
      ActionTypes.SET_SEARCH,
      ActionTypes.SET_AUTHOR_ID,
      ActionTypes.SET_PAGE,
    ],
    fetchPosts
  );
}

function* watchSetActivePostId() {
  yield takeLatest(ActionTypes.SET_ACTIVE_ID, setActivePostId);
}

const postSagas = [watchFetchPosts, watchSetActivePostId];

export default postSagas;
