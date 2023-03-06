<template>
	<section class="product-nav-container">
		<ul class="product-nav">
			<li class="product-nav-item">
				<span class="product-nav-name" :class="{ active: 0 === curIndex }" @click="getAllProduct(0, 0)">All</span>
			</li>
			<li class="product-nav-item" v-for="(productTitle, index) in cateGories" :key="productTitle.id">
				<span
					class="product-nav-name"
					:class="{ active: index + 1 === curIndex }"
					@click="getAllProduct(productTitle.id, index + 1)"
				>
					{{ productTitle.name }}
				</span>
			</li>
		</ul>
	</section>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			curIndex: 0,
		};
	},
	mounted() {
		this.$store.dispatch('getcateGories');
		this.$store.dispatch('getProductList', {
			id: sessionStorage.getItem('id') || 0,
		});
	},
	methods: {
		async getAllProduct(id, index) {
			sessionStorage.setItem('id', JSON.stringify(id));
			await this.$store.dispatch('getProductList', { id });
			await this.$store.commit('IS_HAVE_DATA');
			this.curIndex = index;
		},
	},
	computed: {
		...mapState(['cateGories']),
	},
};
</script>

<style scoped lang="css" src="../../css/home.css"></style>
