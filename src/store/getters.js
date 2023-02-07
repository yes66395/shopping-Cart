export default {
	getShoppingCart: (state) => state.cartData.length,
	getTotalCount: (state) => {
		return state.cartData.reduce((prev, current) => {
			return prev + current.count;
		}, 0);
	},
	getTotalPrice(state) {
		return state.cartData.reduce((prev, current) => {
			return prev + current.price * current.count;
		}, 0);
	},
	getCheckDataTotalPrice(state) {
		return state.checkData.reduce((prev, current) => {
			return prev + current.price * current.count;
		}, 0);
	},
};
