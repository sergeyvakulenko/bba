import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import commentsReducer from "./comments/reducer";
import tagsReducer from "./tags/reducer";
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  tags: tagsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
