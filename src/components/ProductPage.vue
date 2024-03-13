<template>
  <div class="products-page">
    <h1 class="text-center">Our Products</h1>

    <p v-if="loading" >Loading...</p>

    <p v-if="error">Failed to fetch</p>
    <div class="products-container">

      <div class="card full-width" v-for="product in products" :key="product.id">
        <img :src="product.image" />
        <div class="product-detail">
          <span class="product-title">{{ product.title }}</span>
          <span class="product-category">{{ product.category }}</span>
          <span class="product-price">{{ "₹ " + (product.price * 82).toFixed(2) }}</span>
        </div>
        <router-link :to="`/buy?id=${product.id}`">
          <button class="buy">Order Now</button>
        </router-link>
      </div>
    </div>

  </div>
</template>


<script>
import axios from 'axios';
import { AtomSpinner } from 'epic-spinners';

export default {
  data() {
    return {
      products: [],
      loading: true,
      error: false,
    }
  },

  async created() {
    this.loading = true
    this.error = false;
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      this.products = res.data;
    } catch (err) {
      console.error(err);
      this.error = true
    }
    this.loading = false
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    },
  },
  components: [AtomSpinner]


};

</script>


<style>
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
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
</style>