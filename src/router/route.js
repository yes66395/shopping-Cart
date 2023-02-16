import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		redirect: '/Login',
	},
	{
		path: '/Login',
		name: 'Login',
		meta: { auth: true },
		component: () => import('../views/Login/Login.vue'),
	},
	{
		path: '/Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/Home/cart',
		name: 'cart',
		component: () => import('../views/Cart/Cart.vue'),
	},
	{
		path: '/Home/productdetail',
		component: () => import('../views/Product/ProductDetail/ProductDetail.vue'),
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
//4.X不一定需要添加第三個next參數
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token');
	return to.name !== 'Login' && !token ? next({ name: 'Login' }) : next();
});

export default router;
