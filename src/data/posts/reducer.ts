import { ActionTypes } from "./actions"; 
import { PostsActions, PostsState } from "./types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
  activePostId: null,
  authorId: null,
  search: null,
  page: 1,
};

const reducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case ActionTypes.FETCH:
      return {
        ...state,
        pending: true
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error
      };
    case ActionTypes.SET_ACTIVE_ID:
      return {
        ...state,
        activePostId: action.payload.postId,
      };
    case ActionTypes.SET_SEARCH:
      return {
        ...state,
        pending: true,
        search: action.payload.search,
      };
    case ActionTypes.SET_AUTHOR_ID:
      return {
        ...state,
        pending: true,
        authorId: action.payload.authorId,
      };
    case ActionTypes.SET_PAGE:
      return {
        ...state,
        pending: true,
        page: action.payload.page,
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;