export default {
	SET_CATEGORIES(state, data) {
		state.cateGories = data.splice(0, 5);
	},
	SET_PRODUCT(state, data) {
		state.productList = data;
	},

	CART_ADD_PRODUCT_TO_CART(state, data) {
		const { id, title, images, price } = data;
		const productdesc = { id, title, images, price, count: 1 };
		return state.cartData.push(productdesc);
	},
	CART_ADD_PRODUCT_COUNT(state, data) {
		//對比商品id是不是一樣的，是的話 數量+1
		const cartItemCount = state.cartData.find((item) => Number(item.id) === data);
		return cartItemCount.count++;
	},
	SET_TOTAL_PRICE(state, data) {
		return state.cartData.reduce((prev, current) => {
			return prev + current.price * current.count;
		}, 0);
	},
	DELETE_SINGLE_PRODUCT(state, data) {
		return state.cartData.filter((item, index) => {
			if (Number(item.id) === data) {
				return state.cartData.splice(index, 1);
			}
		});
	},
	DELETE_ALL_PRODUCTS(state) {
		state.cartData = [];
		return state.cartData;
	},

	ADD_CHECK_DATA(state, data) {
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
		return state.productList.filter((item) => {
			if (item.title.match(state.keywords)) {
				state.keywords = '';
				return true;
			} else {
				state.keywords = '';
				return false;
			}
		});
	},
};
