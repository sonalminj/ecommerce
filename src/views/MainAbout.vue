<template>

  <div class="about-us-container">
    <div class="heading">
      <h1>About Us</h1>
      <!-- <div><img src="../assets/banner.webp" alt=""></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla incidunt molestiae modi neque possimus exercitationem voluptates porro, nostrum maxime fugiat sapiente placeat numquam commodi odit? Tempora deserunt vitae quis assumenda modi eveniet animi, saepe minima inventore soluta pariatur deleniti magnam amet autem facere.</p> -->
      <!-- <p>Lorem ipsum dolor sit, amet consectetur.</p> -->
    </div>
    <section class='about-us'>
      <img src="../assets/team.jpg">
      <div class="content">
        <h2>Lorem ipsum, dolor </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          minus, amet consectetur adipisicing elit. Soluta, nesciunt voluptatibus. Illum aperiam suscipit harum, nulla
          fugit quidem ad tempore quisquam adipisci quo qui neque sunt consequatur enim voluptate laboriosam nostrum
          voluptatibus debitis quibusdam, veritatis tenetur placeat nisi, ullam dolorem? Officiis reiciendis provident
          repudiandae facilis incidunt ipsa itaque ratione est eaque ipsam? Quo, aut deserunt.
        </p>
        <button class="read-more-btn">Read More</button>
      </div>



    </section>

    <!-- ......
    -->

    <section class='about-us1'>

      <div class="content1">
        <h2>Lorem ipsum, dolor </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          minus, amet consectetur adipisicing elit. Soluta, nesciunt voluptatibus. Illum aperiam suscipit harum, nulla
          fugit quidem ad tempore quisquam adipisci quo qui neque sunt consequatur enim voluptate laboriosam nostrum
          voluptatibus debitis quibusdam, veritatis tenetur placeat nisi, ullam dolorem? Officiis reiciendis provident
          repudiandae facilis incidunt ipsa itaque ratione est eaque ipsam? Quo, aut deserunt.
        </p>
        <button class="read-more-btn1">Read More</button>
      </div>
      <img src="../assets/team1.webp">
    </section>
  </div>
</template>
<script>
export default {
  name: 'MainAbout'

}
</script>
<style>
.about-us-container {
  padding: 50px;
}



.heading {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 45px;
  width: 100%;
}

.heading h1 {
  font-size: 45px;
  color: #36455c;
  margin-top: 10px;

}

.heading p {
  font-size: 20px;
  color: #666;
  margin-bottom: 50px;
}

.about-us {
  display: flex;
  width: 100%;
}

.about-us img {
  flex: 0 50%;
  max-width: 50%;
  height: auto;
  border-radius: 5px;
}

.content {
  flex: 0 50%;
  padding: 15px;
  text-align: left;
}

.content h2 {
  color: #36455c;
  font-size: 24px;
  margin: 15px 0px;
  margin-left: 50px;
}

.content p {
  color: #666;
  font-size: 18px;
  line-height: 1.5;
  margin: 15px 0px;
  margin-left: 50px;
}

.read-more-btn {
  display: block;
  /* Change to block for full width */
  border-style: none;
  margin-left: 50px;
  margin-top: 20px;
  color: #fff;
  background-color: #0084ff;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease;
}

.read-more-btn:hover {
  background-color: #006dd6;
}

@media (max-width: 768px) {
  .about-us {
    flex-direction: column;
    gap: 40px;
  }

  .about-us img,
  .content {
    flex: 0 100%;
    max-width: 100%;
  }
}

/* ................ */

.about-us1 {
  display: flex;
  width: 100%;
}

.about-us1 img {
  flex: 0 50%;
  max-width: 50%;
  height: auto;
  border-radius: 5px;
  margin-top: 100px;

}




.content1 {
  flex: 0 50%;
  padding: 15px;
  text-align: left;
}

.content1 h2 {
  color: #36455c;
  font-size: 24px;
  margin: 15px 0px;
  margin-right: 50px;
  margin-top: 100px;
  margin-left: 30px;

}

.content1 p {
  color: #666;
  font-size: 18px;
  line-height: 1.5;
  margin: 15px 0px;
  margin-right: 50px;
  margin-left: 30px;

}

.read-more-btn1 {
  display: block;
  /* Change to block for full width */
  border-style: none;
  margin-right: 50px;
  margin-top: 20px;
  color: #fff;
  background-color: #0084ff;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease;
  margin-left: 30px;

}

.read-more-btn1:hover {
  background-color: #006dd6;
}

@media (max-width: 768px) {
  .about-us1 {
    flex-direction: column;
  }

  .about-us1 img,
  .content1 {
    flex: 0 100%;
    max-width: 100%;


  }
}
</style>