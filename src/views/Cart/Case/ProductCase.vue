<template>
	<h1>開發當中</h1>

	<main></main>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: '訂單元件開發當中',
	components: {},
	computed: {
		...mapState(['checkData']),
		noCase() {
			return this.checkData.length === 0;
		},
	},
};
</script>

<style scoped></style>
