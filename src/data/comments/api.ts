import { get, IParams } from '../api';
import { IComment } from "./types";

export const getComments = 
  (id: number, params: IParams) => get<IComment[]>(`/posts/${id}/comments`, params);