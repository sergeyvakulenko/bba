import { get } from '../api';
import { ITag } from "./types";

export const getTags = () => get<ITag[]>('/tags');