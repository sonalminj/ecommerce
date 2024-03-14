<template>
  <div class="products-page">
    <h1 class="text-center">Our Products</h1>

    <p v-if="store.loading">Loading...</p>

    <p v-if="store.error">Error occured while fetching data</p>
    <div class="products-container">

      <div class="single-product card full-width" v-for="product in store.products" :key="product.id">
        <img :src="product.image" />
        <div class="product-detail">
          <span class="product-title">{{ product.title }}</span>
          <span class="product-category">{{ product.category }}</span>
          <span class="product-price">{{ "₹ " + (product.price * 80).toFixed(2) }}</span>
        </div>
        <div class="flex-row">
          <button class="buy" @click="store.addToCart(product.id)">Add to Cart</button>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { store } from '@/store/global';

export default {
  data() {
    return {
      store,
    }
  },

  methods: {
    goToProductDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    },
  },
};
</script>


<style>
.flex-row {
  display: flex;
}

.products-container .flex-row {
  gap: 10px;
}

.products-container .flex-row>* {
  flex: 1;
}

.products-page {
  margin: 50px 0;
  width: 100%;
}

.text-center {
  text-align: center;
  width: 100%;
}

.products-container {
  display: grid;
  row-gap: 20px;
  column-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 40px;
}

.card {
  box-shadow: 1px 1px 5px #DDD;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  gap: 10px;
}

.card img {
  height: 300px;
  width: 100%;
  object-fit: contain;
}

.product-detail {
  flex: 1;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
}

.product-title {
  font-size: medium;
  font-weight: 600;
}

.product-category {
  font-size: smaller;
  font-weight: 600;
  text-transform: capitalize;
  color: #555;
}

.product-price {
  margin-top: 5px;
  font-size: small;
}

.buy {
  width: 100%;
}

@media screen and (max-width: 400px) {
  .products-container {
    margin: 40px 0;
  }
  .single-product {
    max-width: 250px;
    margin: 0 auto;
  }
}
</style>