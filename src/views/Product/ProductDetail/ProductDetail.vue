<template>
	<header class="title-container">
		<router-link class="title" to="/Home">雜物商城</router-link>
	</header>
	<div class="wrapper">
		<div v-if="isId === true" style="color: #fff; font-size: 30px">商品不存在</div>
		<div v-else>
			<div class="product-detail-container" v-for="item of selected">
				<div class="product-details-image-wrap">
					<img :src="item.images[0]" :alt="item.description" class="product-details-image" />
				</div>
				<section class="product-detail">
					<h5>商品名稱:{{ item.title }}</h5>
					<div class="product-detail-text"><span>介紹:</span> {{ item.description }}</div>
					<span class="price">價格:{{ item.price }}元</span>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'productdetails',
	data() {
		return {
			id: this.$route.query.id,
			selected: [],
			isId: false,
		};
	},
	created() {
		this.fetchData(this.id);
	},

	watch: {
		$route(to, from) {
			this.id = to.query.id;
			this.fetchData(this.id);
			this.selected.pop();
		},
	},
	methods: {
		async fetchData(id) {
			try {
				const result = await axios.get('https://api.escuelajs.co/api/v1/products/' + Number(id));
				return this.selected.push(result.data);
			} catch (e) {
				return Promise.reject(e) ? (this.isId = !this.isId) : (this.isId = false);
			}
		},
	},
};
</script>

<style scoped lang="css">
.title-container {
	display: flex;
	height: 0;
	background: linear-gradient(0deg, #001e40, #002d5f) no-repeat;
}
.title {
	color: #4fc8e0;
	font-size: 1.5rem;
	letter-spacing: 1px;
	padding: 1rem;
}
.wrapper {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(180deg, #001e40, #002d5f) no-repeat;
}
.product-detail-container {
	display: flex;
	justify-content: center;
	width: 100%;
}
.product-details-image-wrap {
	max-width: 400px;
	padding: 8px;
	margin-right: 16px;
}
.product-details-image-wrap > .product-details-image {
	width: 100%;
	height: 100%;
	display: block;
}
.product-detail {
	color: #fff;
	margin-left: 16px;
	padding: 0 16px;
}
.product-detail > h5 {
	font: bold 20px/27px Arial, Verdana, 'Yu Gothic', 'MS Gothic', 'Microsoft JhengHei', Helvetica, sans-serif;
	word-break: break-all;
}
.product-detail-text {
	width: 250px;
	font-weight: bolder;
	margin-top: 16px;
	font: bold 20px/27px Arial, Verdana, 'Yu Gothic', 'MS Gothic', 'Microsoft JhengHei', Helvetica, sans-serif;
	word-break: break-all;
}
.price {
	display: inline-block;
	color: #f00;
	margin-top: 16px;
	font-size: 24px;
}
</style>
