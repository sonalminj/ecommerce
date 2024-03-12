<!-- product-detail-page.vue -->

<template>
    <div class="product-detail-page">
      <h1>Product Detail</h1>
      <div class="product-details">
        <img :src="product.image" alt="Product Image"/>
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <!-- Add more details as needed -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name:'ProductDetail',
    data() {
      return {
        product: null,
      };
    },
  
    async created() {
      const productId = this.$route.params.id;
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        this.product = res.data;
      } catch (err) {
        console.error(err);
      }
    },
  };
  </script>
  
  <style>
  /* Add styling for product detail page if needed */
  </style>
  