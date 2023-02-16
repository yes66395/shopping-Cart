<template>
	<header class="title-container">
		<router-link class="title" to="/">雜物商城</router-link>
	</header>
</template>

<script>
export default {
	name: 'Title',
};
</script>

<style scoped lang="css">
.title-container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	background: linear-gradient(0deg, #001e40, #002d5f) no-repeat;
}
.title {
	text-align: center;
	color: #4fc8e0;
	font-size: 1.5rem;
	letter-spacing: 1px;
}
</style>
