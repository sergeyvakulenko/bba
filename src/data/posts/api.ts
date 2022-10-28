import { get } from '../api';
import { IPost } from "./types";

export const getPosts = () => get<IPost[]>('/posts');