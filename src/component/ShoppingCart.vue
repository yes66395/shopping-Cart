<template>
	<header class="title-container">
		<router-link class="title" to="/">雜物商城</router-link>
		<Search />
		<div class="shopping-Cart-container">
			<router-link class="shopping-Cart" :to="{ name: 'cart' }">購物車({{ cartTotal }})</router-link>
			<router-link class="shopping-Cart logout" :to="{ name: 'Login' }" @click="logout">登出</router-link>
		</div>
	</header>
</template>

<script>
import Search from './search/Search.vue';
import { mapGetters } from 'vuex';
export default {
	components: {
		Search,
	},
	computed: {
		...mapGetters({
			cartTotal: 'getShoppingCart',
		}),
	},
	methods: {
		logout() {
			window.alert('登出成功');
			return localStorage.removeItem('token');
		},
	},
};
</script>

<style scoped lang="css">
.title-container {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1rem 0;
	background: linear-gradient(0deg, #001e40, #002d5f) no-repeat;
}

.title {
	text-align: center;
	color: #4fc8e0;
	font-size: 1.5rem;
	letter-spacing: 1px;
}
.shopping-Cart-container {
	width: calc((100% / 2) - 2rem);
	color: #fff;
	display: flex;
	justify-content: flex-end;
}
.shopping-Cart {
	color: #fff;
	display: block;
	font-size: 1rem;
	text-align: right;
}

@media (max-width: 394px) and (min-width: 390px) {
	.shopping-Cart-container {
		justify-content: space-around;
	}
}
@media (max-width: 376px) {
	.shopping-Cart-container {
		justify-content: space-around;
	}
}
@media (max-width: 415px) {
	.shopping-Cart-container {
		justify-content: space-around;
	}
}
</style>
