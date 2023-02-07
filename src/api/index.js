import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1',
	timeout: 500,
});

instance.interceptors.request.use(
	(req) => {
		return req;
	},
	(err) => Promise.reject(err),
);

instance.interceptors.response.use(
	(res) => {
		return res;
	},
	(err) => {
		return Promise.reject(err);
	},
);
export default instance;
