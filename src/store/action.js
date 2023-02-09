import axios from 'axios';
export default {
	//拿到商品分類
	getcateGories({ commit }) {
		axios.get('https://api.escuelajs.co/api/v1/categories').then((res) => {
			commit('SET_CATEGORIES', res.data);
		});
	},
	//獲取單個分類的全部商品資料
	getProductList({ commit }, payload) {
		const { id } = payload;
		async function getData(id) {
			const res = await axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=' + parseInt(id));
			commit('SET_PRODUCT', res.data);
		}
		getData(id);
	},
	//查詢商品功能
	getFilterProduct({ commit }, payload) {
		let { words } = payload;
		async function filterProduct(title) {
			const res = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${String(title)}`);
			commit('SET_FILTER_PRODUCT', res.data);
		}
		filterProduct(words);
	},
	//新增至購物車
	addProductToCart({ commit, state }, payload) {
		const { id, title, price, description } = payload;
		const cartItem = state.cartData.find((item) => Number(item.id) === id);
		const cartObject = { id, title, images: payload.images[0], price, totalMount: 1, description };
		localStorage.setItem('cartData', JSON.stringify(state.cartData));
		return !cartItem ? commit('CART_ADD_PRODUCT_TO_CART', cartObject) : commit('CART_ADD_PRODUCT_COUNT', id);
	},
	//握取計數器
	getProductTotalPrice({ commit }, payload) {
		commit('SET_TOTAL_COUNT', payload);
	},

	//刪除單一商品
	getDelSingleProduct({ commit }, payload) {
		commit('DELETE_SINGLE_PRODUCT', payload);
	},
	//清空購物車
	getDelAllProduct({ commit }) {
		commit('DELETE_ALL_PRODUCTS');
	},
	//拿取訂單商品(結帳功能)
	getCheckData({ commit }, payload) {
		commit('ADD_CHECK_DATA', payload);
	},
};
