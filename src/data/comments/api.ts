import { get } from '../api';
import { IComment } from "./types";

export const getComments = (id: number) => get<IComment[]>(`/posts/${id}/comments`, {'_embed': 'tags'});