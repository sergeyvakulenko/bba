import { get, post } from "../api";
import { ITag, TNewTag } from "./types";

export const getTags = () => get<ITag[]>("/tags");
export const createTag = (params: TNewTag) => post<ITag>("/tags", params);
