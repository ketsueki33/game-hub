import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c81ff3be60d84b3a8645a65880977a0b",
    },
});

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) =>
        axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
}

export default APIClient;
