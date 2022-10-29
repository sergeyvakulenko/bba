import { get, IParams, post } from '../api';
import { ITag } from "./types";

export const getTags = () => get<ITag[]>('/tags');
export const createTag = (params: IParams) => post<ITag>('/tags', params);