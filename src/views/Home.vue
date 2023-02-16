<template>
	<Shopping-Cart />
	<section class="product-container">
		<!-- 商品分類列表 -->
		<Product-Nav-Bar />
		<!---所有商品列表-->
		<Product />
	</section>
</template>

<script>
import ShoppingCart from '../component/ShoppingCart.vue';
import Product from './Product/Product.vue';
import ProductNavBar from '../component/ProductNavBar/ProductNavBar.vue';
export default {
	components: {
		Product,
		ShoppingCart,
		ProductNavBar,
	},
};
</script>
<style lang="css" scoped src="../css/home.css"></style>
