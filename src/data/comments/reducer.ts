import { ActionTypes } from "./actions"; 
import { CommentsActions, CommentsState } from "./types";

const initialState: CommentsState = {
  pending: false,
  comments: [],
  error: null
};

const reducer = (state = initialState, action: CommentsActions) => {
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
        comments: action.payload.comments,
        error: null
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        comments: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;