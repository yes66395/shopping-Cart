<template>
	<section class="product-list-container" style="position: relative" y>
		<div class="product-box" v-for="(productListItem, index) in productList" :key="index">
			<img
				:src="productListItem.images[0]"
				:alt="productListItem.description"
				@click="selectProduct(productListItem.id)"
			/>
			<span class="product-title"> {{ productListItem.title }}</span>
			<span class="product-price">${{ productListItem.price }}</span>
			<button type="button" class="add-shopp-cart-btn" @click="addCart(productListItem)">加入購物車</button>
		</div>
		<span v-if="productList.length === 0 && !Array.isArray(keywords)" class="api-error">Loading...</span>
		<span class="api-error" style="color: #fff" v-if="Array.isArray(keywords)"
			>很抱歉! 搜尋不到你要的資料，請再試一次</span
		>
	</section>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'Product',
	mounted() {
		this.$store.dispatch('getcateGories');
	},
	methods: {
		addCart(item) {
			const cartObject = { id: item.id, title: item.title, price: item.price, images: item.images };
			this.$store.dispatch('addProductToCart', cartObject);
		},
		selectProduct(id) {
			if (!id) return;
			return this.$router.push({
				path: '/Home/productdetail',
				query: {
					id: id,
				},
			});
		},
	},
	computed: {
		...mapState(['productList', 'keywords']),
	},
};
</script>

<style scoped lang="css">
@import '../css/product.css';

@media (max-width: 820px) and (min-width: 375px) {
	.product-list-container {
		width: 80%;
		justify-content: flex-start;
		margin-right: 16px;
		padding-left: 16px;
		box-sizing: border-box;
	}
	.product-box {
		width: 110px;
		box-sizing: border-box;
	}
	.add-shopp-cart-btn {
		max-width: 100%;
	}
}
@media (min-width: 414px) {
	.product-box {
		width: 120px;
		box-sizing: border-box;
	}
}

@media (min-width: 540px) {
	.product-list-container {
		width: 90%;
		justify-content: flex-start;
		margin: 16px auto;
	}
}
</style>
