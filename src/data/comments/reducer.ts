import { tagsActions } from "../tags";
import { TagsActions } from "../tags/types";
import { ActionTypes } from "./actions";
import { CommentsActions, CommentsState } from "./types";

const initialState: CommentsState = {
  pending: false,
  comments: [],
  error: null,
};

const reducer = (
  state = initialState,
  action: CommentsActions | TagsActions
) => {
  switch (action.type) {
    case ActionTypes.FETCH:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        comments: action.payload.comments,
        error: null,
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        comments: [],
        error: action.payload.error,
      };
    case ActionTypes.CREATE:
      return {
        ...state,
        pending: true,
      };
    case ActionTypes.CREATE_SUCCESS:
      return {
        ...state,
        pending: false,
        comments: [...state.comments, action.payload.comment],
        error: null,
      };
    case ActionTypes.CREATE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case tagsActions.ActionTypes.CREATE_SUCCESS:
      const {
        payload: { tag },
      } = action;
      const comments = [...state.comments];
      const changedCommentIndex = state.comments.findIndex(
        (c) => c.id === tag.commentId
      );
      comments[changedCommentIndex].tags?.push(tag);
      return {
        ...state,
        comments,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
