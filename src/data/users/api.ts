import { get, IParams } from "../api";
import { IUser } from "./types";

export const getUsers = (params?: IParams) => get<IUser[]>("/users", params);
