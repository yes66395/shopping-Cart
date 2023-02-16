export default {
	getShoppingCart: (state) => state.cartData.length,
	getTotalCount: (state) => {
		return state.cartData.reduce((prev, current) => {
			return prev + current.totalMount;
		}, 0);
	},
	getTotalPrice(state) {
		return state.cartData.reduce((prev, current) => {
			return prev + current.price * current.totalMount;
		}, 0);
	},
	getCheckDataTotalPrice(state) {
		return state.checkData.reduce((prev, current) => {
			return prev + current.price * current.totalMount;
		}, 0);
	},
};
