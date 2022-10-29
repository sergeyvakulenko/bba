import { call, delay, put, takeLatest } from "typed-redux-saga";
import { IParams } from "../api";
import { commentsActions } from "../comments";
import {
  ActionTypes,
  fetchFailure,
  fetchSuccess
} from "./actions";
import { getPosts } from "./api";
import { FetchPostsRequest, FetchPostsRequestPayload, SetActivePostId } from "./types";

const processFetchParams = (payload: FetchPostsRequestPayload): IParams => {
  const { search, authorId } = payload;
  const params: IParams = {};
  
  if (search) {
    params.q = search;
  }

  if (authorId) {
    params['user.id'] = authorId;
  }
  
  return params;
}

function* fetchPosts(action: FetchPostsRequest) {
  try {
    yield delay(500); // To emulate network
    const { payload } = action;
    const params = payload ? processFetchParams(payload) : {};
    const response = yield* call(getPosts, params);
    yield put(fetchSuccess({ posts: response.data }));
  } catch (e) {
    yield put(fetchFailure({ error: 'Something went wrong' }));
    // On production projects we usually use more complex error handling,
    // I'll leave it like this for simplicity sake.
    console.error(e); 
  }
}

function* setActivePostId(action: SetActivePostId) {
  const { payload: { postId }} = action;
  if (!!postId) {
    yield put(commentsActions.fetch({ postId }));
  }
}

function* watchFetchPosts() {
  yield takeLatest(ActionTypes.FETCH, fetchPosts);
}

function* watchSetActivePostId() {
  yield takeLatest(ActionTypes.SET_ACTIVE_ID, setActivePostId);
}

const postSagas = [watchFetchPosts, watchSetActivePostId];

export default postSagas;
