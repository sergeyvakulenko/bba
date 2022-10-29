import { get, IParams, post } from '../api';
import { IComment, TNewComment } from "./types";

export const getComments = 
  (id: number, params: IParams) => get<IComment[]>(`/posts/${id}/comments`, params);
export const createComment = (params: TNewComment) => post<IComment>('/comments', params);