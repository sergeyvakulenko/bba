import { ActionTypes } from "./actions"; 
import { TagsActions, TagsState } from "./types";

const initialState: TagsState = {
  pending: false,
  tags: [],
  error: null
};

const reducer = (state = initialState, action: TagsActions) => {
  switch (action.type) {
    case ActionTypes.FETCH:
      return {
        ...state,
        pending: true
      };
    case ActionTypes.FETCH_SUCCESS:
      // Since json-server does not support many-to-many relations,
      // I've decided to keep tags as children of comments.
      // Thus I have to manually create an array of unique tags
      // for the suggestion feature after receiving tags from BE.
      const uniqueTags: string[] = [];
      action.payload.tags.forEach((c) => {
        if (!uniqueTags.includes(c.value)) {
          uniqueTags.push(c.value);
        }
      });

      return {
        ...state,
        pending: false,
        tags: uniqueTags,
        error: null
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        tags: [],
        error: action.payload.error
      };
    case ActionTypes.CREATE:
      return {
        ...state,
        pending: true
      };
    case ActionTypes.CREATE_SUCCESS:
      const { payload: { tag: { value } } } = action;
      const tags = [...state.tags];
      if (!tags.includes(value)) {
        tags.push(value);
      }
      return {
        ...state,
        pending: false,
        tags: [
          ...tags
        ],
        error: null
      };
    case ActionTypes.CREATE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;