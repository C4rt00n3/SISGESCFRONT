import { AxiosRequestConfig } from "axios";

export default interface iRoute {
    route?: string,
    timeout?: number,
    params?: AxiosRequestConfig["params"],
    headers?: AxiosRequestConfig["headers"],
}

export interface iRouteWithId extends iRoute {
    id: number
}