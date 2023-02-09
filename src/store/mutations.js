export default {
	SET_CATEGORIES(state, data) {
		state.cateGories = data.splice(0, 5);
	},
	SET_PRODUCT(state, data) {
		state.productList = data;
	},

	CART_ADD_PRODUCT_TO_CART(state, data) {
		const { id, title, images, price } = data;
		const productdesc = { id, title, images, price, totalMount: 1 };
		return state.cartData.push(productdesc);
	},
	CART_ADD_PRODUCT_COUNT(state, data) {
		//對比商品id是不是一樣的，是的話 數量+1
		const cartItemCount = state.cartData.find((item) => Number(item.id) === data);
		return cartItemCount.totalMount++;
	},
	SET_TOTAL_COUNT(state, data) {
		const { typeButton, id } = data;
		return state.cartData.findIndex((item) => {
			if (Number(item.id) === id) {
				switch (typeButton) {
					case 'plus':
						item.totalMount == 99 ? false : item.totalMount++;
						break;
					case 'minus':
						item.totalMount > 1 ? item.totalMount-- : (item.totalMount = 1);
						break;
					default:
						break;
				}
			}
		});
	},
	DELETE_SINGLE_PRODUCT(state, data) {
		const { id } = data;
		const findIndex = state.cartData.findIndex((item) => Number(item.id) === id);
		if (findIndex > -1) return state.cartData.splice(findIndex, 1);
	},
	DELETE_ALL_PRODUCTS(state) {
		return (state.cartData = []);
	},

	ADD_CHECK_DATA(state) {
		switch (state.checkData.length) {
			case 0:
				state.checkData = state.cartData;
				state.cartData = [];
				break;
			default:
				state.cartData = [];
				break;
		}
	},
	SET_FILTER_PRODUCT(state, data) {
		state.keywords = data;
		state.productList = data;
		return state.productList.filter((item) => (item.title.match(state.keywords) ? true : false));
	},
};
