import { request } from '../lib/util/util.js';

function login(data) {
	return request({
		method: 'POST',
		url: '/login',
		data,
	});
}

export { login };
