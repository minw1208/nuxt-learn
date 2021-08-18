<template>
  <div class="container">
    <h1 class="list-title">Cart Items</h1>
    
    <CartList/>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>

// import { FETCH_CART_ITEMS } from '~/store';

export default {
  // asyncData({store}){
  //   // await store.dispatch(FETCH_CART_ITEMS);
  //   const products = store.state.cartItems.map(item => ({
  //     ...item,
  //     imageUrl: `${item.imageUrl}?random=${Math.random()}`
  //   }))
  //   return { products }
  // },
  computed: { // nustServerInit으로 인해 asyncData가 필요없어짐.
    products() {
      return this.$store.state.cartItems.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    }
  }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>