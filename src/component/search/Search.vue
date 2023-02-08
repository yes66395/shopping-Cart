<template>
	<div class="search-container">
		<input
			type="search"
			class="search-input"
			v-model.lazy.trim="keyWords"
			@keyup.enter="searchKey(keyWords)"
			placeholder="請輸入要查詢的商品名稱"
		/>
		<button type="button" @click="searchKey(keyWords)" class="search-button">送出</button>
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
		searchKey(word) {
			return word === '' ? false : this.$store.dispatch('getFilterProduct', word);
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
	font-size: 1.1rem;
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

