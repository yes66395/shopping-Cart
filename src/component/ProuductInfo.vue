<template>
	<div class="product-info-list-container">
		<ul class="product-info-list">
			<li class="product-info-list-item">
				<span class="product-list-text">商品編號</span>
			</li>
			<li class="product-info-list-item">
				<span class="product-list-text">圖片</span>
			</li>
			<li class="product-info-list-item">
				<span class="product-list-text">商品名稱</span>
			</li>
			<li class="product-info-list-item">
				<span class="product-list-text">數量</span>
			</li>
			<li class="product-info-list-item">
				<span class="product-list-text">價格(單價)</span>
			</li>
			<li class="product-info-list-item">
				<span class="product-list-text">功能</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ProductInfo',
};
</script>

<style>
.product-info-list-container {
	width: calc(80% - 2rem);
	margin: 0 auto;
	padding: 16px 0;
	box-sizing: border-box;
	border-bottom: 2px solid #ccc;
}
.product-info-list {
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: #fff;
}
.product-info-list-item {
	transform: translateX(-40px);
}
.product-info-list .product-list-text {
	display: block;
}
</style>
