<template>
  <div>

    <body>




      <section class="contact-us">

        <div class="flex-row">
          <form method="post" class="flex-col">
            <div class="headingh1">
              <h1>Contact Us</h1>
            </div>
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>

            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>

            <div>
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required>
            </div>

            <div>
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>

          <img src="../assets/contact_us_clipart.jpg" />
        </div>
      </section>
    </body>
  </div>
</template>

<script>
export default
  {
    name: 'ContactPage'
  }
</script>


<style>

.contact-us .flex-row {
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 100%;
}

.contact-us .flex-col {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: stretch;
}

.contact-us .flex-row>* {
  flex: 1;
  width: 50%;
}


.headingh1 {
  text-align: center;
}

.contact-us {
  margin: 20px auto;
  padding: 20px 40px;
  background-color: white;
  box-shadow: 3px 3px 10px #ccc;
  border-radius: 10px;
  width: 80vw;
}

.contact-us img {
  height: 100%;
  width: 100%;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: medium;
}

.contact-us input,
.contact-us textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(220, 223, 223);
}

button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  background-color: #555;
}
</style>