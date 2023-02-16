import { request } from '../lib/util/util.js';

// function create(data) {
// 	return request({
// 		method: 'GET',
// 		url: '/profile',
// 		data,
// 	});
// }

function login(data) {
	return request({
		method: 'POST',
		url: '/login',
		data,
	});
}

export { login };
