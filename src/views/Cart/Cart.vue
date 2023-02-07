<template>
	<header class="header"></header>
	<main class="product-container">
		<ProductInfo />
		<section class="product-list-container">
			<span v-if="cartData.length === 0" style="color: #fff" class="no-product"
				>沒有商品，快去看看吧
				<router-link class="title" :to="{ path: '/' }">點我繼續購物</router-link>
			</span>

			<ul class="product-list">
				<li class="product-list-item" v-for="(cartItem, index) in cartData" :key="index">
					<span>{{ cartItem.id }}</span>
					<div class="product-image">
						<img :src="cartItem.images" srcset="" />
					</div>
					<span class="product-name">{{ cartItem.title }}</span>
					<!-- 計算數量加總 -->
					<div class="count-container">
						<button class="plus" @click="countMount(cartItem, 'plus')">+</button>
						<span class="count">{{ cartItem.count }}</span>
						<button class="minus" @click="countMount(cartItem)">-</button>
					</div>
					<div>
						<span class="price" style="font-size: 1.1rem">${{ cartItem.price }}元</span>
					</div>

					<div class="function-button">
						<button class="del" @click="delSingleButton(cartItem.id)">刪除</button>
						<button @click="selectProduct(cartItem.id)" class="read" @touchstart.stop="selectProduct(cartItem.id)">
							查看
						</button>
					</div>
				</li>
			</ul>
		</section>
		<Caculator></Caculator>
	</main>
</template>

<script>
import ProductInfo from '../../component/ProuductInfo.vue';
import Caculator from '../../component/Caculator.vue';
import { mapState } from 'vuex';

export default {
	name: 'shoppingCart',
	components: {
		ProductInfo,
		Caculator,
	},
	computed: {
		...mapState(
			['cartData'].sort((a, b) => a - b),
			['checkData'],
		),
	},
	methods: {
		//store index.js嚴格模式開啟功能會出問題 已經變動到資料，但不知道怎麼解決
		//請小心，如果可以幫我改寫最好XD
		//這段函數已經修復
		countMount(item, typeButton = 'mius') {
			const { id } = item;
			return this.$store.dispatch('getProductTotalPrice', {
				typeButton,
				id,
			});
		},
		selectProduct(id) {
			return this.$router.push({
				path: '/Home/productdetail',
				query: {
					id: id,
				},
			});
		},
		delSingleButton(index) {
			return this.$store.dispatch('getDelSingleProduct', index);
		},
	},
};
</script>

<style lang="css" scoped>
.header {
	width: 100%;
	background: linear-gradient(115deg, #001e40, #002d5f) no-repeat;
	color: #fff;
}
.title {
	width: 150px;
	padding: 4px 9px;
	margin-left: 16px;
	color: #fff;
	background: linear-gradient(rgba(255, 105, 30, 1) 0%, rgba(230, 95, 28, 1) 100%);
	border-radius: 8px;
}

.product-container {
	box-sizing: border-box;
	background: linear-gradient(180deg, #001e40, #002d5f) no-repeat;
	color: #fff;
	height: 100vh;
}
.product-list-container {
	position: relative;
	width: calc(80% - 2rem);
	height: 300px;
	margin: auto;
	overflow: auto;
}

.product-list .product-list-item {
	padding: 8px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.product-image {
	max-width: 100px;
}
.product-image > img {
	max-width: 100%;
	vertical-align: middle;
}
.count-container > span {
	padding: 8px;
}
.no-product {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	font-size: 1.5rem;
	text-align: center;

	top: 50%;
	box-sizing: border-box;
}
.count-container button {
	outline: none;
	border: none;
	background: transparent;
	color: #e5e57e;
	font-size: 24px;
	font-weight: bolder;
	cursor: pointer;
}

.function-button .del {
	margin: 0 8px;
	background: linear-gradient(rgba(250, 90, 90, 1) 0%, rgba(232, 81, 81, 1) 100%);
	font-size: 16px;
	color: #eee;
	border-radius: 5px;
	padding: 4px 9px;
	border: none;
	cursor: pointer;
}
.function-button .read {
	outline: none;
	color: #fff;
	background: linear-gradient(to bottom, rgba(102, 152, 203, 1) 0%, rgba(92, 138, 184, 1) 100%);
	border: none;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
	padding: 4px 9px;
	font-size: 16px;
	border-radius: 5px;
}
</style>
