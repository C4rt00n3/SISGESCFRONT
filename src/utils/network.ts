import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import iRoute, { iRouteWithId } from "../interfaces/route-params";

class NetWork {
    private readonly baseUrl: string | undefined;
    token: string | null;
    constructor(
        private readonly route: string,
        private readonly timeout: number,
        private readonly params: AxiosRequestConfig["params"],
        private readonly headers: AxiosRequestConfig["headers"] = {},
    ) {
        this.baseUrl = "http://127.0.0.1:5000/";
        this.token = localStorage.getItem("token") || null;
        this.headers = { "Authorization": "Bearer " + this.token }
    }

    private buildUrl(route?: string): string {
        return this.baseUrl + ((route ? route : this.route) || "");
    }

    async get({ route, timeout, params, headers }: iRoute): Promise<AxiosResponse<any, any>["data"]> {
        const url = this.buildUrl(route);
        const response = await axios.get(url, {
            params: params ? params : this.params,
            headers: headers ? headers : this.headers,
            timeout: timeout ? timeout : this.timeout
        });
        return response.data;
    }

    async getWithId({ route, timeout, params, headers, id }: iRouteWithId): Promise<AxiosResponse<any, any>["data"]> {
        const url = this.buildUrl(route);
        const response = await axios.get(url + `/${id}`, {
            params: params ? params : this.params,
            headers: headers ? headers : this.headers,
            timeout: timeout ? timeout : this.timeout
        });
        return response.data;
    }

    async getAll(
        { route, timeout, params, headers }: iRoute
    ): Promise<any[]> {
        const url = this.buildUrl(route);
        const response = await axios.get(url, {
            params: params ? params : this.params,
            headers: headers ? headers : this.headers,
            timeout: timeout ? timeout : this.timeout
        });


        return response.data;
    }

    async post(body: any, { route, ...config }: iRoute): Promise<AxiosResponse<any, any>> {
        const response = await axios.post(this.buildUrl(route), body, {
            headers: this.headers,
            timeout: this.timeout,
            params: this.params,
            ...config
        });
        return response;
    }

    async put({ route, timeout, params, headers, id }: iRouteWithId): Promise<AxiosResponse<any, any>["data"]> {
        const url = this.buildUrl(route);
        const response = await axios.put(url + `/${id}`, {
            params: params ? params : this.params,
            headers: headers ? headers : this.headers,
            timeout: timeout ? timeout : this.timeout
        });
        return response.data;
    }

    async delete(): Promise<AxiosResponse<any, any>["data"]> {
        const response = await axios.delete(this.buildUrl(), {
            headers: this.headers,
            timeout: this.timeout
        });
        return response.data;
    }

    async patch({ params: { route = this.route, timeout = this.timeout, headers = this.headers, id, params = this.params }, data, }: { params: iRouteWithId, data: any }): Promise<any> {
        const url = this.buildUrl(route);
        const response = await axios.patch(`${url}/${id}`, data, { params, headers, timeout });
        return response.data;
    }
}

export default NetWork;
