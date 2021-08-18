<template>
  <div class="app">
    <main>
      <SearchInput v-model="searchKeyword" @search="searchProducts"/>
      
      <div 
      class="item flex" 
      v-for="product in products" 
      :key="product.id">
      <NuxtLink :to="`/detail/${product.id}`" >
        <img class="product-image" :src="product.imageUrl" :alt="product.name">
      </NuxtLink>
        <p>{{ product.name }}</p> 
        <span>{{ product.price }}</span>
        <button class="cart" @click="addCart"> Add Cart</button>
      </div>
      
      <NuxtLink to="/cart" class="cart-wrapper">
        <button class="btn">
          Go to Cart
        </button>
      </NuxtLink>
    </main>
  </div>
</template>

<script>

import axios from 'axios'
import SearchInput from '~/components/SearchInput.vue';
import { fetchProductByKeyword, fetchProducts } from '~/api';

export default {
  components: { SearchInput },

  async asyncData() { // pages에서만 사용할 수 있다. component에서는 사용 불가능
    const res = await fetchProducts
    console.log(res);
    const products = res.data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))

    return { products }
  },

  data() {
    return {
      searchKeyword: ""
    }
  },

  methods: {
    async searchProducts(){
      const res = await fetchProductByKeyword(this.searchKeyword);
      console.log(res);
      this.products = res.data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    },
    addCart(){
      this.$router.push('/cart')
    }
  }

}
</script>

<style scoped>

.a {
  text-decoration: none;
  color: #000;
}

.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  height: 50px;
  width: 150px;
  text-align: center;
  border-radius: 25px;
  background-color: mediumseagreen;
  font-weight: 700;
  font-size: 20px;
}

.cart {
  height: 25px;
  width: 75px;
  border-radius: 25px;
  z-index: 2;
  background-color: mediumseagreen;
  font-weight: 600;
  font-size: 12px;
}

</style>