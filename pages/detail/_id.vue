<template>
  <div class="container">
    <img class="product-image" :src="product.imageUrl" :alt="product.name">
    <div class="side-panel">
      <p>{{product.name}}</p>
      <p>{{product.price}}</p>
      <button class="btn" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>

import {createCartItem, fetchProductById} from '@/api/index'

export default {
  async asyncData({params}){ // this로 접근해도 아직 페이지가 만들어지지 않았기때문에 asyncData에서 제공하는 context를 사용한다. 
    const res = await fetchProductById(params.id)
    const product = res.data

    return {product}
  },
  methods: {
    async addToCart(){
      const res = await createCartItem(this.product);
      console.log(res);
      this.$store.commit('addCartItem', this.product);
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>