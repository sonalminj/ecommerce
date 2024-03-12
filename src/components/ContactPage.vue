<template>
    <div>
        <body>
  <header>
    <h1>Contact Us</h1>
  </header>
  
  <section>
    <form action="submit_form.php" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </section>
</body>
    </div>
</template>

<script>
export default
{
    name:'ContactPage'
}
</script>


<style>
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      /* background-color: pink; */
      /* background-image: url('baac.jpg'); */
    
    }

    header {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
    }

    section {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color:white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      box-sizing: border-box;
      border-radius:10px
    }

    button {
      background-color: #333;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #555;
    }

</style>