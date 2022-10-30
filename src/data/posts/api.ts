import { get, IParams } from "../api";
import { IPost } from "./types";

export const getPosts = (params?: IParams) => get<IPost[]>("/posts", params);
