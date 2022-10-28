import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import commentsReducer from "./comments/reducer";
import tagsReducer from "./tags/reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  tags: tagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
