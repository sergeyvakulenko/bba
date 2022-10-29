import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export interface IParams {
  [key: string]: string | number;
};

export const get = <T>(path: string, params?: IParams) => 
  axios.get<T>(`${API_BASE_URL}${path}`, { params });

export const post = <T>(path: string, params?: IParams) => 
  axios.post<T>(`${API_BASE_URL}${path}`, params);