<template>
	<div class="search-container">
		<input
			type="text"
			class="search-input"
			v-model.trim="keyWords"
			@keyup.enter="searchKey(keyWords)"
			placeholder="請輸入要查詢的商品名稱"
		/>
		<button type="button" @click="searchKey(keyWords)" @touchstart.stop="searchKey(keyWords)" class="search-button">
			送出
		</button>
	</div>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			keyWords: '',
		};
	},
	methods: {
		searchKey(words) {
			this.$store.dispatch('getFilterProduct', {
				words,
			});
			this.keyWords = '';
			this.$store.commit('IS_HAVE_DATA');
		},
	},
};
</script>

<style scoped>
.search-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	padding: 8px 0;
}
.search-container .search-input {
	width: 80%;
	height: 42px;
	color: #e5e57e;
	background-color: #002d5f;
	border: none;
	font-size: 20px;
}
.search-input::placeholder {
	text-align: center;
	font-size: 0.8rem;
}
.search-container .search-button {
	width: 60px;
	padding: 10px 0;
	font-size: 1rem;
	border-radius: 0 5px 5px 0;
	background-color: #002d5f;
	border: none;
	cursor: pointer;
	color: #e5e57e;
}
</style>
