import { AxiosPromise, AxiosRequestConfig } from "axios";
import { PER_PAGE } from "../constants";
import { request } from "./config";

type FetchWithPaginationType = {
  url: string;
  data?: object;
  params?: object;
  page?: number;
  per_page?: number;
};
// config?: AxiosRequestConfig<T>
interface IBaseApi {
  find<T>(id: string, url: string, showNotification?: boolean): AxiosPromise<T>;
  fetchAll<T>(url: string, data?: object): AxiosPromise<T>;
  fetchWithParams<T>(url: string, params: object): AxiosPromise<T>;
  fetchWithPagination<T>(args: FetchWithPaginationType): AxiosPromise<T>;
  create<T>(url: string, data: object): AxiosPromise<T>;
  update: (id: string, url: string, data: object) => AxiosPromise;
  remove: (id: string, url: string) => Promise<boolean>;
}

const baseAPI: IBaseApi = {
  find<T>(id: string, url: string) {
    return request.get<T>(`${id}/${url}`)
  },
  async fetchAll<T>(url: string, data = {}) {
    let res = await request.get<T>(url, data);
    return res;
  },
  async fetchWithParams<T>(url: string, params: object = {}) {
    let res = await request.get<T>(url, { params });
    return res;
  },
  async fetchWithPagination<T>({
    url,
    params = {},
    page = 1,
    per_page = PER_PAGE,
  }: FetchWithPaginationType) {
    const res = await request.get<T>(url, {
      params: { ...params, page, per_page }
    });
    return res;
  },
  async create<T>(url: string, data: any) {
    let res = await request.post<T>(url, data);
    return res;
  },

  update: (id, url, data) => request({ method: "put", url: `${url}/${id}`, data }),

  remove: async (id, url) => {
    let res = await request.delete(`${url}/${id}`);
    return res.data.status;
  }
}


export default baseAPI;