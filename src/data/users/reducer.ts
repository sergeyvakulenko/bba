import { ActionTypes } from "./actions";
import { UsersActions, UsersState } from "./types";

const initialState: UsersState = {
  pending: false,
  users: [],
  error: null,
  activeUserId: null,
};

const reducer = (state = initialState, action: UsersActions) => {
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
        users: action.payload.users,
        error: null,
      };
    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
