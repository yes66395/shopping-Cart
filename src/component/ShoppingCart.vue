<template>
	<header class="title-container">
		<router-link class="title" to="/Home">雜物商城</router-link>
		<input
			type="search"
			class="search-input"
			v-model.lazy.trim="keyWords"
			@keyup.enter="searchKey(keyWords)"
			placeholder="請輸入要查詢的商品名稱"
		/>
		<button type="button" @click="searchKey(keyWords)" class="search-button">送出</button>
		<div class="shopping-Cart-container">
			<router-link class="shopping-Cart" :to="{ name: 'cart' }">購物車({{ cartTotal }})</router-link>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			keyWords: '',
		};
	},
	methods: {
		searchKey(word) {
			this.$store.dispatch('getFilterProduct', word);
		},
	},

	computed: {
		...mapGetters({
			cartTotal: 'getShoppingCart',
		}),
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
	align-items: center;
}
.shopping-Cart {
	color: #fff;
	display: block;
}
</style>
