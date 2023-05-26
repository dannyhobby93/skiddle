import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	error: number;
	totalcount: number;
	pagecount: number;
	results: T[] | T;
}

export interface SingleResponse<T> {
	error: number;
	totalcount: number;
	pagecount: number;
	results: T;
}

const axiosInstance = axios.create({
	baseURL: "https://www.skiddle.com/api/v1",
	params: {
		api_key: "008f1e6099ecc48e990e3776784d447b",
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};

	search = (keyword: string) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint + `?keyword=${keyword}`)
			.then((res) => res.data);
	};

	get = (id: string) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint + "/" + id)
			.then((res) => res.data);
	};
}

export default APIClient;
