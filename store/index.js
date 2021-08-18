
import { fetchCartItems } from "~/api"

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  cartItems: []
})

export const mutations = {
  addCartItem(state, cartItem) {
    const equal = state.cartItems.find(item => item.id === cartItem.id)
    if (!equal) {
      state.cartItems.push(cartItem);
    }
  },
  initCartItems(state, cartItems) {
    state.cartItems = cartItems
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const res = await fetchCartItems();
    commit('initCartItems', res.data);
  },
  async nuxtServerInit(storeContext, { req, response }) { // asyncData보다 일찍 불린다.
    await storeContext.dispatch(FETCH_CART_ITEMS);
  }
}
