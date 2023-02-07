<template>
	<h1>開發當中</h1>
	<div>我是訂單元件</div>
	<div v-if="noCase">沒有訂單</div>
	<div v-for="item in checkData">
		{{ item.id }}
		{{ item.images }}
		{{ item.title }}
		{{ item.price }}
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: '訂單元件開發當中',
	computed: {
		...mapState(['checkData']),
		noCase() {
			return this.checkData.length === 0;
		},
	},
};
</script>

<style scoped></style>
