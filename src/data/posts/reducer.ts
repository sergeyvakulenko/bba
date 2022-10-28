import { ActionTypes } from "./actions"; 
import { PostsActions, PostsState } from "./types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
  activePostId: null
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
    default:
      return {
        ...state
      };
  }
};

export default reducer;