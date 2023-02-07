import { createRouter, createWebHashHistory } from 'vue-router';
import Cart from '../views/Cart/Cart.vue';
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
		component: Cart,
	},
	{
		path: '/Home/cart/case',
		name: 'case',
		component: () => import('../views/Cart/Case/ProductCase.vue'),
	},
	{
		path: '/Home/productdetail',
		component: () => import('../component/ProductDetail.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
