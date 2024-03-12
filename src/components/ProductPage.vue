<template>
  <div class="products-page">
    <h1>Our Products</h1>
    <div class="card full-width" v-for="product in products" :key="product.id" @click="goToProductDetail(product.id)">
      <div class="img-container">
        <img :src="product.image"/>

      </div>
      {{ product.title }}
    </div>

  </div>
</template>


<script>
import axios from 'axios';


export default {
  data() {
    return {
      products: [],
    }
  },

  async created() {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      this.products = res.data;
    } catch (err) {
      console.error(err);
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
.products-page {
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.products-page h1 {
  text-align: center;
}
.card {
  box-shadow: 1px 1px 8px #CCC;
  border-radius: 8px;
}

.card .img-container {
  height: 600px;
  width: 450px;
  padding: 40px;
  background-color: white;
}
.card .img-container > img {
  width: 100%;
  height: 10vw;
}

.full-width {
  width: 70vw;
  margin: auto;
}
</style>