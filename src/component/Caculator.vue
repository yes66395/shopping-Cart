<template>
	<div class="caculator-container">
		<span class="totalPrice">總價格: ${{ totalPrice }}元 </span>
		<span class="totalCount">總數量: {{ totalCount }}項</span>
		<button @click="clearButton(cartData, 'clear')" class="clear-button">清空購物車</button>
		<router-link
			:to="{ name: 'case' }"
			@click.prevent="clearButton(cartData, 'check')"
			class="checkout-button green"
			aria-disabled="false"
			>{{ haveCase }}</router-link
		>
		<router-link :to="{ path: '/' }" class="checkout-button red">繼續購物</router-link>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	methods: {
		clearButton(data, typeButton = 'check') {
			switch (typeButton) {
				case 'clear':
					this.$store.dispatch('getDelAllProduct');
					data.length === 0 ? window.alert('目前一個商品都沒有') : window.alert('商品清空成功');
					break;
				default:
					this.checkData.length === 0 && data.length !== 0
						? window.alert('結帳成功')
						: window.alert('結帳失敗，已經有訂單了或是購物車沒有商品');
					this.$store.dispatch('getCheckData', data);
					break;
			}
		},
	},
	computed: {
		...mapState(['cartData'].sort((a, b) => a - b)),
		...mapState(['checkData']),
		...mapGetters({
			totalCount: 'getTotalCount',
			totalPrice: 'getTotalPrice',
		}),
		haveCase() {
			return this.checkData.length !== 0 ? '已經有訂單了' : '點我結帳去';
		},
	},
};
</script>

<style scoped>
.caculator-container {
	width: calc(70% - 2rem);
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin: 32px auto 0 auto;
	padding: 8px 0;
}
.totalPrice,
.totalCount {
	color: #fff;
	padding: 8px;
	font-size: 1.5rem;
}
.clear-button {
	padding: 8px;
	width: 200px;
	font-size: 1.5rem;
	font-weight: bolder;
	border: none;
	background: linear-gradient(rgba(255, 105, 30, 1) 0%, rgba(230, 95, 28, 1) 100%);
	color: #fff;
	border-radius: 8px;
	cursor: pointer;
}
.checkout-button {
	display: inline-block;
	margin-top: 8px;
	width: 185px;
	color: #fff;
	padding: 8px;
	text-align: center;
	border-radius: 8px;
	font-size: 1.5rem;
	font-weight: bolder;
}
.green {
	background: linear-gradient(rgb(16, 216, 106) 0%, rgb(7, 135, 30) 100%);
}
.red {
	background: linear-gradient(rgb(231, 68, 27) 0%, rgb(245, 68, 33) 100%);
}
</style>
