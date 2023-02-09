<template>
	<section class="product-list-container">
		<div class="product-wrapper">
			<ul class="product-all-list">
				<li class="product-all-list-items" v-for="(productListItem, index) in productList" :key="index">
					<div class="product-box">
						<div class="product-image">
							<img
								:src="productListItem.images[0]"
								:alt="productListItem.description"
								@click="selectProduct(productListItem.id)"
							/>
						</div>

						<span class="product-title"> {{ productListItem.title }}</span>
						<span class="product-price">${{ productListItem.price }}</span>
						<button type="button" class="add-shopping-cart-btn" @click="addCart(productListItem)">加入購物車</button>
					</div>
				</li>
			</ul>
		</div>

		<span class="api-error" v-if="loadingText">Loading...</span>
		<span class="api-error" style="color: #fff" v-if="Array.isArray(keywords) && keywords.length === 0"
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
			const { id, title, price, images } = item;
			this.$store.dispatch('addProductToCart', { id, title, price, images });
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
		...mapState(['productList']),
		...mapState(['keywords']),
		loadingText() {
			return this.productList.length === 0 && !Array.isArray(this.keywords);
		},
	},
};
</script>

<style scoped lang="css" src="../css/product.css"></style>
