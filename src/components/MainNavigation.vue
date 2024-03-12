<template>
    <div>
      <header>
        <div class="logo">
          <!-- Replace 'logo.png' with the path to your logo image -->
          <img src="../assets/logo.png" alt="Logo" />
        </div>
        <nav>
          <router-link to="/">Home</router-link> 
          <router-link to="/about">About Us</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/contact">Contact Us</router-link>
        </nav>
      </header>
      <!-- Other content of your landing page -->
    </div>
  </template>
  <script>
  export default {
    name: 'MainNavigation'
    // Add any additional logic if needed
  }
  </script>
   
<style>
header {
  background-color: #333;
  color: white;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  max-height: 50px; /* Adjust the max-height based on your design */
}

nav {
  display: flex;
  gap:30px;
  
}

nav a {
  margin-right: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav router-link:hover {
  text-decoration: underline;
}
</style>
