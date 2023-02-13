import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
class MyAxios {
	instance: AxiosInstance;
	// axios 实例
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config);
	}
	request(config: AxiosRequestConfig) {
		this.instance = axios.create(config);
	}
}

export default MyAxios;
