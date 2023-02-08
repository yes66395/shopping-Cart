import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart/Cart.vue';
import Productdetail from '../component/ProductDetail.vue';
const routes = [
	{
		path: '/',
		redirect: '/Home',
	},
	{
		path: '/Home',
		component: Home,
	},
	{
		path: '/Home/cart',
		name: 'cart',
		component: Cart,
	},
	{
		path: '/Home/productdetail',
		component: Productdetail,
	},
	{
		path: '/Home/cart/case',
		name: 'case',
		component: () => import('../views/Cart/Case/ProductCase.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
