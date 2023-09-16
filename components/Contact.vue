<template>
  <section id="contact" class="contact panelscroll">
    <div class="container">
      <div class="section-title">
        <span>Contact</span>
        <h2>Contact</h2>
        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
      </div>
    </div>

    <div class="map">
      <iframe style="border:0; width: 100%; height: 350px;"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55048.05497685518!2d-9.542944406945807!3d30.42182744318186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1679130931166!5m2!1sfr!2sma"
        frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="container">

      <div class="info-wrap mt-5">
        <div class="row">
          <div class="col-lg-4 info">
            <i class="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>80 Av. Ahmed Al Mansour Dahbi, <br>Agadir 80000</p>
          </div>

          <div class="col-lg-4 info mt-4 mt-lg-0">
            <i class="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>agadirIt@gmail.com<br>agadirIt@example.com</p>
          </div>

          <div class="col-lg-4 info mt-4 mt-lg-0">
            <i class="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>+1 5589 55488 51<br>+1 5589 22475 14</p>
          </div>
        </div>
      </div>

      <form action="forms/contact.php" method="post" role="form" class="php-email-form">
        <div class="row">
          <div class="col-md-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Votre Nom" required>
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
          </div>
        </div>
        <!-- <div class="form-group mt-3">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
        </div> -->
        <div class="form-group mt-3">
          <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit">ENVOYER</button></div>
      </form>

    </div>
  </section>
</template>