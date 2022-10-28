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
        if (!uniqueTags.includes(c.body)) {
          uniqueTags.push(c.body);
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
    default:
      return {
        ...state
      };
  }
};

export default reducer;