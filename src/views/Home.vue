<template>
	<shopping-Cart />
	<section class="product-container">
		<section class="product-nav-container">
			<ul class="product-nav">
				<li class="product-nav-item">
					<span class="product-nav-name" @click="getAllProduct(0)">All</span>
				</li>
				<li class="product-nav-item" v-for="productTitle in cateGories" @click="getAllProduct(productTitle.id)">
					<span class="product-nav-name">
						{{ productTitle.name }}
					</span>
				</li>
			</ul>
		</section>
		<!---商品主模組-->
		<Product />
	</section>
</template>

<script>
import shoppingCart from '../component/ShoppingCart.vue';
import Product from '../component/Product.vue';

import { mapState } from 'vuex';
export default {
	data() {
		return {
			filterKey: '',
		};
	},
	components: {
		Product,
		shoppingCart,
	},
	mounted() {
		this.$store.dispatch('getcateGories');
		this.$store.dispatch('getProductList', {
			id: sessionStorage.getItem('id') || 0,
		});
	},
	methods: {
		async getAllProduct(id) {
			sessionStorage.setItem('id', JSON.stringify(id));
			await this.$store.dispatch('getProductList', { id });
		},
	},
	computed: {
		...mapState(['cateGories']),
	},
};
</script>
<style scoped lang="css">
@import '../css/home.css';
</style>
