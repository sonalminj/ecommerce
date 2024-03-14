<template>
  <div class="landing-page">
    <div class="banner" src="../assets/home.webp" alt="Logo">

      <div class="banner-text">
        <h1>Shop with us</h1>

        <router-link to="/products">
          <button>Show Products</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}

</script>


<style scoped>
.banner {
  position: relative;
  z-index: 1;
}

.banner {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/home.webp");
}

.banner::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.banner-text {
  position: absolute;
  top: 25%;
  color: white;
  padding: 20px;
  z-index: 200;
  font-family: Arial, Helvetica, sans-serif;
}

.banner-text h1 {
  font-size: 70px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
}

.landing-page button {
  background-color: white;
  color: #333;
  font-weight: 600;
  z-index: 0;
}

section.landing-page-section {
  text-align: center;
  padding: 20px;
}

@media screen and (max-width: 700px) {
  .banner-text h1 {
    font-size: 50px;
  }
}

@media screen and (max-width: 450px) {
  .banner-text h1 {
    font-size: 40px;
  }
}
</style>
