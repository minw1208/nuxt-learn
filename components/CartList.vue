<template>
  <div class="list-wrapper">
      <li 
        class="list-item" 
        v-for="product in products" 
        :key="product.id">
        <NuxtLink :to="`/detail/${product.id}`" >
          <img class="thumbnail" :src="product.imageUrl" :alt="product.name">
        </NuxtLink>
        <div class="description">
          <p>{{ product.name }}</p> 
          <span>{{ product.price }}</span>
        </div>
      </li>
    </div>
</template>

<script>
export default {
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

</style>>

