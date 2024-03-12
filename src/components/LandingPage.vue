<template>
    <div>

        <div><img src="../assets/Banner.jpg" alt="Logo" /></div>

        <section>
            <h2>About Us</h2>
        </section>
        <section>
            <h2>Contact Us</h2>
        </section>
    
    </div>


</template>
<script>
export default{
    name: 'LandingPage'


}

</script>


<style scoped>
  div {
    position: relative;
    width: 100%;
    height: 100vh; /* 100% of the viewport height */
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  section {
    text-align: center;
    padding: 20px;
  }
</style>


