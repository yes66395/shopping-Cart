<template>
	<div class="wrapper">
		<section class="product-container">
			<table class="product-table">
				<thead class="thead">
					<tr>
						<th>商品編號</th>
						<th>商品圖片</th>
						<th>商品名稱</th>
						<th>數量</th>
						<th>商品價格</th>
						<th>功能</th>
					</tr>
				</thead>
				<tbody>
					<span v-if="cartData.length === 0" style="color: #fff" class="no-product"
						>沒有商品，快去看看吧
						<router-link class="title" :to="{ path: '/' }">點我繼續購物</router-link>
					</span>
					<tr v-for="(cartItem, index) in cartData" :key="index">
						<td>{{ cartItem.id }}</td>
						<td class="image-field">
							<img :src="cartItem.images" alt="" class="product-image" />
						</td>
						<td>{{ cartItem.title }}</td>
						<td class="caculator">
							<button class="plus" @click="countMount(cartItem, 'plus')">+</button>
							{{ cartItem.totalMount }}
							<button class="minus" @click="countMount(cartItem, 'minus')">-</button>
						</td>
						<td>{{ cartItem.price }}</td>
						<td>
							<button class="delete-btn btn" type="button" @click="delSingleButton(cartItem)">刪除</button>
							<button class="read-btn btn" type="button" @click="selectProduct(cartItem.id)">詳情</button>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
		<Caculator />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Caculator from '../../component/Caculator.vue';
export default {
	name: '購物車表格',
	components: {
		Caculator,
	},
	computed: {
		...mapState(
			['cartData'].sort((a, b) => b.price - a.price),
			['checkData'],
		),
	},
	mounted() {
		localStorage.getItem('cartData');
	},
	methods: {
		//store index.js嚴格模式開啟功能會出問題 已經變動到資料，但不知道怎麼解決
		//請小心，如果可以幫我改寫最好XD
		//已經修復完畢了 開啟strict也沒有出錯誤
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
			const { id } = index;
			return this.$store.dispatch('getDelSingleProduct', { id });
		},
	},
};
</script>

<style scoped src="../../css/cart.css"></style>
