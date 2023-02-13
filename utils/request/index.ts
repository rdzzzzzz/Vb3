import MyAxios from './request';

const BASE_URL = '/3000';
const TIME_OUT = 5000;

const myRequest = new MyAxios({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
});
export default myRequest;
