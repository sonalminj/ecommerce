<template>
  <div class="landing-page">

    <img class="banner" src="../assets/home.webp" alt="Logo" />
    <div class="banner-text">
        <h1>Shop with us</h1>
        <p>Lorem ips elit. Ipsa, laudantium!</p>
    </div>

    <section class="landing-page-section">
      <h2>About Us</h2>
    </section>
    <section class="landing-page-section">
      <h2>Contact Us</h2>
    </section>

  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}

</script>


<style scoped>

.banner{
    position:relative
}
.landing-page img.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.banner-text{
    position:absolute;
    top:25%;
    color:black;
    padding:20px;
    font-size: 30px;


}
.banner-text h1{
    font-size: 70px;
    text-transform:uppercase;
    font-weight: bold;
    margin-bottom: 5px;


}

section.landing-page-section {
  text-align: center;
  padding: 20px;
}
</style> 


