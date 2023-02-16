import axios from 'axios';
import router from '../../router/route.js';
const request = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/auth',
	timeout: 1000,
});

request.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) config.headers.Authorization = `${token}`;
		return config;
	},
	(error) => Promise.reject(error),
);

request.interceptors.response.use(
	(response) => {
		const { data } = response;
		return data;
	},
	(err) => {
		const { status } = err;
		return status === 401 ? router.push({ name: 'Login' }) : Promise.reject(err);
	},
);
export { request };
