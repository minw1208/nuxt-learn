import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseURL,
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword
    }
  })
}

function fetchProducts() {
  return instance.get('/products')
}

function createCartItem(cartItems) {
  return instance.post(`/carts`,  cartItems)
}

function fetchCartItems() {
  return instance.get(`/carts`)
}

export {fetchProductById, fetchProductByKeyword, createCartItem, fetchCartItems, fetchProducts}