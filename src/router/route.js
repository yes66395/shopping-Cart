import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		redirect: '/Home',
	},
	{
		path: '/Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/Home/cart',
		name: 'cart',
		component: () => import('../component/Cart/Cart.vue'),
	},
	{
		path: '/Home/productdetail',
		component: () => import('../component/ProductDetail/ProductDetail.vue'),
	},
	{
		path: '/Home/cart/case',
		name: 'case',
		component: () => import('../component/Cart/Case/ProductCase.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
